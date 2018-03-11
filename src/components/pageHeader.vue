<template>
    <nav class="pageTop"> 
        <div> 
            <div class="logoArea"> 
                <a href="index.html"><img class="img-responsive" src="/static/img/logo.png"></a> 
                <p><i class="iconfont">&#xe64e;</i>4000-328-806</p> 
            </div>
            <div class="navigation">
                <a 
                    @click="changeIndex(index)"
                    :class="{ active: pageInfo.count }" 
                    v-for="(pageInfo, index) in pageInfos" 
                    :key="pageInfo.id"
                    href="javascript:"
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
    data: function() {
        return {
            counter: this.pageIndex
        }
    },
    methods: {
        changeIndex: function(index) {
            this.counter = index
            this.$emit('change', this.counter)
            document.documentElement.scrollTop = 0
        }
    }
}
</script>

<style lang="stylus" scoped>
    
</style>
