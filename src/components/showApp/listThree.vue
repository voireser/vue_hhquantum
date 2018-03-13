<template>
    <div class="listThree">
        <p v-for="(listThree, index) in listThrees" :key="listThree.id">
            <a :href="listThree.href" target="_blank" @click="show(index)">
                <i class="iconfont" v-html="listThree.icon"></i>{{listThree.word}}
            </a>
        </p>

        <modal name="productionPaper"
            transition="nice-modal-fade"
            :min-width="200"
            :min-height="200"
            :delay="100"
            :adaptive="true">
            <swiper :options="swiperOption">
                <swiper-slide v-for="countryOne in countryUse" :key="countryOne.src">
                    <img class="img-responsive" :src="countryOne.src">
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </modal>
    </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
    data: function() {
        return {
            listThrees: [
                {
                    id: 0,
                    icon: '&#xe64d;',
                    href: 'http://www.piaj.gr.jp/piaj_product/51.html',
                    word: '光触媒工业协会(PIAJ)认证'
                },
                {
                    id: 1,
                    icon: '&#xe643;',
                    href: 'javascript:',
                    word: '日方检测报告'
                },
                {
                    id: 2,
                    icon: '&#xe63f;',
                    href: 'javascript:',
                    word: '中国CMA检测报告'
                }
            ],
            swiperOption: {
                effect : 'flip',
                pagination: {
                    el: '.swiper-pagination',
                    type: 'fraction'
                },
                loop : true
            },
            country: {
                japanese: [
                    { src: './static/img/techPic_1.jpg' },
                    { src: './static/img/techPic_2.jpg' }
                ],
                chinese: [
                    { src: './static/img/techPic_3.jpg' }, 
                    { src: './static/img/techPic_4.jpg' }, 
                    { src: './static/img/techPic_5.jpg' }, 
                    { src: './static/img/techPic_6.jpg' }
                ]
            },
            countryNum: 0, adaptive: true
        }
    },
    computed: {
        countryUse: function() {
            if(this.countryNum === 1) { return this.country.japanese
            } else if (this.countryNum === 2) { return this.country.chinese
            }
        }
    },
    methods: {
        show(index) {
            if(index === 1) { 
                this.countryNum = 1
                this.$modal.show('productionPaper');
            } else if (index === 2) { 
                this.countryNum = 2
                this.$modal.show('productionPaper');
            }
        },
        hide() {
            this.$modal.hide('productionPaper');
        }
    },
    components: { swiper, swiperSlide }
}
</script>

<style lang="stylus" scoped>
    
</style>
