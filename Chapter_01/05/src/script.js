import * as THREE from "three";

const canvas = document.getElementById("WebGL");

// Size
const sizes = {
  width: 800,
  height: 600,
};

// Scene
const scene = new THREE.Scene();

// Group
const group = new THREE.Group();
group.position.set(-1, 2, -2);
group.scale.set(1.5, 2, 1);
group.rotation.set(Math.PI * 0.25, 0, 0);

// Cube Red
const cubeRed = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: "red" })
);
cubeRed.position.x = 1.5;

// Cube Blue
const cubeBlue = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: "blue" })
);
cubeBlue.position.x = 3;

// Cube Green
const cubeGreen = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: "green" })
);

// mesh.position.y = 1;
// mesh.position.x = 1;
// mesh.position.z = -2;
// mesh.position.set(3, 1, -2);
// mesh.scale.x = 1.5;
// mesh.scale.y = 0.5;
// mesh.scale.z = 1;
// mesh.scale.set(1.5, 0.5, 1);
// mesh.rotation.reorder("YXZ");
// mesh.rotation.x = Math.PI * 0.25;
// mesh.rotation.y = Math.PI * 0.25;

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.x = 1.5;
camera.position.z = 4;
// camera.lookAt(cubeRed.position);

// Axes Helper
const axesHelper = new THREE.AxesHelper(2);

// Group Add
group.add(cubeRed);
group.add(cubeBlue);
group.add(cubeGreen);

// Scene Add
scene.add(group);
scene.add(camera);
scene.add(axesHelper);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas,
});
renderer.setSize(sizes.width, sizes.height);

// Render
renderer.render(scene, camera);
