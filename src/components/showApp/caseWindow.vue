<template>
    <div class="caseWindow">
        <div></div>
        <div>
            <a href="javascript:" class="item" v-for="caseWindow in caseWindows" :key="caseWindow.key" @click="pageInnerUrl(4)">
                <img class="img-responsive" :src="caseWindow.src">
                <p>{{caseWindow.word_1}}</p>
                <p>{{caseWindow.key === 2 ? "种类：" : "总治理面积："}}<span>{{caseWindow.word_2}}</span></p>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            caseWindows: [
                {key: 0, src: './static/img/indexPic_4.jpg', word_1: '特斯拉TESLA办公区空气综合治理', word_2: '4000㎡'},
                {key: 1, src: './static/img/indexPic_5.jpg', word_1: '华贸中心7-8层TESLA办公区空气综合治理', word_2: '2800㎡'},
                {key: 2, src: './static/img/indexPic_6.jpg', word_1: '车辆施工', word_2: '雷克萨斯'}
            ]
        }
    },
    methods: {
        pageInnerUrl: function(index) {
            this.$emit('pageInnerUrl', index)
            document.documentElement.scrollTop = 0
        }
    }
}
</script>

<style lang="stylus" scoped>
    
</style>
