import { getScreenWidth, getScreenHeight } from '@src/helper/windows'
import { getRandomColor } from '@src/helper/random'
import { getRange } from '@src/helper/utils'

const constants = {};

const initConstants = () => {
  constants.usLineMaterial = new THREE.LineBasicMaterial({color: '#FF00FF', linewidth: 20});
  constants.width = getScreenWidth();
  constants.height = getScreenHeight();
  constants.horizontalLines = [];
  constants.verticalLines = [];
  constants.camera = null;
  constants.fov = 70;
  constants.scene = null;
  constants.board = null;
  constants.usLine = null;
  constants.usLineDrawing = 2;
}

export function createAnimation(doc) {
  initConstants();
	createScene();
	createBoard();
  createUsLine()
  //createLight(scene);
  //fog();
	const camera = createCamera(-10);
	const renderer = createRenderer();
	doc.appendChild(renderer.domElement);
	render(renderer);
}

/**
* Create the renderer for the three js animation
**/
const createRenderer = () => {
	const renderer = new THREE.WebGLRenderer({antialias:true});
	renderer.setSize(constants.width, constants.height);
	renderer.setClearColor(0x000000, 1);
	return renderer;
}

/**
* Create the scene for the three js animation
**/
const createScene = () => {
	constants.scene = new THREE.Scene();
}

const fog = () => {
  const color = 0x000000;
  const near = 0;
  const far = 500;
  constants.scene.fog = new THREE.Fog(color, near, far);
}

const createBoard = () => {
	const board = new THREE.Group();
  board.dimension = {
    width: 2*constants.width/5,
    height: 500
  }
  board.step = {
    vertical: 30,
    horizontal: 30
  }
  board.limit = {
    left: -board.dimension.width/2,
    right: board.dimension.width/2,
    top: board.dimension.height,
    bottom: 0
  }
  const verticalPositionX = getRange(board.limit.left, board.limit.right, constants.width/board.step.vertical);
  const verticalVectors = createVectorsVertical(board.limit.bottom, board.limit.top, verticalPositionX);
  const horizontalPositionY = getRange(board.limit.bottom, board.limit.top, board.step.horizontal);
  const horizontalVectors = createVectorsHorizontal(board.limit.left, board.limit.right, horizontalPositionY);
  const vectors = [...verticalVectors, ...horizontalVectors];
  vectors.map(vector => {
    const line = createLine(vector);
    line.horizontal ? constants.horizontalLines.push(line) : constants.verticalLines.push(line);
		board.add(line)
	})
	constants.scene.add(board);
  constants.board = board;
}

const createVectorsHorizontal = (limitLower, limitUpper, positions) => {
  return positions.map(position => [
    {x: limitLower, y: 0, z: position, horizontal: true},
    {x: limitUpper, y: 0, z: position, horizontal: true}
  ])
}

const createVectorsVertical = (limitLower, limitUpper, positions) => {
  return positions.map(position => [
    {x: position, y: 0, z: limitLower, vertical: true},
    {x: position, y: 0, z: limitUpper, vertical: true}
  ])
}

const createLine = (vectors) => {
	const lineMaterial = new THREE.LineBasicMaterial({color: '#FFFFFF'});
  const points = [];
  vectors.map(vector => {
    points.push(new THREE.Vector3(vector.x, vector.y, vector.z));
  })
	const geometry = new THREE.BufferGeometry().setFromPoints(points);
	const line = new THREE.Line( geometry, lineMaterial );
  line.horizontal = vectors && vectors[0].horizontal;
	return line;
}

const createUsLine = () => {
  const lineRange = getRange(0, constants.board.limit.top, 1);
  const vectors = lineRange.map(z => ({x: 0, y: 0, z}));
  const points = [];
  vectors.map(vector => {
    points.push(new THREE.Vector3(vector.x, vector.y, vector.z));
  })
	const geometry = new THREE.BufferGeometry().setFromPoints(points);
  geometry.setDrawRange(0, constants.usLineDrawing);
	const line = new THREE.Line( geometry, constants.usLineMaterial );
	constants.scene.add(line);
  constants.usLine = line;
  console.log(constants.usLine)
}

/**
* Create a camera for the three js animation
**/
const createCamera = (positionZ) => {
	const camera = new THREE.PerspectiveCamera(constants.fov, constants.width/constants.height, 1, 1000);
	camera.position.z = positionZ;
	camera.position.y = 50;
	camera.lookAt( 0, 0, constants.board.limit.top );
	constants.scene.add(camera);
	constants.camera = camera;
}

const createLight = (scene) => {
	const lights = [];
	lights[0] = new THREE.PointLight( 0xffffff, 0.1, 0 );

	lights[ 0 ].position.set( 0, 200, 0 );
	scene.add( lights[0] );
}

/**
* Create the render
**/
const render = (renderer) => {
	renderer.render(constants.scene, constants.camera);

  if (constants.usLineDrawing <= 120) {
    constants.usLineDrawing = constants.usLineDrawing + 1 < 1000 ? constants.usLineDrawing + 1 : 1;
    constants.usLine.geometry.setDrawRange(0, constants.usLineDrawing);
  }

  constants.horizontalLines.map(horizontalLine => {
    horizontalLine.position.z = horizontalLine.position.z - 1 <= -30 ? 0 : horizontalLine.position.z - 1;
  })
	window.requestAnimationFrame(function() {
		render(renderer, constants.scene, constants.camera);
	});
}
