<template>
    <div>
        <div class="showSpace" v-for="showInfo in showInfos" :key="showInfo.id" :class="showInfo.bg">
            <div>
                <p v-if="showInfo.title">{{showInfo.word_1}}</p>
                <p v-if="showInfo.title">
                    <span v-html="showInfo.word_2"></span>
                    <br v-if="showInfo.urlFor === 5 || showInfo.modal === true">
                    <a v-if="showInfo.urlFor === 5" href="javascript:" @click="pageInnerUrl(showInfo.urlFor)">什么是光催化剂技术？</a>
                    <a v-if="showInfo.modal === true" href="javascript:" @click="show">施工注意事项</a>
                </p>
                <p v-if="showInfo.title && showInfo.more" class="more"><a href="javascript:" @click="pageInnerUrl(showInfo.urlFor)">了解更多</a></p>
            </div>
            <numCount v-if="pageIndexForShow === 0 && showInfo.id === 0" :scrollNumForShow="scrollNumForShow" :pageInnerUrl="pageInnerUrl"></numCount>
            <threeBg v-if="pageIndexForShow === 0 && showInfo.id === 1" :scrollNumForShow="scrollNumForShow" @pageInnerUrl="pageInnerUrl"></threeBg>
            <caseWindow v-if="pageIndexForShow === 0 && showInfo.id === 2" @pageInnerUrl="pageInnerUrl"></caseWindow>
            <logoSpace v-if="pageIndexForShow === 0 && showInfo.id === 3"></logoSpace>

            <leftText v-if="pageIndexForShow === 1 && showInfo.id === 4" :pageIndexForShow="pageIndexForShow"></leftText>
            <numCount v-if="pageIndexForShow === 1 && showInfo.id === 5" :scrollNumForShow="scrollNumForShow"></numCount>
            <wish v-if="pageIndexForShow === 1 && showInfo.id === 6"></wish>
            <logoSpace v-if="pageIndexForShow === 1 && showInfo.id === 7"></logoSpace>

            <listThree v-if="pageIndexForShow === 2 && showInfo.id === 8" :returnId="0"></listThree>
            <listThree v-if="pageIndexForShow === 2 && showInfo.id === 22" :returnId="1"></listThree>
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

            <showPic v-if="pageIndexForShow === 5 && showInfo.id === 20" :returnId="0"></showPic>
            <showPic v-if="pageIndexForShow === 5 && showInfo.id === 21" :returnId="1"></showPic>
        </div>
        <modal name="workNotice"
            transition="nice-modal-fade"
            :min-width="200"
            :min-height="200"
            :delay="100"
            :adaptive="true"
            id="modal_work">
            <span>施工前，请提前收纳室内家具中的个人物品；</span>
            <span>施工前，请提前做一次深度保洁，保持基材清洁；</span>
            <span>施工前，层高超过3.2m，请业主提前准备梯子，便于登高作业；</span>
            <span>施工前，请确保室内接通220V电源；</span>
            <span>施工过程中，采用压力雾化喷涂工艺，水雾会引发烟感报警，请提前与安保部门沟通；</span>
            <span>施工后，2小时保持开窗通风；48小时内不要打扫；</span>
            <span>施工后，两周保持充分的光照，避免用硬物大面积破坏光触媒薄膜表面。</span>
            <span>如需检测，请提前12小时关闭门窗；</span>
            <span>检测最佳检测温湿度条件20℃±2℃，相对湿度60%±20%；</span>
            <span>检测和治理期间，室内不得使用空气清新剂、芳香烃、香薰、香水和消毒剂等可大量释放挥发性有机物的产品；</span>
        </modal>
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
import showPic from './showApp/showPic.vue'

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
                {id: 0, urlFor: 1, bg: '', title: true, more: true, word_1: '我们的愿景', word_2: '推动生活环境的可持续发展，创造更健康的人居环境，打造您私属的环境管家'},
                {id: 1, bg: 'greyBg', title: true, more: false, word_1: '为什么选择我们', word_2: '我们致力于为家庭和社会提供健康人居环境咨询服务与行业综合一站式解决方案'},
                {id: 2, urlFor: 4, bg: '', title: true, more: true, word_1: '我们的案例', word_2: '弘辉量子服务团队为数家光触媒企业提供施工服务'},
                {id: 3, bg: 'greyBg', title: true, more: false, word_1: '我们的合作伙伴', word_2: '弘辉量子服务团队为数家光触媒企业提供施工服务'},
            ],
            showCacheInfo_1: [
                {id: 4, bg: '', title: false},
                {id: 5, bg: 'greyBg', title: false},
                {id: 6, bg: 'blueBg', title: false},
                {id: 7, bg: '', title: true, more: false, word_1: '我们的合作伙伴', word_2: '弘辉量子服务团队为数家光触媒企业提供施工服务'},
            ],
            showCacheInfo_2: [
                {id: 8, urlFor: 5, bg: '', title: true, more: false, word_1: '光催化剂技术权威认证', word_2: '最权威光触媒产品认证标准，确保品质与效果'},
                {id: 22, bg: 'greyBg', title: true, more: false, word_1: '全面净化—安全技术', word_2: '日本食品分析中心认证，食品级安全'},
                {id: 9, bg: '', title: true, more: false, word_1: '我们的产品', word_2: '作为行业内产品线最全的企业，公司已拥有了内装型车用型、外墙型、陶瓷型、多用途型和制成品<br>三大门类五个系列的全产品覆盖，产品涉及应用领域广泛'},
                {id: 10, bg: '', title: false},
                {id: 11, bg: '', title: true, more: false, word_1: '四大功效', word_2: '最权威光触媒产品，确保品质'},
                {id: 12, bg: 'greyBg', title: true, more: false, word_1: '五大特征', word_2: '最权威光触媒产品，确保品质'},
            ],
            showCacheInfo_3: [
                {id: 13, modal: true, bg: '', title: true, more: false, word_1: '服务流程', word_2: '电话预约，坐享服务'},
                {id: 14, bg: 'greyBg', title: false},
                {id: 15, bg: 'blueBg', title: true, more: false, word_1: '星际评估', word_2: '我们根据培训程度、从业经验及工作时间对技师进行等级划分'},
                {id: 16, bg: '', title: true, more: false, word_1: '室内工艺流程', word_2: '7大节点，37个控制要点'},
                {id: 17, bg: 'greyBg', title: true, more: false, word_1: '车内工艺流程', word_2: '5大节点，25个控制要点'},
                {id: 18, bg: '', title: true, more: false, word_1: '规范化物料BOM', word_2: ''},
            ],
            showCacheInfo_4: [
                {id: 19, bg: '', title: false},
            ],
            showCacheInfo_5: [
                {id: 20, bg: '', title: true, more: false, word_1: '反应原理', word_2: '以半导体的能带理论作为基础'},
                {id: 21, bg: 'greyBg', title: true, more: false, word_1: '仿光合作用', word_2: '可见光作用下催化分解有害气体，生成二氧化碳和水'},
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
    methods: {
        pageInnerUrl: function(index) {
            this.$emit('pageInnerUrl', index)
            document.documentElement.scrollTop = 0
            sessionStorage.setItem("pageIndex", index); 
        },
        show() {
            this.$modal.show('workNotice');
        },
    },
    components: {
        numCount, threeBg, caseWindow, logoSpace, leftText, wish, listThree, listFour, 
        useWay, fourPoint, fivePoint, process, showThree, showFour, caseSpace, showPic
    }
}
</script>

<style lang="stylus">
    #modal_work
        .v--modal-box
            background-color #f6f6f6 !important
            padding: 0.6rem 1rem

            @media (min-width: 768px) and (max-width: 991px) {
                margin: 0 0 0 -300px
                width: 600px
            }
            @media (min-width: 992px) and (max-width: 1199px) {
                margin: 0 0 0 -300px
                width: 600px
            }
            @media (min-width: 1200px) {
                margin: 0 0 0 -300px
                width: 600px
            }
            span
                display block
                padding-bottom 0.5rem
                @media (min-width: 768px) and (max-width: 991px) {
                    padding-bottom 0.1rem
                }
                @media (min-width: 992px) and (max-width: 1199px) {
                    padding-bottom 0.3rem
                }
                @media (min-width: 1200px) {
                }
            span:last-child
                padding-bottom 0
</style>
