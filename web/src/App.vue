<script setup>
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { ref, onMounted } from "vue"
const container = ref(null)
// 初始化场景
const scene = new THREE.Scene();
// 初始化相机
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerWidth, 0.1, 1000);
camera.position.z = 5
// 初始化渲染器
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

const render = () => {
  renderer.render(scene, camera);
  requestAnimationFrame(render)
}
// 添加立方体
const geometry = new THREE.BoxGeometry(6, 6, 6);

// 材质加载
const arr=['right','left','top','bottom','front','back'];
const boxMaterials = [];

arr.forEach(a=>{
  // 纹理加载
  let texture = new THREE.TextureLoader().load(`../public/${a}.jpg`);
  boxMaterials.push(new THREE.MeshBasicMaterial({map:texture}));

});
const cube = new THREE.Mesh(geometry, boxMaterials);
cube.geometry.scale(1,1,-1)
scene.add(cube)


onMounted(() => {
  // 添加控制器
  const controls = new OrbitControls(camera, container.value)
  controls.enableDamping = true
  container.value.appendChild(renderer.domElement)
  render()
})
</script>

<template>
  <div class="container" ref="container"></div>
</template>

<style>
html,
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container {
  width: 100vw;
  height: 100vh;
  background-color: #f0f0f0;
}
</style>
