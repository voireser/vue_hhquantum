<template>
    <div class="logoSpace">
        <swiper :options="swiperOption">
            <swiper-slide v-for="logoSpace in logoSpaces" :key="logoSpace.key">
                <img class="img-responsive" :src="logoSpace.src">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
    data: function() {
        return {
            logoSpaces: [
                {key: 0, src: '/static/img/logo/logo_1.png'},
                {key: 1, src: '/static/img/logo/logo_2.png'},
                {key: 2, src: '/static/img/logo/logo_3.png'},
                {key: 3, src: '/static/img/logo/logo_4.png'},
                {key: 4, src: '/static/img/logo/logo_5.png'},
                {key: 5, src: '/static/img/logo/logo_6.png'},
                {key: 6, src: '/static/img/logo/logo_7.png'},
                {key: 7, src: '/static/img/logo/logo_8.png'},
                {key: 8, src: '/static/img/logo/logo_9.png'},
                {key: 9, src: '/static/img/logo/logo_10.png'},
                {key: 10, src: '/static/img/logo/logo_11.png'},
                {key: 11, src: '/static/img/logo/logo_12.png'}
            ],
            swiperOption: {
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                slidesPerView : 0,
                autoplay: 10000,
                loop : true
            }
        }
    },
    created: function() {
        if (window.innerWidth >= 1200) {
            this.swiperOption.slidesPerView = 6;
        } else if (window.innerWidth < 1199 && window.innerWidth >= 992) { 
            this.swiperOption.slidesPerView = 4;
        } else if (window.innerWidth < 991 && window.innerWidth >= 768) {
            this.swiperOption.slidesPerView = 3;
        } else if (window.innerWidth < 767) {
            this.swiperOption.slidesPerView = 2;
        };
    },
    components: { swiper, swiperSlide }
}
</script>

<style lang="stylus" scoped>
    
</style>
