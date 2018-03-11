<template>
  <div id="page" :class="{ index: pageIndex === 0, '': scrollNum }">
    <pageHeader :pageIndex="pageIndex" :pageInfos="pageInfos" @change="getIndex"></pageHeader>
    <banner :pageInfoOne="pageInfoOne" :scrollNum="scrollNum"></banner>
    <showSpace :pageIndex="pageIndex" :scrollNum="scrollNum"></showSpace>
    <connect v-if="pageIndex !== 0" :scrollNum="scrollNum"></connect>
    <pageFooter></pageFooter>
  </div>
</template>

<script>
import pageHeader from '@/components/pageHeader.vue'
import banner from '@/components/banner.vue'
import showSpace from '@/components/showSpace.vue'
import connect from '@/components/connect.vue'
import pageFooter from '@/components/pageFooter.vue'

export default {
    data: function() {
        return{
            pageIndex: 0,
            pageInfos: [],
            pageInfoOne: {},
            scrollNum: 0
        }
    },
    methods: {
        getIndex: function(index) {
            this.pageIndex = index
            this.pageInfoOne = this.pageInfos[index]
        },
        getData: function() {
            this.axios.get('/static/data.json').then((response) => {
                this.pageInfos = response.data
                this.pageInfoOne = this.pageInfos[0]
            })
        },
        watchScroll: function() {
            this.scrollNum = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        },
    },
    created: function() {  
        this.$nextTick(function () {
            this.getData(); 
        })
    },
    mounted: function() {
        window.addEventListener('scroll', this.watchScroll);
    },
    components: {
        pageHeader, banner, showSpace, connect, pageFooter
    }
}
</script>

<style lang="stylus" scoped>

</style>

