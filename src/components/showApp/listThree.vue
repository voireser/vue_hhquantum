<template>
    <div class="listThree">
        <p v-if="returnId === 0" v-for="(listOne, index) in listThree" :key="listOne.id">
            <a :href="listOne.href" target="_blank" @click="show(index)">
                <i class="iconfont" v-html="listOne.icon"></i>{{listOne.word}}
            </a>
        </p>

        <p v-if="returnId === 1" :class="returnId === 1 ? 'listThree_2' : ''" v-for="listOne in listThree" :key="listOne.id">
            <i class="iconfont right" v-html="listOne.icon"></i>
            <span>{{listOne.word}}</span>
            <span>{{listOne.word_2}}</span>
            <span>{{listOne.word_3}}</span>
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
    props: {
        returnId: {
            type: Number,
            required: true
        }
    },
    data: function() {
        return {
            listThrees: [
                [
                    { id: 0, icon: '&#xe64d;', href: 'http://www.piaj.gr.jp/piaj_product/51.html', word: '光触媒工业协会(PIAJ)认证' },
                    { id: 1, icon: '&#xe643;', href: 'javascript:', word: '日方检测报告' },
                    { id: 2, icon: '&#xe63f;', href: 'javascript:', word: '中国CMA检测报告' }
                ],
                [
                    { id: 3, icon: '&#xe637;', href: 'javascript:', word: '急性口服毒性试验', word_2: '认证号：207062138-001', word_3: '观察口服规定量14天后的结果，LD50值在2,000mg/kg以上' },
                    { id: 4, icon: '&#xe637;', href: 'javascript:', word: '皮肤一次过敏试验', word_2: '认证号：207062138-002', word_3: '无伤以及有伤皮肤涂抹，封闭4小时除去后的观察结果为[无刺激性]' },
                    { id: 5, icon: '&#xe637;', href: 'javascript:', word: '变异原性试验', word_2: '认证号：207062138-003', word_3: '以[新规化学物质等相关实验办法]为标准进行实验结果为阴性' }
                ]
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
        },
        listThree: function() {
            return this.listThrees[this.returnId]
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
    .listThree_2
        text-align left 
        padding-left: 1.2rem;
        i
            position absolute
            margin-left -0.9rem
            line-height 0.35rem
            height 0.6rem
            font-size: 0.25rem;
        span 
            display block
        span:nth-child(2)
            color #000
            margin-top: -0.05rem;
        span:nth-child(3)
            color #078ddc
            margin-bottom: 0.1rem;   

</style>
