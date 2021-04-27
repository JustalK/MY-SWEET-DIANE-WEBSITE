import { getScreenWidth, getScreenHeight } from '@src/helper/windows'

const horizontalLines = [];
const verticalLines = [];

export function createAnimation(doc) {
	const width = getScreenWidth();
	const height = getScreenHeight();
	const scene = createScene();
	createBoard(scene, width, height);
  //createLight(scene);
  fog(scene);
	const camera = createCamera(scene, width, height, 70, 1000);
	const renderer = createRenderer(width, height);
	doc.appendChild(renderer.domElement);
	render(renderer, scene, camera);
}

/**
* Create the renderer for the three js animation
**/
const createRenderer = (width, height) => {
	const renderer = new THREE.WebGLRenderer({antialias:true});
	renderer.setSize(width, height);
	renderer.setClearColor(0x000000, 1);
	return renderer;
}

/**
* Create the scene for the three js animation
**/
const createScene = () => {
	return new THREE.Scene();
}

const fog = scene => {
  const color = 0x000000;
  const near = 100;
  const far = 500;
  scene.fog = new THREE.Fog(color, near, far);
}

/**
* Create the box
**/
const createBox = scene => {
	var boxGeometry = new THREE.BoxGeometry(10, 10, 10);
	var basicMaterial = new THREE.MeshBasicMaterial({color: 0x0095DD});
	var cube = new THREE.Mesh(boxGeometry, basicMaterial);
	scene.add(cube);
	cube.rotation.set(0.4, 0.2, 0);
}

const range = (start, stop, step) => {
  return Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
}

const createBoard = (scene, width, height) => {
	const board = new THREE.Group();
  board.dimension = {
    width: 2*width/5,
    height: 2000
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
  const verticalPositionX = range(board.limit.left, board.limit.right, width/board.step.vertical);
  const verticalVectors = createVectorsVertical(board.limit.bottom, board.limit.top, verticalPositionX);
  const horizontalPositionY = range(board.limit.bottom, board.limit.top, board.step.horizontal);
  const horizontalVectors = createVectorsHorizontal(board.limit.left, board.limit.right, horizontalPositionY);
  const vectors = [...verticalVectors, ...horizontalVectors];
  vectors.map(vector => {
    const line = createLine(vector);
    line.horizontal ? horizontalLines.push(line) : verticalLines.push(line);
		board.add(line)
	})
	scene.add(board);
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
	const lineMaterial = new THREE.LineBasicMaterial({color: 0xffffff});
  const points = [];
  vectors.map(vector => {
    points.push(new THREE.Vector3(vector.x, vector.y, vector.z));
  })
	const geometry = new THREE.BufferGeometry().setFromPoints(points);
	const line = new THREE.Line( geometry, lineMaterial );
  line.horizontal = vectors && vectors[0].horizontal;
	return line;
}

/**
* Create a camera for the three js animation
**/
const createCamera = (scene, width, height, fov, positionZ) => {
	const camera = new THREE.PerspectiveCamera(fov, width/height, 1, 1000);
	camera.position.z = positionZ;
	camera.position.y = 50;
	camera.lookAt( 0, 0, 0 );
	scene.add(camera);
	return camera;
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
const render = (renderer, scene, camera) => {
	renderer.render(scene, camera);

  horizontalLines.map(horizontalLine => {
    horizontalLine.position.z = horizontalLine.position.z + 2 >= 30 ? 0 : horizontalLine.position.z + 2;

  })
	window.requestAnimationFrame(function() {
		render(renderer, scene, camera);
	});
}
