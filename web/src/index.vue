<script setup>
import { ref, reactive } from 'vue'
// const active = ref(0);
const status = reactive({ map: false, show: false })
</script>
<template>
    <!-- <div class="logo"></div> -->
    <div class="company"></div>
    <van-row class="top">
        <van-col>
            <van-icon name="phone-circle-o" @click="status.show = true, status.map = false" />
        </van-col>
        <van-col>
            <van-icon name="guide-o" @click="status.map = true, status.show = false" />
        </van-col>
    </van-row>
    <van-overlay :show="status.map || status.show" @click="status.map = false, status.show = false" style="z-index: 45;">
        <van-row gutter="20" class="map">
            <van-col span="12" v-if="status.map">
                <van-button
                    round
                    type="primary"
                    url="https://www.amap.com/search?id=B0IR5U0Q0R&city=511524&geoobj=106.964799%7C27.032021%7C106.970147%7C27.037352&query_type=IDQ&query=%E4%B8%AD%E4%B8%9A%E5%92%8C%E5%BA%9C%E8%90%A5%E9%94%80%E4%B8%AD%E5%BF%83&zoom=17.5"
                >高德地图</van-button>
            </van-col>
            <van-col span="12" v-if="status.map">
                <van-button
                    round
                    type="primary"
                    url="https://map.baidu.com/poi/%E4%B8%AD%E4%B8%9A%E5%92%8C%E5%BA%9C%E8%90%A5%E9%94%80%E4%B8%AD%E5%BF%83/@11680463.365,3303440.43,19z?uid=73358f8b84c8c1f058f6be6b&ugc_type=3&ugc_ver=1&device_ratio=1&compat=1&pcevaname=pc4.1&querytype=detailConInfo&da_src=shareurl"
                >百度地图</van-button>
            </van-col>
            <van-col span="24" v-if="status.show">
               <a href="tel:0831-4866888" class="van-button van-button--primary van-button--normal van-button--round" style="line-height: 2.6rem;">0831-4866888</a>
            </van-col>
        </van-row>
    </van-overlay>

    <iframe
        src="https://720yun.com/vr/1b62cqpuctg"
        frameborder="no"
        class="main"
    ></iframe>
</template>
<style lang="less" scoped>
.company {
    position: fixed;
    width: 5rem;
    height: 5rem;
    top: 1rem;
    left: 1rem;
    background-image: url("./assets/logo.png");
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
        margin-top: 1rem;
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