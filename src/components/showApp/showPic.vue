<template>
    <div class="showPic">
        <img class="img-responsive" :src="showPic.src_1">
        <p>{{showPic.word_1}}</p>
        <p class="point" v-if="returnId === 1"><span></span><span></span><span></span></p>
        <img class="img-responsive" :src="showPic.src_2">
        <img class="img-responsive" :src="showPic.src_3">
        <p>{{showPic.word_2}}</p>
    </div>
</template>

<script>
export default {
    props: {
        returnId: {
            type: Number,
            required: true
        }
    },
    data: function() {
        return {
            showPics: [
                {
                    src_1: './static/img/whyPic_1.png',
                },
                {
                    src_1: './static/img/whyPic_2.png',
                    src_2: './static/img/whyPic_3.png',
                    src_3: './static/img/whyPic_4.png',
                    word_1: '光催化反应原理可以类比叶绿素，作为催化剂不参与反应',
                    word_2: '纳米筛的实物（右侧为紫外线光激发的状态）'
                }
            ]
        }
    },
    computed: {
        showPic: function() {
            return this.showPics[this.returnId]
        }
    }
    
}
</script>

<style lang="stylus" scoped>
    
</style>
