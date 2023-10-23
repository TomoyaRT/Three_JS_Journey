import { THREE } from "@/plugins/threeJs";

const canvas = document.getElementById("WebGL");

// Size
const sizes = {
  width: 800,
  height: 600,
};

// Mouse
const cursor = {
  x: 0,
  y: 0,
};
canvas.addEventListener("mousemove", handleMouseMove);
function handleMouseMove(event) {
  cursor.x = event.clientX / sizes.width - 0.5;
  cursor.y = -(event.clientY / sizes.height - 0.5);
}

// Scene
const scene = new THREE.Scene();

// Cube Red
const cubeRed = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: "red" })
);

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
// const aspectRatio = sizes.width / sizes.height;
// const camera = new THREE.OrthographicCamera(
//   -1 * aspectRatio,
//   1 * aspectRatio,
//   1,
//   -1,
//   0.1,
//   100
// );
camera.position.z = 3;
camera.lookAt(cubeRed.position);

// Scene Add
scene.add(cubeRed);
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas,
});
renderer.setSize(sizes.width, sizes.height);

// Animate
const clock = new THREE.Clock();

const frame = () => {
  const elapsedTime = clock.getElapsedTime();

  // Update objects
  cubeRed.position.x = Math.sin(cursor.x * Math.PI * 2) * 3;
  cubeRed.position.z = Math.cos(cursor.x * Math.PI * 2) * 3;
  // cubeRed.position.y = cursor.y * 3;
  camera.lookAt(cubeRed.position);

  // Render
  renderer.render(scene, camera);

  // run the next frame
  window.requestAnimationFrame(frame);
};

frame();
