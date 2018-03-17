<template>
    <div>
        <div class="caseWindow">
            <div class="tabGroup simplefilter" id="change">
                <a 
                    href="javascript:" 
                    @click="select('all')" 
                    :class="{active : caseTabMark === 'all'}" 
                >全部</a>
                <a 
                    href="javascript:" 
                    v-for="caseTab in caseTabs" 
                    @click="select(caseTab)" 
                    :key="caseTab"
                    :class="{active : caseTabMark === caseTab}" 
                >{{caseTab}}</a>
            </div>
        
            <isotope :list="caseInfos" :options='option'>
                <a 
                    href="javascript:" 
                    @click="show(caseInfo.id)"
                    v-for="caseInfo in caseInfos" 
                    :key="caseInfo.id" 
                    :id="caseInfo.id">
                    <img class="img-responsive" :src="caseInfo.titlePic">
                    <p>{{caseInfo.title}}</p>
                    <p>
                        {{caseInfo.class === 'car' ? '车辆类型：' : '总治理面积：'}}
                        <span v-html="caseInfo.result"></span>
                    </p>
                </a>
            </isotope>
        </div>
        <modal name="casePic"
            transition="nice-modal-fade"
            :min-width="200"
            :min-height="200"
            :delay="100"
            :adaptive="true"
            id="modal_case">
            <swiper :options="swiperOption">
                <swiper-slide v-for="pic in pics" :key="pic">
                    <img class="img-responsive" :src="pic">
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </modal>
    </div>
</template>
    
<script>
import isotope from 'vueisotope'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
    data: function() {
        return {
            caseCacheInfos: [],
            caseInfos: [],
            caseTabs: [],
            caseTabMark: 'all',
            clickTime: 0,
            pics: [],
            option: {
                getSortData: {
                    id: "id"
                },
                sortBy : "id"
            },
            swiperOption: {
                effect : 'flip',
                pagination: {
                    el: '.swiper-pagination',
                    type: 'fraction'
                },
                loop : true
            },
            cache_1: [],
            cache_2: [],
            cache_3: [],
            cache_4: [],
            cache_5: [],
            cache_6: []
        }
    },
    // computed: {
    //     pics: function() {
    //         return 
    //     }
    // },
    methods: {
        getData: function() {
            var self = this
            this.axios.get('./static/case.json').then((response) => {
                this.caseInfos = this.caseCacheInfos = response.data

                var categoryArr = [];
                for (var i = 0; i < response.data.length; i++) {
                    if(response.data[i].area.length === 1) {
                        categoryArr.push(response.data[i].area[0]);
                        if(self.caseTabs.indexOf(response.data[i].area[0]) === -1) {
                            self.caseTabs.push(response.data[i].area[0]);
                        }
                    } else {
                        for (var j = 0; j < response.data[i].area.length; j++) {
                            categoryArr.push(response.data[i].area[j]);
                            if(self.caseTabs.indexOf(response.data[i].area[j]) === -1) {
                                self.caseTabs.push(response.data[i].area[j]);
                            }
                        }
                    }
                }
            })
        },
        select: function(mark) {
            this.caseInfos = []
            if(this.clickTime === 0) {
                this.caseTabMark = mark
                var self = this
                this.clickTime = 1
                var caseSelect = []

                var timeout = setTimeout(function() {
                    self.clickTime = 0
                    if(self.caseTabMark === 'all') {
                        caseSelect = self.caseCacheInfos
                    } else {
                        for(var i = 0; i < self.caseCacheInfos.length; i++) {
                            if(self.caseCacheInfos[i].area.indexOf(self.caseTabMark) !== -1) {
                                caseSelect.push(self.caseCacheInfos[i])
                            }
                        }
                    }
                    self.caseInfos = caseSelect
                }, 500)
            }
        },
        show(id) {
            this.pics = this.caseCacheInfos[id - 1].picUrl
            this.$modal.show('casePic');
        },
    },
    created: function() {  
        this.$nextTick(function () {
            this.getData(); 
        })
    },
    components: { isotope, swiper, swiperSlide }
}
</script>

<style lang="stylus" scoped>
    
</style>
