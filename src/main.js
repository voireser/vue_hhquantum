// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VModal from 'vue-js-modal'

import './assets/css/bootstrap.min.css'
import './assets/css/global.styl'
import './assets/rem.js'

Vue.config.productionTip = false
Vue.use(VModal)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
