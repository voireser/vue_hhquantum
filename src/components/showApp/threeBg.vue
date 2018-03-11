<template>
    <div :class="{ threeBg: true, leftAnimate: scrollNumForShow > scrollTo }">
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12" v-for="threeBg in threeBgs" :key="threeBg.key">
            <div>
                <p>{{threeBg.word_1}}</p>
                <p>{{threeBg.word_2}}</p>
                <p class="more"><a href="4_service.html">了解更多</a></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        scrollNumForShow: {
            type: Number,
            required: true
        }
    },
    data: function() {
        return {
            threeBgs: [
                {key: 0, word_1: '一站式服务', word_2: '专业化服务团队，标准化工艺流程，规范化喷涂设备'},
                {key: 1, word_1: '顶尖行业技术', word_2: '纳米技术制成5nm纺锤形复合TiO2晶体，更稳定，更高效'},
                {key: 2, word_1: '覆盖全国服务网点', word_2: '总部位于北京，营销及服务网络覆盖20多个一二线城市'}
            ],
            scrollTo: 0
        }
    },
    mounted: function() {
        var self = this;
        var scrollCacheFn = setInterval(function() {
            var scrollCache = 
                document.getElementsByClassName('pageTop')[0].offsetHeight + 
                document.getElementsByClassName('banner')[0].offsetHeight + 
                document.getElementsByClassName('showSpace')[0].offsetHeight + 
                document.getElementsByClassName('threeBg')[0].offsetTop - 
                window.innerHeight
            if(self.scrollTo === scrollCache) {
                clearInterval(scrollCacheFn)
            } else {
                self.scrollTo = scrollCache
            }
        }, 100)
        this.scrollCacheFn;
    },
}
</script>

<style lang="stylus" scoped>
    
</style>
