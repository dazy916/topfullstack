<script setup>
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";
import { ref, onMounted, getCurrentInstance } from "vue"
const {
  proxy: { THREE },
  proxy: { ThreeStats }
} = getCurrentInstance();
const container = ref(null)


// 初始化场景
const scene = new THREE.Scene();
// 初始化相机
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerWidth, 0.1, 1000);
camera.position.z = 0.1
// 初始化渲染器
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

const render = () => {
  renderer.render(scene, camera);
  requestAnimationFrame(render)
}
// 添加立方体
const geometry = new THREE.BoxGeometry(3, 3, 3);

// 材质加载
const arr = ['right', 'left', 'top', 'bottom', 'front', 'back'];
const boxMaterials = [];

arr.forEach(a => {
  // 纹理加载
  let texture = new THREE.TextureLoader().load(`../public/${a}.jpg`);
  boxMaterials.push(new THREE.MeshBasicMaterial({ map: texture }));

});
const cube = new THREE.Mesh(geometry, boxMaterials);
cube.geometry.scale(1, 1, -1)
scene.add(cube)
// const geometry = new THREE.SphereGeometry(5,32,32);
// const loader = new RGBELoader();
// loader.load('../public/')

const animate = () => {
  render();
  requestAnimationFrame(animate);
}
animate();
onMounted(() => {
  // 添加控制器
  const controls = new OrbitControls(camera, container.value)
  controls.enableDamping = true
  container.value.appendChild(renderer.domElement)
  render()
  window.addEventListener('resize', () =>
    console.log(window.innerWidth, window.innerHeight));
  renderer.setSize(window.innerWidth, window.innerHeight);
  // 全屏情况下：设置观察范围长宽比aspect为窗口宽高比
  camera.aspect = window.innerWidth / window.innerHeight;
  // 渲染器执行render方法的时候会读取相机对象的投影矩阵属性projectionMatrix
  // 但是不会每渲染一帧，就通过相机的属性计算投影矩阵(节约计算资源)
  // 如果相机的一些属性发生了变化，需要执行updateProjectionMatrix ()方法更新相机的投影矩阵
  camera.updateProjectionMatrix();
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
