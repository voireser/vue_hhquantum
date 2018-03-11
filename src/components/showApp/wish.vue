<template>
    <div class="wish">
        <p><i class="iconfont">&#xe640;</i></p>
        <p>
            <span>{{wish.word_1}}</span>
            <span>{{wish.word_2}}</span>
        </p>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            wish: {
                word_1: '我们的愿景',
                word_2: '推动生活环境的可持续发展，创造更健康的人居环境打造您私属的环境管家'
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
    
</style>
