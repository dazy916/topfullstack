<script setup>
import { ref, reactive } from 'vue'
// const active = ref(0);
const status = reactive({ map: false, show: false })
</script>
<template>   

    <iframe
        src="https://720yun.com/vr/4be2cqpucng"
        frameborder="no"
        class="main"
    ></iframe>
</template>
<style lang="less" scoped>
.company {
    position: fixed;
    width: 12rem;
    height: 1rem;
    top: 1rem;
    right: 1rem;
    background-image: url("./assets/image/company.png");
    background-size: contain;
    background-repeat: no-repeat;
}
.van-tabbar-item {
    color: #eac699;
}
.van-tabbar-item--active {
    background-color: transparent !important;
    color: #b68363;
}
.van-tabbar-item__icon img {
    height: 26px;
}
.top {
    position: absolute;
    bottom: 5rem;
    right: 1rem;
    width: 2rem;
    z-index: 4;
    color: #ffffff;
    font-size: 2rem;
    i {
        display: inline-block;
        margin-top: 2rem;
        color: #ffffff;
    }
}
.map {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 5rem;
}
</style>