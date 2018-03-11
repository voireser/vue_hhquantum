<template>
    <div :class="{ process: true, fiveLeft: scrollNumForShow > scrollTo }">
        <p v-for="process in processes" :key="process.id">
            <i class="iconfont right" v-html="process.icon"></i>
            <span>{{process.word_1}}</span>
            <span v-html="process.word_2">网上下单<br>或者拨打400电话</span>
            <span class="triangle" v-if="process.id !== 0"></span>
        </p>
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
            processes: [
                { id: 0, icon: '&#xe64e;', word_1: '预约服务', word_2: '网上下单<br>或者拨打400电话' },
                { id: 1, icon: '&#xe64a;', word_1: '上门检测', word_2: '服务监理上门检测、量房<br>对室内空气污染进行评估' },
                { id: 2, icon: '&#xe644;', word_1: '制定方案', word_2: '工程师根据评估结果制定<br>治理方案' },
                { id: 3, icon: '&#xe63e;', word_1: '上门施工', word_2: '专业服务团队上门施工<br>执行360度全屋净化标准' },
                { id: 4, icon: '&#xe641;', word_1: '验收', word_2: '监理陪同客户进行项目验收<br>两周后上门复检' }
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
                document.getElementsByClassName('process')[0].offsetTop - 
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
