<template>
    <div class="leftText">
        <div>
            <p>{{leftText.word_1}}</p>
            <p v-html="leftText.word_2"></p>
            <div v-if="leftText.wordBe">
                <p class="point"><span></span><span></span><span></span></p>
                <p>{{leftText.word_3}}</p>
            </div>
        </div>
        <img class="img-responsive" :src="leftText.src">
    </div>
</template>

<script>
export default {
    props: {
        pageIndexForShow: {
            type: Number,
            required: true
        }
    },
    data: function() {
        var leftTexts = [
            {
                word_1: '弘辉量子科技有限公司', 
                word_2: '北京弘辉量子科技有限公司成立于2016年，注册资本100万，是一家集合空气治理、水净化、环境治理的综合创新型环保科技企业。<br>总部位于北京，营销及服务网络覆盖20多个一二线城市：北京、上海、广州、深圳、天津、烟台、武汉、郑州、无锡等。<br>弘辉量子全效净化服务采用日本赛刚Sagan公司生产的纳米可见光光触媒，TPX-HL系列产品取得日本光触媒工业协会PIAJ认证，并获得多项创新发明专利，是目前可用于陶瓷表面的顶尖光触媒材料，其高硬高透高附着力性能被行业称为“铂金光触媒”。<br>公司拥有一支专业化自营服务团队，通过统一培训，阶段考核，星级评估，全国范围拥有高级技师45人，中级技师102人，初级技师200余人，为全国2000多位业主提供空气净化服务，客户服务满意度100%。<br>服务范围：室内空气治理，车内空气治理，装修污染治理，除甲醛，除异味，幕墙玻璃自清洁，水净化',
                wordBe: true,
                word_3: '公司致力于为家庭和社会提供健康人居环境咨询服务与行业综合一站式解决方案',
                src: './static/img/usPic_1.jpg'
            },
            {
                word_1: '专业化团队', 
                word_2: '<span>产品质量保障</span> 量子空气净化服务中均使用日本Sagan-Coat原装进口光触媒全线产品<br><span>产品用量保障</span> 量子空气净化服务喷涂过程中保证20g/㎡的产品用量<br><span>第三方监督保障</span> 量子空气净化服务结束后，接受具有国家环保认证资格的第三方检测机构检测<br><span>认证培训&监管</span> 施工前：培训-认证-上岗 施工中：全程监理督导 施工后：以客户为中心， 四维考核-评级',
                wordBe: false,
                src: './static/img/servicePic_1.jpg'
            }
        ]
        return { leftTexts }
    },
    computed: {
        leftText: function() {
            if(this.pageIndexForShow === 1) { return this.leftTexts[0]
            } else if(this.pageIndexForShow === 3) { return this.leftTexts[1]
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
    
</style>
