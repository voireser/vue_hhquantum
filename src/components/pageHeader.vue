<template>
    <nav class="pageTop"> 
        <div> 
            <div class="logoArea"> 
                <a href="index.html"><img class="img-responsive" :src="pageIndex === -1 ? '/static/img/logo_w.png' : '/static/img/logo.png'"></a> 
                <p><i class="iconfont">&#xe64e;</i>4000-328-806</p> 
            </div>
            <div class="navigation">
                <a 
                    @click="changeIndex(index)"
                    :class="{ active: pageInfo.count }" 
                    v-for="(pageInfo, index) in pageInfos" 
                    :key="pageInfo.id"
                    :href="pageIndex === -1 ? 'page.html' : 'javascript:'"
                    >{{ pageInfo.name }}</a>
            </div> 
        </div> 
    </nav>
</template>

<script>
export default {
    props: {
        pageIndex: {
            type: Number,
            required: true
        },
        pageInfos: {
            type: Array,
            required: true
        }
    },
    methods: {
        changeIndex: function(index) {
            this.$emit('change', index)
            document.documentElement.scrollTop = 0
            sessionStorage.setItem("pageIndex", index); 
        }
    }
}
</script>

<style lang="stylus" scoped>
    .logoArea{float:left;display:table;margin:.7rem auto auto auto;height:.6rem;}
    .logoArea>:not(div){float:left;}
    .logoArea img{margin-top:-.125rem;margin-right:.75rem;height:.8rem;}
    .logoArea>p{padding:0 .5rem;height:.5rem;border-left:1px solid;line-height:.5rem;}
    .logoArea>p>i{float:left;margin-top:.125rem;margin-right:5px;font-size:.8rem;line-height:.25rem;}
    .logoArea>p>span{color: #fcfcfc;font-size: .4rem;}
    .pageTop{position:fixed;top:0;z-index:100;cursor:pointer;width:100%;background-color:rgba(255,255,255,.8);box-shadow:0 0 10px rgba(0,0,0,.1);font-size:.35rem;}
    .pageTop>div{position:relative;display:table;margin:auto;height:1.75rem;line-height:1.75rem;}
    .pageTop>div>.navigation{float:right;}
    .pageTop>div>.navigation>a{float:left;border-top:0.075rem solid transparent;border-bottom:0.075rem solid transparent;cursor:pointer;}
    .pageTop>div>.navigation>a.active{border-bottom:0.075rem solid #078ddc;color:#078ddc;}
    @font-face{font-family:iconfont;src:url(/static/iconfont/iconfont.eot);src:url(/static/iconfont/iconfont.eot?#iefix) format('embedded-opentype'),url(/static/iconfont/iconfont.woff) format('woff'),url(/static/iconfont/iconfont.ttf) format('truetype'),url(/static/iconfont/iconfont.svg#iconfont) format('svg');}
    .iconfont{font-style:normal;font-size:16px;font-family:iconfont!important;-webkit-font-smoothing:antialiased;-webkit-text-stroke-width:.2px;-moz-osx-font-smoothing:grayscale;}
    @media (max-width: 767px) {
        .logoArea{float:none !important;}
        .pageTop>div{width:100%;height:1.5rem;line-height:1.5rem;}
        .pageTop>div>.navigation>a{padding:0 15px;}
        .pageTop>div>.navigation{float:none!important;display:table;margin:auto;}
    }
    @media (min-width: 768px) and (max-width: 991px) {
        .pageTop>div{width:750px;}
        .pageTop>div>.navigation>a{padding:0 20px;}
    }
    @media (min-width: 992px) and (max-width: 1199px) {
        .pageTop>div{width:900px;}
        .pageTop>div>.navigation>a{padding:0 25px;}
    }
    @media (min-width: 1200px) {
        .pageTop>div{width:1100px;}
        .pageTop>div>.navigation>a{padding:0 30px;}
    }
</style>
