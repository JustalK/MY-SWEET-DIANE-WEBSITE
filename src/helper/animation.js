import { getScreenWidth, getScreenHeight } from '@src/helper/windows'

export function createAnimation(doc) {
	const width = getScreenWidth();
	const height = getScreenHeight();
	const scene = createScene();
	createBoard(scene, width, height);
	const camera = createCamera(scene, width, height, 70, 500);
	const renderer = createRenderer(width, height);
	doc.appendChild(renderer.domElement);
	render(renderer, scene, camera);
}

/**
* Create the renderer for the three js animation
**/
function createRenderer(width, height) {
	const renderer = new THREE.WebGLRenderer({antialias:true});;
	renderer.setSize(width, height);
	renderer.setClearColor(0x000000, 1);
	return renderer;
}

/**
* Create the scene for the three js animation
**/
function createScene() {
	return new THREE.Scene();
}

/**
* Create the box
**/
function createBox(scene) {
	var boxGeometry = new THREE.BoxGeometry(10, 10, 10);
	var basicMaterial = new THREE.MeshBasicMaterial({color: 0x0095DD});
	var cube = new THREE.Mesh(boxGeometry, basicMaterial);
	scene.add(cube);
	cube.rotation.set(0.4, 0.2, 0);
}

const range = (start, stop, step) => {
  return Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
}

function createBoard(scene, width, height) {
	const board = new THREE.Group();
  const length = 30;
  board.dimension = {
    width: 2*width/5,
    height: 1000
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
		board.add(line)
	})
	scene.add(board);
}

function createVectorsHorizontal(limitLower, limitUpper, positions) {
  return positions.map(position => [
    {x: limitLower, y: 0, z: position},
    {x: limitUpper, y: 0, z: position}
  ])
}

function createVectorsVertical(limitLower, limitUpper, positions) {
  return positions.map(position => [
    {x: position, y: 0, z: limitLower},
    {x: position, y: 0, z: limitUpper}
  ])
}

function createLine(vectors) {
	const lineMaterial = new THREE.LineBasicMaterial({color: 0xffffff});
	const points = [];
  vectors.map(vector => {
    points.push(new THREE.Vector3(vector.x, vector.y, vector.z));
  })
	const geometry = new THREE.BufferGeometry().setFromPoints(points);
	const line = new THREE.Line( geometry, lineMaterial );
	return line;
}

/**
* Create a camera for the three js animation
**/
function createCamera(scene, width, height, fov, positionZ) {
	const camera = new THREE.PerspectiveCamera(fov, width/height);
	camera.position.z = positionZ;
	camera.position.y = 50;
	camera.lookAt( 0, 0, 0 );
	scene.add(camera);
	return camera;
}

function createLight(scene) {
	const lights = [];
	lights[ 0 ] = new PointLight( 0xffffff, 1, 0 );
	lights[ 1 ] = new PointLight( 0xffffff, 1, 0 );
	lights[ 2 ] = new PointLight( 0xffffff, 1, 0 );

	lights[ 0 ].position.set( 0, 200, 0 );
	lights[ 1 ].position.set( 100, 200, 100 );
	lights[ 2 ].position.set( - 100, - 200, - 100 );

	scene.add( lights[ 0 ] );
	scene.add( lights[ 1 ] );
	scene.add( lights[ 2 ] );
}

/**
* Create the render
**/
function render(renderer, scene, camera) {
	renderer.render(scene, camera);
	window.requestAnimationFrame(function() {
		render(renderer, scene, camera);
	});
}
