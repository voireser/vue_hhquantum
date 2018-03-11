<template>
    <div class="listFour">
        <p 
            class="col-lg-3 col-md-4 col-sm-6 col-xs-12" 
            v-for="listFour in listFours" 
            :key="listFour.id"
            v-html="listFour.word">
        </p>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            listFours: [
                { id: 0, word: '<i class="iconfont right">&#xe637;</i>室内空气污染治理光触媒<span>(TPX-HL)</span>' },
                { id: 1, word: '<i class="iconfont right">&#xe637;</i>日本排行第一的陶瓷光触媒<span>(PTA)</span>' },
                { id: 2, word: '<i class="iconfont right">&#xe637;</i>外墙自洁光触媒<span>(TO)</span>' },
                { id: 3, word: '<i class="iconfont right">&#xe637;</i>车用型光触媒<span>(TPX-85)</span>' },
                { id: 4, word: '<i class="iconfont right">&#xe637;</i>玻璃(幕墙)自洁光触媒<span>(TPX-HP)</span>' },
                { id: 5, word: '<i class="iconfont right">&#xe637;</i>抗菌型光触媒<span>(TPX-VB)</span>' },
                { id: 6, word: '<i class="iconfont right">&#xe637;</i>光触媒玩具' },
                { id: 7, word: '<i class="iconfont right">&#xe637;</i>光触媒陶瓷工艺品' },
            ]
        }
    }
}
</script>

<style lang="stylus" scoped>
    
</style>
