<template>
    <div id="page_index" class="indexWindow">
        <pageHeader :pageIndex="pageIndex" :pageInfos="pageInfos"></pageHeader>
        <swiper :options="swiperOption">
            <swiper-slide 
                v-for="(indexInfo, index) in indexInfos" 
                :key="index" 
                :class="index === 0 ? 'usBanner' : ''" 
                :style="{backgroundImage: indexInfo.url}"
                >
                <canvas v-if="index === 0" :class="ready === true && boomable === true ? 'canvasAppear' : ''" id="c" @click="boom"></canvas>
                <div :class="{indexWindowBanner: true, first: index === 0}">
                    <p :class="ready === true && boomable === true && index === 0 ? 'textAppear' : ''">{{indexInfo.word_1}}</p>
                    <p>{{indexInfo.word_2}}</p>
                    <p class="more"><a href="page.html" @click="setSession(indexInfo.href)">了解更多</a></p>
                </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <footer><p>Copyright © 2018 Hong Hui Quantum. All Rights Reserved.</p></footer>
    </div>
</template>

<script>
import './load.styl'
import './load.js'
import './bannerCanvas.js'
import 'swiper/dist/css/swiper.css'
import './page_index.styl'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import pageHeader from '@/components/pageHeader.vue'
import pageFooter from '@/components/pageFooter.vue'

export default {
    data: function() {
        return{
            pageIndex: -1,
            pageInfos: [],
            indexInfos: [
                {href: 0, url: 'url(./static/img/usBanner_1.jpg)', word_1: '弘辉量子', word_2: '健康人居环境咨询服务与行业综合一站式解决方案'},
                {href: 2, url: 'url(./static/img/techBanner_1.jpg)', word_1: '核心技术', word_2: '食品级安全技术，给您最放心的保护'},
                {href: 2, url: 'url(./static/img/whyBanner_1.jpg)', word_1: '权威保证', word_2: '多重权威认证，行于行业前列'},
                {href: 3, url: 'url(./static/img/serviceBanner_1.jpg)', word_1: '专业化团队', word_2: '覆盖全国20多个一二线城市'},
            ],
            ready: false,
            boomable: true, 
            swiperOption: {
                effect : 'fade',
                autoplay: {
                    delay: 10000
                }
            }
        }
    },
    methods: {
        getData: function() {
            this.axios.get('./static/data.json').then((response) => {
                this.pageInfos = response.data
            })
        },
        boom: function() {
            this.boomable = this.boomable === false ? true : false
        },
        setSession: function(value) {
            sessionStorage.setItem("pageIndex", value); 
        }
    },
    created: function() {  
        this.$nextTick(function () {
            this.getData(); 
        })
    },
    mounted: function() {
        this.ready = true
    },
    components: { pageHeader, swiper, swiperSlide }
}
</script>

<style lang="stylus" scoped>
    
</style>

