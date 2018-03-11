<template>
    <div class="fivePoint">
        <p v-for="fivePoint in fivePoints" :key="fivePoint.id">
            <i class="iconfont right">&#xe637;</i>
            <span>{{fivePoint.word_1}}</span>
            <span>{{fivePoint.word_2}}</span>
        </p>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            fivePoints: [
                { id: 0, word_1: '超亲水性', word_2: '纳米级二氧化钛膜在光的照射下，其表面与水滴的接触角逐渐变小能够几乎达到零度，即水滴完全浸润在光触媒薄膜表面，形成一层水膜' },
                { id: 1, word_1: '无毒性', word_2: '光触媒是酸碱性为中性的物质，在1968年通过美国的美国食品和药物管理局(FDA)认证，1983年在日本已被用于作为食品添加剂获得批准。光触媒原料在食品着色剂，口红，防紫外线化妆品等行业中广泛使用，白色油漆颜料和染料的白色纤维广泛应用于家庭和各种行业中都在广泛使用。' },
                { id: 2, word_1: '高效与节能性', word_2: '光触媒利用的是光这种清洁+可再生能源，不会产生额外能耗且作为催化剂本身不参与反应，能够作用时间长效率高。' },
                { id: 3, word_1: '自洁性', word_2: '经过光触媒处理后的表面，在光的照射下，激发氧化反应将接触的有机物全部分解成低分子，结合超亲水性的特点，当污垢落在光触媒处理后的物体上，以清水冲洗，便会脱落而无需另行清洗。' },
                { id: 4, word_1: '全面性', word_2: '纳米光触媒可以有效地降解甲醛、苯甲苯、二甲苯、醋酸、氨、挥发性有机物(TVOC)等污染物，并具有高效广谱的杀菌消毒能力。' }
            ]
        }
    }
}
</script>

<style lang="stylus" scoped>
    
</style>
