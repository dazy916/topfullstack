<script setup>
// import {OrbitControls} from "three/examples/jsm/controls/OrbitControls.js";
// import TWEEN from '@tweenjs/tween.js'
import { ref, onMounted, getCurrentInstance } from "vue"
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
const faceShow = ref(true)
const isIdx = ref(null)
const nav = [{
  name: '鸟瞰',
  path: '/index',
  icon: 'vrquanjingtux'
}, {
  name: '户型',
  path: '/house',
  icon: 'VR'
}, {
  name: '园林',
  path: '/garden',
  icon: 'VRquanjingtiyan-'
}, {
  name: '免责',
  path: '/exemption',
  icon: 'dvr'
}]
const goPage = (path) => {
  console.info(route.name)
  nav.forEach((a, idx) => {
    if (a.path === path) isIdx.value = idx
  })
  router.push(path)
}
const fold = () => {
  isIdx.value = isIdx.value < 0 ? 0 : -1
}
onMounted(() => {
  setTimeout(() => {
    faceShow.value = false
  }, 5000)

})
</script>

<template>

  <div class="container" v-if="faceShow">

    <h1><img src="./assets/logo.png" alt="" width="50%" class="logo"></h1>

    <div class="bird-container bird-container--one">
      <div class="bird bird--one"></div>
    </div>

    <div class="bird-container bird-container--two">
      <div class="bird bird--two"></div>
    </div>

    <div class="bird-container bird-container--three">
      <div class="bird bird--three"></div>
    </div>

    <div class="bird-container bird-container--four">
      <div class="bird bird--four"></div>
    </div>

  </div>
  <template v-else>
    <router-view>
    </router-view>
    <nav :class="['newmenu', { 'fold': isIdx < 0 }]">
      <ul>
        <li @click="fold"><img src="./assets/logo.png" alt="" width="50" class="logo" /></li>
        <li v-for="(item, index) in nav" @click="goPage(item.path)">
          <i :class="['icon', 'iconfont', 'icon-' + item.icon, { 'isIdx': isIdx === index }]" aria-hidden="true"></i>{{
              item.name
          }}
        </li>
      </ul>
    </nav>
    <!-- <nav class="menu">
      <input type="checkbox" class="menu-toggler" id="menu_toggler">
      <label for="menu_toggler"></label>
      <ul>
        <li class="menu-item" v-for="item in nav" @click="goPage(item.path)">
          <a href="#"><i :class="['icon', 'iconfont', 'icon-'+item.icon ]" aria-hidden="true"></i>{{ item.name }}
          </a>
        </li>
      </ul>
    </nav> -->
  </template>
</template>

<style lang="less">
// 阿里字体图标设置
.icon,
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px !important;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}

html,
body,
ul,
li {
  margin: 0;
  padding: 0;
}

body {
  background: #00595d
}

.main {
  display: flex;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

.text-left {
  text-align: left;
}

h1 {
  font-family: 'Arima Madurai', cursive;
  color: black;
  font-size: 4rem;
  letter-spacing: -3px;
  text-shadow: 0px 1px 1px rgba(255, 255, 255, 0.6);
  position: relative;
  z-index: 3;

  .logo {
    padding: 20px;
    filter: drop-shadow(0px 1px 4px #012c16);
  }
}

.newmenu {
  height: 3rem;
  position: fixed;
  bottom: .8rem;
  left: .5rem;
  right: .5rem;
  z-index: 3;

  &.fold {
    width: 20%;

    ul {
      li {
        width: 0;
        display: none;

        &:first-child {
          width: 100%;
          display: block;
          border-bottom-right-radius: .5rem;
          border-top-right-radius: .5rem;
        }
      }
    }
  }

  ul {
    display: flex;
    width: 100%;
    justify-content: space-between;

    li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 20%;
      padding: .3rem 0;
      background: radial-gradient(at center, rgb(2, 95, 80), rgb(0, 29, 34));
      color: #fff;
      font-size: 14px;
      border-right: 1px solid rgb(2, 95, 80);

      &:last-child {
        border-bottom-right-radius: .5rem;
        border-top-right-radius: .5rem;
      }

      &:first-child {
        border-bottom-left-radius: .5rem;
        border-top-left-radius: .5rem;
        background-image: none;
        background-color: rgb(194, 145, 82);
      }

      .isIdx {
        color: rgb(250, 146, 85);
        text-shadow: 0 0 10px red, 0 0 20px red, 0 0 30px red, 0 0 40px red;
        // box-shadow: 0 0 10px rgb(0,153,184) inset,0 0 30px rgb(0,153,184);
      }

    }
  }
}

.container {
  z-index: 1;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  // min-height: 35rem;
  background-image: linear-gradient(to bottom, rgba(76, 255, 180, 0.6) 0%, rgba(13, 255, 134, 0.6) 100%), url('./assets/face.jpg');
  background-blend-mode: soft-light;
  background-size: cover;
  background-position: center center;
  padding: 2rem;
}

.bird {
  background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/174479/bird-cells-new.svg);
  background-size: auto 100%;
  width: 88px;
  height: 125px;
  will-change: background-position;

  animation-name: fly-cycle;
  animation-timing-function: steps(10);
  animation-iteration-count: infinite;

  &--one {
    animation-duration: 1s;
    animation-delay: -0.5s;
  }

  &--two {
    animation-duration: 0.9s;
    animation-delay: -0.75s;
  }

  &--three {
    animation-duration: 1.25s;
    animation-delay: -0.25s;
  }

  &--four {
    animation-duration: 1.1s;
    animation-delay: -0.5s;
  }

}

.bird-container {
  position: absolute;
  top: 20%;
  left: -10%;
  transform: scale(0) translateX(-10vw);
  will-change: transform;

  animation-name: fly-right-one;
  animation-timing-function: linear;
  animation-iteration-count: infinite;

  &--one {
    animation-duration: 15s;
    animation-delay: 0;
  }

  &--two {
    animation-duration: 16s;
    animation-delay: 1s;
  }

  &--three {
    animation-duration: 14.6s;
    animation-delay: 9.5s;
  }

  &--four {
    animation-duration: 16s;
    animation-delay: 10.25s;
  }

}

@keyframes fly-cycle {

  100% {
    background-position: -900px 0;
  }

}

@keyframes fly-right-one {

  0% {
    transform: scale(0.3) translateX(-10vw);
  }

  10% {
    transform: translateY(2vh) translateX(10vw) scale(0.4);
  }

  20% {
    transform: translateY(0vh) translateX(30vw) scale(0.5);
  }

  30% {
    transform: translateY(4vh) translateX(50vw) scale(0.6);
  }

  40% {
    transform: translateY(2vh) translateX(70vw) scale(0.6);
  }

  50% {
    transform: translateY(0vh) translateX(90vw) scale(0.6);
  }

  60% {
    transform: translateY(0vh) translateX(110vw) scale(0.6);
  }

  100% {
    transform: translateY(0vh) translateX(110vw) scale(0.6);
  }

}

@keyframes fly-right-two {

  0% {
    transform: translateY(-2vh) translateX(-10vw) scale(0.5);
  }

  10% {
    transform: translateY(0vh) translateX(10vw) scale(0.4);
  }

  20% {
    transform: translateY(-4vh) translateX(30vw) scale(0.6);
  }

  30% {
    transform: translateY(1vh) translateX(50vw) scale(0.45);
  }

  40% {
    transform: translateY(-2.5vh) translateX(70vw) scale(0.5);
  }

  50% {
    transform: translateY(0vh) translateX(90vw) scale(0.45);
  }

  51% {
    transform: translateY(0vh) translateX(110vw) scale(0.45);
  }

  100% {
    transform: translateY(0vh) translateX(110vw) scale(0.45);
  }

}

.menu {
  position: fixed;
  bottom: 40px;
  left: 0;
  right: 0;
  z-index: 110;
}

.menu-toggler {
  position: absolute;
  display: block;
  top: 0;
  bottom: 20px;
  right: 0;
  left: 0;
  margin: auto;
  width: 40px;
  height: 40px;
  z-index: 2;
  opacity: 0;
  cursor: pointer;
}

.menu-toggler:hover+label,
.menu-toggler:hover+label::before,
.menu-toggler:hover+label::after {
  background: #fff;
}

.menu-toggler:checked+label {
  background: transparent;
}

.menu-toggler:checked+label::before,
.menu-toggler:checked+label::after {
  top: 0;
  width: 40px;
  transform-origin: 50% 50%;
}

.menu-toggler:checked+label::before {
  transform: rotate(45deg);
}

.menu-toggler:checked+label::after {
  transform: rotate(-45deg);
}

.menu-toggler:checked~ul .menu-item {
  opacity: 1;
}

.menu-toggler:checked~ul .menu-item:nth-child(1) {
  transform: rotate(0deg) translateX(-110px);
}

.menu-toggler:checked~ul .menu-item:nth-child(2) {
  transform: rotate(60deg) translateX(-110px);
}

.menu-toggler:checked~ul .menu-item:nth-child(3) {
  transform: rotate(120deg) translateX(-110px);
}

.menu-toggler:checked~ul .menu-item:nth-child(4) {
  transform: rotate(180deg) translateX(-110px);
}

.menu-toggler:checked~ul .menu-item:nth-child(5) {
  transform: rotate(240deg) translateX(-110px);
}

.menu-toggler:checked~ul .menu-item:nth-child(6) {
  transform: rotate(300deg) translateX(-110px);
}

.menu-toggler:checked~ul .menu-item a {
  pointer-events: auto;
}

.menu-toggler+label {
  width: 40px;
  height: 5px;
  display: block;
  z-index: 1;
  border-radius: 2.5px;
  background: rgba(255, 255, 255, 0.7);
  transition: transform 0.5s, top 0.5s;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
}

.menu-toggler+label::before,
.menu-toggler+label::after {
  width: 40px;
  height: 5px;
  display: block;
  z-index: 1;
  border-radius: 2.5px;
  background: rgba(255, 255, 255, 0.7);
  transition: transform 0.5s, top 0.5s;
  content: "";
  position: absolute;
  left: 0;
}

.menu-toggler+label::before {
  top: 10px;
}

.menu-toggler+label::after {
  top: -10px;
}

.menu-item:nth-child(1) a {
  transform: rotate(0deg);
}

.menu-item:nth-child(2) a {
  transform: rotate(-60deg);
}

.menu-item:nth-child(3) a {
  transform: rotate(-120deg);
}

.menu-item:nth-child(4) a {
  transform: rotate(-180deg);
}

.menu-item:nth-child(5) a {
  transform: rotate(-240deg);
}

.menu-item:nth-child(6) a {
  transform: rotate(-300deg);
}

.menu-item {
  position: absolute;
  display: block;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 80px;
  height: 80px;
  opacity: 0;
  transition: 0.5s;
}

.menu-item a {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: inherit;
  height: inherit;
  // line-height: 80px;
  color: rgba(0, 89, 93, 0.7);
  background: rgba(255, 255, 255, 0.7);
  border-radius: 50%;
  text-align: center;
  text-decoration: none;
  font-size: 12px;
  pointer-events: none;
  transition: 0.2s;
  box-shadow: 0 2px 10px #333;
}

.menu-item a:hover {
  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.3);
  color: rgba(0, 89, 93, 0.7);
  background: rgba(255, 255, 255, 1);
  font-size: 16px;
}
</style>
