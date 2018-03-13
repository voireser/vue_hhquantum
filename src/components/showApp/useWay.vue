<template>
    <div class="useWay">
        <img 
            class="img-responsive parallax" 
            :src="src" 
            :style="{ transform: 'translate(0px, ' + translateY + 'px)', 'transition-duration': '1000ms'}">
        <div>
            <div v-for="useWay in useWays" :key="useWay.id">
                <p><i class="iconfont" v-html="useWay.icon"></i>{{useWay.word_1}}</p>
                <p v-html="useWay.word_2"></p>
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
            src: './static/img/techBanner_2.jpg',
            useWays: [
                { id: 0, icon: '&#xe638;', word_1: '商业', word_2: '商务&办公：写字楼、酒店、公寓<br>娱乐&休闲：会所、餐厅、便利店、电影院、KTV、健身房' },
                { id: 1, icon: '&#xe648;', word_1: '企业', word_2: '养殖：畜牧、家禽、水产<br>生产&医药：医疗设备、日化、纺织、食品<br>合作：光触媒技术产品合作<br>物流&仓储：冷链、仓库' },
                { id: 2, icon: '&#xe636;', word_1: '公共事业', word_2: '教育&文体：学校、幼儿园、剧院、体育馆<br>社会服务：医院、福利院、养老院、公共事业办公场所（如：派出所、街道办事处等务）<br>海陆空运乘：候机室、票务区、交通工具等<br>环保：大气治理、水处理、建筑外立面、公共设施' },
                { id: 3, icon: '&#xe642;', word_1: '大众生活', word_2: '室内：装修污染治理、日常保健（如：空气净化、洁具/餐具 /厨房用品杀菌消毒等）<br>车内：车内空气净化<br>装饰：家居装饰（壁画、灯具、小摆件）' }
            ]
        }
    },
    computed: {
        translateY: function() {
            return this.scrollNumForShow / 10
        }
    }
}
</script>

<style lang="stylus" scoped>
    
</style>
