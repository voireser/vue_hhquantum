<template>
    <div>
        <div class="footer">
            <div>
                <a href="index.html"><img class="img-responsive" src="/static/img/logo_w.png"></a>
                <div class="navigation">
                    <p><i class="iconfont">&#xe64b;</i>{{footerInfo.word_1}}</p>
                    <p><i class="iconfont">&#xe64e;</i>{{footerInfo.word_2}}</p>
                    <p><i class="iconfont">&#xe639;</i>{{footerInfo.word_3}}</p>
                </div>
            </div>
        </div>
        <footer><p>{{footerInfo.word_4}}</p></footer>
    </div>
</template>

<script>
export default {
    data: function() {
        return { 
            footerInfo: {
                word_1: '北京市朝阳区大裤衩档底下13L-1101', 
                word_2: '4000-328-806', 
                word_3: 'huoyan@honghui.com',
                word_4: 'Copyright © 2018 Hong Hui Quantum. All Rights Reserved.'
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
    
</style>
