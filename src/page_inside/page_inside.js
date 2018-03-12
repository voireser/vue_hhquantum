// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import pageInside from './page_inside.vue'
import router from '../router'
import VModal from 'vue-js-modal'
import axios from 'axios'
import VueAxios from 'vue-axios'

import '../assets/css/bootstrap.min.css'
import '../assets/css/global.styl'
import '../assets/rem.js'

Vue.config.productionTip = false
Vue.use(VModal)
Vue.use(VueAxios, axios)

/* eslint-disable no-new */
new Vue({
  el: '#page_inside',
  router,
  components: { pageInside },
  template: '<page-inside/>'
})
