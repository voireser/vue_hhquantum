<template>
    <div class="showSpace connect">
        <div>
            <p>{{connectInfo.word_1}}</p>
            <p>{{connectInfo.word_2}}</p>
            <p class="point"><span></span><span></span><span></span></p>
            <div>
                <p>
                    <i class="iconfont">&#xe64e;</i>
                    <span>请致电</span>
                    <span>{{connectInfo.word_3}}</span>
                </p>
                <p>
                    <i class="iconfont">&#xe639;</i>
                    <span>请发送邮件至</span>
                    <span>{{connectInfo.word_4}}</span>
                </p>
            </div>
        </div>
        <img 
            class="img-responsive parallax" 
            :src="connectInfo.bg" 
            :style="{ transform: 'translate(0px, ' + translateY + 'px)', 'transition-duration': '1000ms'}">
    </div>
</template>

<script>
export default {
    props: {
        scrollNum: {
            type: Number,
            required: true
        }
    },
    data: function() {
        return {
            connectInfo: {
                bg: './static/img/footerPic.jpg', 
                word_1: '您的生活安全正受到威胁', 
                word_2: '请联系我们', 
                word_3: '4000-328-806',
                word_4: 'leo.huo@hhquantum.com'
            }
        }
    },
    computed: {
        translateY: function() {
            return -this.scrollNum / 50
        }
    }
}
</script>

<style lang="stylus" scoped>
    
</style>
