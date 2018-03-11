<template>
    <div :class="{ fourPoint: true, fourAnimate: scrollNumForShow > scrollTo }">
        <div v-for="fourPoint in fourPoints" :key="fourPoint.id">
            <div>
                <i class="iconfont" v-html="fourPoint.icon"></i>
                <img class="img-responsive" src="/static/img/title_2.png">
                <div>
                    <p>{{fourPoint.No}}</p>
                    <p v-html="fourPoint.word"></p>
                </div>
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
            fourPoints: [
                { id: 0, icon: '&#xe647;', No: '01', word: '<span>空气净化</span> <span>分解甲醛、氨和苯等污染物<br>氧化去除氮氧化物等有害有机物</span>' },
                { id: 1, icon: '&#xe649;', No: '02', word: '<span>杀菌抑菌</span> <span>杀菌功效高达99.96%（大肠杆菌、黄色葡萄球菌）<br>完全去除尘螨（过敏致病源）</span>' },
                { id: 2, icon: '&#xe646;', No: '03', word: '<span>除臭除味</span> <span>除臭效果明显是高性能纤维活性炭的150倍<br>1c㎡=500个活性炭冰箱除臭剂</span>' },
                { id: 3, icon: '&#xe64c;', No: '04', word: '<span>防霉防污</span> <span>防止油污、灰尘的产生<br>防止霉菌、黄碱及铁锈等</span>' }
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
                document.getElementsByClassName('showSpace')[2].offsetHeight + 
                document.getElementsByClassName('fourPoint')[0].offsetTop - 
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
