<template>
    <div class="showFour">
        <div v-for="(fourInfo, index) in fourInfos" :key="fourInfo.id" :id="index">
            <img class="img-responsive" :src="fourInfo.src">
            <p>{{fourInfo.word_1}}</p>
            <p v-html="fourInfo.word_2"></p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        returnId: {
            type: Number,
            required: true
        }
    },
    data: function() {
        var cacheFours = {
            fourInfo_0: [
                { id: 0, src: '/static/img/servicePic_2.jpg', word_1: '全面清洁', word_2: '服务技师对室内家具表面进行全面清洁<br>（施工前，业主需对室内进行深度清洁）' },
                { id: 1, src: '/static/img/servicePic_3.jpg', word_1: '覆膜保护', word_2: '服务技师对镜面、屏幕、高透玻璃<br>古玩字画等进行覆膜保护' },
                { id: 2, src: '/static/img/servicePic_4.jpg', word_1: '光触媒喷涂', word_2: '服务技师对地板、天花板、墙面、窗帘<br>家具内外表面进行均匀喷涂，确保360度全覆盖' },
                { id: 3, src: '/static/img/servicePic_5.jpg', word_1: '拆除防护', word_2: '待光触媒薄膜干燥后，拆除保护膜<br>对光触媒表面进行验收' }
            ],
            fourInfo_1: [
                { id: 4, src: '/static/img/servicePic_6.jpg', word_1: '物品收纳', word_2: '服务技师经客户允许收纳车内物品<br>（施工前，业主需对车内进行深度清洁）' },
                { id: 5, src: '/static/img/servicePic_7.jpg', word_1: '覆膜保护', word_2: '服务技师对镜面、屏幕、中控台<br>挡风玻璃等进行覆膜保护' },
                { id: 6, src: '/static/img/servicePic_8.jpg', word_1: '光触媒喷涂', word_2: '服务技师对地板、车垫、座椅、顶棚<br>中控台进行均匀喷涂，确保360度全覆盖' },
                { id: 7, src: '/static/img/servicePic_9.jpg', word_1: '拆除防护', word_2: '待光触媒薄膜干燥后，拆除保护膜<br>对光触媒表面进行验收' }
            ],
            fourInfo_2: [
                { id: 8, src: '/static/img/servicePic_10.jpg', word_1: '日本进口专业喷枪', word_2: '' },
                { id: 9, src: '/static/img/servicePic_11.jpg', word_1: '日本进口专业气泵', word_2: '' },
                { id: 10, src: '/static/img/servicePic_12.jpg', word_1: '英国PPM检测设备', word_2: '' },
                { id: 11, src: '/static/img/servicePic_13.jpg', word_1: '德国进口WAGNER专业喷涂设备', word_2: '' }
            ]
        }
        return { cacheFours }
    },
    computed: {
        fourInfos: function() {
            return this.cacheFours['fourInfo_' + this.returnId]
        }
    }
}
</script>

<style lang="stylus" scoped>
    
</style>
