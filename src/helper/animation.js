import { getScreenWidth, getScreenHeight } from '@src/helper/windows'

export function createAnimation(doc) {
	const width = getScreenWidth();
	const height = getScreenHeight();
	const scene = createScene();
	createBox(scene);
	const camera = createCamera(scene, width, height, 70, 50);
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
	renderer.setClearColor(0xDDDDDD, 1);
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

/**
* Create a camera for the three js animation
**/
function createCamera(scene, width, height, fov, positionZ) {
	const camera = new THREE.PerspectiveCamera(fov, width/height);
	camera.position.z = positionZ;
	scene.add(camera);
	return camera;
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
