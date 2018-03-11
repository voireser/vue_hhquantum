<template>
    <div :class="{ showThree: true, upAnimate: scrollNumForShow > scrollTo }">
        <div v-for="showThree in showThrees" :key="showThree.id">
            <p><i class="iconfont" v-html="showThree.icon"></i></p>
            <p>{{showThree.word_1}}</p>
            <p v-html="showThree.word_2"></p>
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
            showThrees: [
                { id: 0, icon: '&#xe63c;', word_1: '初级技师', word_2: '<span>● 3个月考核</span> <span>● 0问题施工3000㎡</span> <span>● 车内治理</span> <span>● 室内治理</span>' },
                { id: 1, icon: '&#xe63a;', word_1: '中级技师', word_2: '<span>● 6个月考核</span> <span>● 0问题施工6000㎡</span> <span>● 车内治理</span> <span>● 室内治理</span> <span>● 检测&量房</span>' },
                { id: 2, icon: '&#xe63b;', word_1: '高级技师', word_2: '<span>● 12个月考核</span> <span>● 0问题施工10000㎡</span> <span>● 车内治理</span> <span>● 室内治理</span> <span>● 检测&量房</span> <span>● 服务咨询</span> <span>● 钥匙托管</span>' }
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
                document.getElementsByClassName('showSpace')[1].offsetHeight + 
                document.getElementsByClassName('showThree')[0].offsetTop - 
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
