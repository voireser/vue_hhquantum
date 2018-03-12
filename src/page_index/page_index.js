// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import pageIndex from './page_index.vue'
import router from '../router'
import axios from 'axios'
import VueAxios from 'vue-axios'

import '../assets/rem.js'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)

/* eslint-disable no-new */
new Vue({
  el: '#page_index',
  router,
  components: { pageIndex },
  template: '<page-index/>'
})
