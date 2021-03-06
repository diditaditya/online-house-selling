// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueMaterial from 'vue-material'
import App from './App'
import router from './router'
import store from './store/store'
import 'vue-material/dist/vue-material.css'

import * as VueGoogleMaps from 'vue2-google-maps';

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAZWSDAJkBjHDdaKe7tPnqT6WKxOzcLUAE'
  }
});

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(VueMaterial)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
