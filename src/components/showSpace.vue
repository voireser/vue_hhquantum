<template>
    <div>
        <div class="showSpace" v-for="showInfo in showInfos" :key="showInfo.id" :class="showInfo.bg">
            <div>
                <p v-if="showInfo.title">{{showInfo.word_1}}</p>
                <p v-if="showInfo.title" v-html="showInfo.word_2"></p>
                <p v-if="showInfo.title && showInfo.more" class="more"><a href="2_us.html">了解更多</a></p>
            </div>
            <numCount v-if="pageIndexForShow === 0 && showInfo.id === 0" :scrollNumForShow="scrollNumForShow"></numCount>
            <threeBg v-if="pageIndexForShow === 0 && showInfo.id === 1" :scrollNumForShow="scrollNumForShow"></threeBg>
            <caseWindow v-if="pageIndexForShow === 0 && showInfo.id === 2"></caseWindow>
            <logoSpace v-if="pageIndexForShow === 0 && showInfo.id === 3"></logoSpace>

            <leftText v-if="pageIndexForShow === 1 && showInfo.id === 4" :pageIndexForShow="pageIndexForShow"></leftText>
            <numCount v-if="pageIndexForShow === 1 && showInfo.id === 5" :scrollNumForShow="scrollNumForShow"></numCount>
            <wish v-if="pageIndexForShow === 1 && showInfo.id === 6"></wish>
            <logoSpace v-if="pageIndexForShow === 1 && showInfo.id === 7"></logoSpace>

            <listThree v-if="pageIndexForShow === 2 && showInfo.id === 8"></listThree>
            <listFour v-if="pageIndexForShow === 2 && showInfo.id === 9"></listFour>
            <useWay v-if="pageIndexForShow === 2 && showInfo.id === 10" :scrollNumForShow="scrollNumForShow"></useWay>
            <fourPoint v-if="pageIndexForShow === 2 && showInfo.id === 11" :scrollNumForShow="scrollNumForShow"></fourPoint>
            <fivePoint v-if="pageIndexForShow === 2 && showInfo.id === 12"></fivePoint>
            
            <process v-if="pageIndexForShow === 3 && showInfo.id === 13" :scrollNumForShow="scrollNumForShow"></process>
            <leftText v-if="pageIndexForShow === 3 && showInfo.id === 14" :pageIndexForShow="pageIndexForShow"></leftText>
            <showThree v-if="pageIndexForShow === 3 && showInfo.id === 15" :scrollNumForShow="scrollNumForShow"></showThree>
            <showFour v-if="pageIndexForShow === 3 && showInfo.id === 16" :returnId="0"></showFour>
            <showFour v-if="pageIndexForShow === 3 && showInfo.id === 17" :returnId="1"></showFour>
            <showFour v-if="pageIndexForShow === 3 && showInfo.id === 18" :returnId="2"></showFour>

            <caseSpace v-if="pageIndexForShow === 4 && showInfo.id === 19"></caseSpace>
        </div>
    </div>
</template>

<script>
import numCount from './showApp/numCount.vue'
import threeBg from './showApp/threeBg.vue'
import caseWindow from './showApp/caseWindow.vue'
import logoSpace from './showApp/logoSpace.vue'
import leftText from './showApp/leftText.vue'
import wish from './showApp/wish.vue'
import listThree from './showApp/listThree.vue'
import listFour from './showApp/listFour.vue'
import useWay from './showApp/useWay.vue'
import fourPoint from './showApp/fourPoint.vue'
import fivePoint from './showApp/fivePoint.vue'
import process from './showApp/process.vue'
import showThree from './showApp/showThree.vue'
import showFour from './showApp/showFour.vue'
import caseSpace from './showApp/caseSpace.vue'

export default {
    props: {
        pageIndex: {
            type: Number,
            required: true
        },
        scrollNum: {
            type: Number,
            required: true
        }
    },
    data: function() {
        var showCacheInfos = {
            showCacheInfo_0: [
                {id: 0, bg: '', title: true, more: true, word_1: '我们的愿景', word_2: '推动生活环境的可持续发展，创造更健康的人居环境，打造您私属的环境管家'},
                {id: 1, bg: 'greyBg', title: true, more: false, word_1: '为什么选择我们', word_2: '我们致力于为家庭和社会提供健康人居环境咨询服务与行业综合一站式解决方案'},
                {id: 2, bg: '', title: true, more: true, word_1: '我们的案例', word_2: '弘辉量子服务团队为数家光触媒企业提供施工服务'},
                {id: 3, bg: 'greyBg', title: true, more: false, word_1: '我们的合作伙伴', word_2: '弘辉量子服务团队为数家光触媒企业提供施工服务'},
            ],
            showCacheInfo_1: [
                {id: 4, bg: '', title: false},
                {id: 5, bg: 'greyBg', title: false},
                {id: 6, bg: 'blueBg', title: false},
                {id: 7, bg: '', title: true, more: false, word_1: '我们的合作伙伴', word_2: '弘辉量子服务团队为数家光触媒企业提供施工服务'},
            ],
            showCacheInfo_2: [
                {id: 8, bg: '', title: true, more: false, word_1: '光催化剂技术权威认证', word_2: '<span>最权威光触媒产品认证标准，确保品质</span><br><a href="3.5_why.html">什么是光催化剂技术？</a>'},
                {id: 9, bg: 'greyBg', title: true, more: false, word_1: '我们的产品', word_2: '作为行业内产品线最全的企业，公司已拥有了内装型车用型、外墙型、陶瓷型、多用途型和制成品<br>三大门类五个系列的全产品覆盖，产品涉及应用领域广泛'},
                {id: 10, bg: '', title: false},
                {id: 11, bg: '', title: true, more: false, word_1: '四大功效', word_2: '最权威光触媒产品，确保品质'},
                {id: 12, bg: 'greyBg', title: true, more: false, word_1: '五大特征', word_2: '最权威光触媒产品，确保品质'},
            ],
            showCacheInfo_3: [
                {id: 13, bg: '', title: true, more: false, word_1: '服务流程', word_2: '电话预约，坐享服务'},
                {id: 14, bg: 'greyBg', title: false},
                {id: 15, bg: 'blueBg', title: true, more: false, word_1: '星际评估', word_2: '我们根据培训程度、从业经验及工作时间对技师进行等级划分'},
                {id: 16, bg: '', title: true, more: false, word_1: '室内工艺流程', word_2: '7大节点，37个控制要点'},
                {id: 17, bg: 'greyBg', title: true, more: false, word_1: '车内工艺流程', word_2: '5大节点，25个控制要点'},
                {id: 18, bg: '', title: true, more: false, word_1: '规范化物料BOM', word_2: ''},
            ],
            showCacheInfo_4: [
                {id: 19, bg: '', title: false},
            ]
        }
        return { 
            showCacheInfos, 
            pageIndexForShow: 0
        }
    },
    computed: {
        showInfos: function() {
            this.pageIndexForShow = this.pageIndex
            return this.showCacheInfos['showCacheInfo_' + this.pageIndexForShow]
        },
        scrollNumForShow: function() {
            return this.scrollNum
        }
    },
    components: {
        numCount, threeBg, caseWindow, logoSpace, leftText, wish, listThree, listFour, 
        useWay, fourPoint, fivePoint, process, showThree, showFour, caseSpace
    }
}
</script>

<style lang="stylus" scoped>
    
</style>
