<script setup>
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
// import TWEEN from '@tweenjs/tween.js'
import { ref, onMounted, getCurrentInstance } from "vue"
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
const faceShow = ref(true)
onMounted(() => {
  setTimeout(() => {
    faceShow.value = false
  }, 5000)
})
// const {
//   proxy: { THREE },
//   proxy: { ThreeStats }
// } = getCurrentInstance();
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
    <router-view></router-view>
    <div class="navbar">
      <input type="checkbox">
      <span></span>
      <span></span>
      <ul>
        <li><a href="javascript:void(0)">全景鸟瞰</a></li>
        <li><a href="javascript:void(0)">园林</a></li>
        <li><a href="javascript:void(0)">户型</a></li>
        <li><a href="javascript:void(0)">关于</a></li>
      </ul>
    </div>
  </template>
</template>

<style lang="less">
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

.container {
  z-index: 1;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  // min-height: 35rem;
  background-image: linear-gradient(to bottom, rgba(76, 255, 180, 0.6) 0%, rgba(13, 255, 134, 0.6) 100%), url('https://images.unsplash.com/photo-1446824505046-e43605ffb17f');
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

/* 三个元素都需要弹性布局，所以写一块 */
body,
.navbar,
.navbar ul {
  display: flex;
  justify-content: center;
  align-items: center;

}

.navbar {
  /* 相对定位 */
  position: fixed;
  padding: 10px;
  background-color: #fff;
  border-radius: 50px;
  bottom: 10px;
  left: 50%;
  margin-left: -20px;
}

.navbar input {
  width: 40px;
  height: 40px;
  /* 不透明度设置为0，直接变透明 */
  opacity: 0;
  /* 鼠标变小手 */
  cursor: pointer;
}

.navbar span {
  /* 绝对定位 */
  position: absolute;
  left: 20px;
  /* 现将两条线都放到一起，然后单独设置第二条线的位置，calc方法可以自动计算数值 */
  top: calc(50% - 10px);
  width: 30px;
  height: 4px;
  border-radius: 15px;
  background-color: #999;
  /* 现在span覆盖着复选框，鼠标放到span上是点不中复选框的，这个属性就能解决这个问题，即便鼠标放到span上点击也能选中或取消选中复选框 */
  pointer-events: none;
  /* 收回来的时候过渡刚好是相反的 */
  transition: transform 0.3s ease-in-out, top 0.3s ease-in-out 0.3s;
}

/* 因为第二条线在navbar这个元素内的第三个位置，所这里写3 */
.navbar span:nth-child(3) {
  top: calc(50% + 6px);
}

.navbar ul {

  width: 0;
  /* 溢出隐藏 */
  overflow: hidden;
  /* 现在展开和收起速度太快了，加个过渡 */
  transition: all 0.5s;
  /* 现在导航栏收起的时候，这个圆是扁的 */
  /* 这个问题是因为文字被换行显示了，两个汉字竖着排列了，所以盒子被撑大了，下面这个属性就可以解决这个问题，让文字不换行显示 */
  white-space: nowrap;
}

.navbar ul li {
  list-style: none;
  margin: 0px 15px;
}

.navbar ul li a {
  /* 取消下划线 */
  text-decoration: none;
  font-size: 20px;
  font-weight: 700;
  color: #333;
}

.navbar ul li a:hover {
  color: #00595d;
}

/* :checked是当复选框被选中的时候，~是兄弟选择器，查找同一级的ul */
.navbar input:checked {
  .navbar {
    left: 0;
  }
}

.navbar input:checked~ul {
  width: 350px;
}

.navbar input:checked~span:nth-child(2) {
  top: calc(50% - 2px);
  transform: rotate(-45deg);
  background-color: #00595d;
  /* 这里先执行top，然后0.3秒后执行transform */
  transition: top 0.3s ease-in-out, transform 0.3s ease-in-out 0.3s;
}

.navbar input:checked~span:nth-child(3) {
  top: calc(50% - 2px);
  transform: rotate(45deg);
  background-color: #00595d;
  transition: top 0.3s ease-in-out, transform 0.3s ease-in-out 0.3s;
}
</style>
