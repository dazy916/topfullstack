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
                    url="https://www.amap.com/place/B0HU7CXT8R"
                >高德地图</van-button>
            </van-col>
            <van-col span="12" v-if="status.map">
                <van-button
                    round
                    type="primary"
                    url="https://map.baidu.com/poi/%E6%B0%B4%E4%B8%9C%E5%A4%A7%E9%81%93/@11906252.005,3106598.13,19z?uid=cdea3a5565ebb27fcc04ef57&ugc_type=3&ugc_ver=1&device_ratio=2&compat=1&seckey=348b3ea8be0aad420af3f6fd20b5fe5d742b033169aaff9e55468f20442b2a4079fc11a7bd963ba9f8cb6be3ba7407e73b6fce9ae6fd7d808f0466c44c5b81ea98e8a84d585fdc79055e54e3f327772bbfaaa76f9d247a3ec940b1b12b0dc8d448852821004b3674fbb7dc4410c28fd972535645a1e228f212df9e3678aa8a5c6eddc68ded324baf47bfc5225509da8dd427ccb84ec77c75763fa28204c680aab519ce6f279e1426459298412761d5d6165ed40b3be96e4455f17272a487de126e5e45398636c1a1977df7ef2653dfdb48546ed9b321c32beb92b625ad9461fe4bdd43f07756f9b4aef23c854f1c7778&pcevaname=pc4.1&newfrom=zhuzhan_webmap&querytype=detailConInfo&da_src=shareurl"
                >百度地图</van-button>
            </van-col>
            <van-col span="24" v-if="status.show">
               <a href="tel:0851-87235888" class="van-button van-button--primary van-button--normal van-button--round" style="line-height: 2.6rem;">0851-87235888</a>
            </van-col>
        </van-row>
    </van-overlay>

    <iframe
        src="https://720yun.com/t/2bvkzqfm5fy"
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