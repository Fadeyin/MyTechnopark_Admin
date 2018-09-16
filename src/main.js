// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import VueGoodTablePlugin from 'vue-good-table'
import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import store from '@/store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import Vuetable from 'vuetable-2/src/components/Vuetable'
Vue.use(Vuetable)
Vue.use(Vuetify, { theme: {
  primary: '#1E88E5',
  secondary: '#FFA000',
  accent: '#ddeaff',
  error: '#FF5252',
  info: '#ddeaff',
  success: '#4CAF50',
  warning: '#FFC107'
}})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
