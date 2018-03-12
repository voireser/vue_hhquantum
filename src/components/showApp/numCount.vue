<template>
    <div :class="{ numCount: true, '': scrollNumForShow, upAnimate: scrollNumForShow > scrollTo }">
        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12" v-for="numCount in numCounts" :key="numCount.key">
            <p><i class="iconfont" v-html="numCount.icon"></i></p>
            <p>
                <countTo v-if="scrollNumForShow > scrollTo" :startVal="0" :endVal="numCount.num" :duration="3000"></countTo>
                <span v-if="scrollNumForShow > scrollTo && numCount.num_2">×</span>
                <countTo v-if="scrollNumForShow > scrollTo && numCount.num_2" :startVal="0" :endVal="numCount.num_2" :duration="3000"></countTo>
            </p>
            <p>{{numCount.unit}}</p>
            <p v-html="numCount.word"></p>
        </div>
    </div>
</template>

<script>
import countTo from 'vue-count-to';

export default {
    props: {
        scrollNumForShow: {
            type: Number,
            required: true
        }
    },
    data: function() {
        return {
            numCounts: [
                {key: 0, icon: '&#xe642;', num: 2000, unit: '个家庭', word: '健康居所，一次定制十年服务，我们的承诺'},
                {key: 1, icon: '&#xe63d;', num: 1000000, unit: '平米治理面积', word: '净化能力相当于10万棵白杨树'},
                {key: 2, icon: '&#xe64c;', num: 100000, unit: '吨分解有害气体', word: '每年分解10万吨有毒有害气体<br>（甲醛、苯系物、TVOC、NO2，SO2）<br>净化率99.9%'},
                {key: 3, icon: '&#xe645;', num: 24, num_2: 365, unit: '小时持续净化', word: '在可见光作用下24小时不间断<br>10年持续净化'},
            ],
            numBegin: false,
            scrollTo: 0
        }
    },
    mounted: function() {
        var pageIndex = parseInt(sessionStorage.getItem("pageIndex"))
        if(pageIndex == 0 || pageIndex == 1) {
            var self = this;
            var scrollCacheFn = setInterval(function() {
                var scrollCache = 
                    document.getElementsByClassName('pageTop')[0].offsetHeight + 
                    document.getElementsByClassName('banner')[0].offsetHeight + 
                    document.getElementsByClassName('numCount')[0].offsetTop - 
                    window.innerHeight
                if(self.scrollTo === scrollCache) {
                    clearInterval(scrollCacheFn)
                } else {
                    self.scrollTo = scrollCache
                }
            }, 1000)
            this.scrollCacheFn;
        }
    },
    components: { countTo }
}
</script>

<style lang="stylus" scoped>
    
</style>
