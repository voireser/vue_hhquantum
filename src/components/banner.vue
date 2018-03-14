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
        return {
            pageInfos: [
                { bg: "./static/img/caseBanner_1.jpg",  bannerWord_1: "全效净化服务",  bannerWord_2: "安全全面的健康保护",  bannerWord_3: "来电咨询 4000-328-806" },
                { bg: "./static/img/usBanner_1.jpg",  bannerWord_1: "关于弘辉量子",  bannerWord_2: "我们致力于为家庭和社会提供健康人居环境咨询服务与行业综合",  bannerWord_3: "一站式解决方案" }, 
                { bg: "./static/img/techBanner_1.jpg",  bannerWord_1: "核心技术",  bannerWord_2: "我们专注于研发最好的产品，为您创造",  bannerWord_3: "最健康的居住环境" }, 
                { bg: "./static/img/serviceBanner_1.jpg",  bannerWord_1: "我们的服务",  bannerWord_2: "专业化服务团队，标准化工艺流程，规范化喷涂设备",  bannerWord_3: "全效净化服务体系" }, 
                { bg: "./static/img/caseBanner_1.jpg",  bannerWord_1: "我们的案例",  bannerWord_2: "完成全国500多个服务项目",  bannerWord_3: "覆盖全国20多个一二线城市" },
                { bg: "./static/img/whyBanner_1.jpg",  bannerWord_1: "光催化技术",  bannerWord_2: "纳米保护层",  bannerWord_3: "标本兼治，一步到位" } 
            ],
        }
    },
    computed: {
        translateY: function() {
            return this.scrollNum / 10
        },
        pageInfoOne: function() {
            return this.pageInfos[this.pageIndex]
        }
    }
}
</script>

<style lang="stylus" scoped>
    
</style>
