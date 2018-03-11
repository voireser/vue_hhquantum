<template>
    <div class="banner">
        <img 
            class="img-responsive parallax" 
            :src="pageInfoOne.bg" 
            :style="{ transform: 'translate(0px, ' + translateY + 'px)', 'transition-duration': '1000ms'}">
        <div>
            <p>{{pageInfoOne.bannerWord_1}}</p>
            <p class="point"><span></span><span></span><span></span></p>
            <p>{{pageInfoOne.bannerWord_2}}</p>
            <p>{{pageInfoOne.bannerWord_3}}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        pageInfoOne: {
            type: Object,
            required: true
        },
        scrollNum: {
            type: Number,
            required: true
        }
    },
    computed: {
        translateY: function() {
            return this.scrollNum / 10
        }
    }
}
</script>

<style lang="stylus" scoped>
    
</style>
