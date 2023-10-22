import { THREE } from "@/plugins/threeJs";
import { gsap } from "@/plugins/gsap";

const canvas = document.getElementById("WebGL");

// Size
const sizes = {
  width: 800,
  height: 600,
};

// Scene
const scene = new THREE.Scene();

// Cube Red
const cubeRed = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: "red" })
);

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;

// Scene Add
scene.add(cubeRed);
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas,
});
renderer.setSize(sizes.width, sizes.height);

// Animations
gsap.to(cubeRed.position, { duration: 1, delay: 0.5, x: 2 });
gsap.to(cubeRed.position, { duration: 1, delay: 1, x: 0 });

const frame = () => {
  // Render
  renderer.render(scene, camera);

  // call on the next frame
  requestAnimationFrame(frame);
};
frame();
