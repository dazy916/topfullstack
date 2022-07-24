<script setup>
import b from './assets/b.jpg'
import c from './assets/c.jpg'
import d from './assets/d.jpg'
import e from './assets/e.jpg'
import bImg from './assets/bImg.jpg'
import cImg from './assets/cImg.jpg'
import dImg from './assets/dImg.jpg'
import eImg from './assets/eImg.jpg'
import { ref } from 'vue'
const active = ref(0)
const show = ref(false)
const houseList = [
  { name: 'B户型', pic: b, img: bImg,url:'https://720yun.com/vr/9bb2dqpu9ci' },
  { name: 'C户型', pic: c, img: cImg,url:'https://720yun.com/vr/26523qp69nv' },
  { name: 'D户型', pic: d, img: dImg,url:'https://720yun.com/vr/6c623qp6uy6' },
  { name: 'E户型', pic: e, img: eImg ,url:'https://720yun.com/vr/dfa2bqp6u4w'}
]
const open=(val)=>{
  show.value=!show.value
}
</script>
<template>  
<div class="showbox">
<van-tabs v-model:active="active" class="tabsbox">
    <van-tab :title="item.name" v-for="(item, idx) in houseList">
    <div class="point point-flicker">
    <span @click="open"><i class="icon iconfont icon-VR" aria-hidden="true"></i>VR</span></div>
      <div class="d-flex bg" :style="'background-image: url(' + item.pic + `)`"></div>
      <div class="box"> </div>
      <div class="d-flex bg" :style="'background-image: url(' + item.img + `)`"></div>
    </van-tab>
  </van-tabs>
  <iframe
        :src="houseList[active].url"
        frameborder="no"
        class="iframebox"
        v-if="show"
    >
    </iframe>
    <van-icon name="revoke" size="30" @click="open" class="back" v-if="show"/>
    </div>
</template>
<style scoped lang="less">
.showbox{
  position: relative;
  width: 100vw;
  height: 100vh;
}
.iframebox{
  position: absolute;
  width: 100vw;
  height: 100vh;
  left: 0;
  right: 0;
  z-index: 20;
  
}
.back{  
  position: absolute;
  left: 1rem;
  top: 1rem;
  z-index: 30;
}
.tabsbox{
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  height: 100vh;
}
.bg {
  // position: relative;
  background-attachment: fixed;
  width: 100vw;
  height: 100vh;
  background-size: cover;

}
.box{ 
  position: absolute;
  left: 50%;
  top: 90vh;
  margin-left: -10px;
  animation: change 1s  ease-in  infinite ;  display:block;   width:0; 
    height:0; 
    border-left:10px solid transparent;
    border-right:10px solid transparent;
    border-top:10px solid #c29152;}
        @keyframes change {
            0%{  opacity:0;}
            50%{  opacity:1;}
            100%{  opacity:0;}
        }
:deep(.van-tabs__wrap) {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: none;
}
:deep(.van-tabs__nav) {
  background: rgba(2, 95, 80, .6);
}
:deep(.van-tab){
  color: #fff;
}
.point {
    width: 50px;
    height: 50px;
    background-color: #2ea598;
    position: absolute;
    left: 50%;
    border-radius: 50%;
    margin: 10vh 0 0 -25px;
    span{
      display: flex;
      flex-direction: column;
      position: absolute;
      left: 0;
      top: 10px;
      width: 50px;
      z-index: 10;
      color: #fff;
      font-size: 12px;
    }
  }
 
  /* 设置动画前颜色 */
  .point-flicker:after {
    background-color: #2ea598;
  }
 
  /* 设置动画后颜色 */
  .point-flicker:before {
    background-color: rgba(0, 168, 253, 0.2);
  }
 
  /* 设置动画 */
  .point-flicker:before,
  .point-flicker:after {
    content: '';
    width: 80px;
    height: 80px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -40px;
    margin-top: -40px;
    border-radius: 50%;
    animation: warn 1.5s ease-out 0s infinite;
  }
 
  @keyframes warn {
    0% {
      transform: scale(0.5);
      opacity: 1;
    }
 
    30% {
      opacity: 1;
    }
 
    100% {
      transform: scale(1.4);
      opacity: 0;
    }
  }

</style>