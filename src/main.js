import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import App from './App.vue'
import router from './router'
import store from './store'
import wysiwyg from "vue-wysiwyg";
import "vue-wysiwyg/dist/vueWysiwyg.css";

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(Buefy);
Vue.use(wysiwyg, {});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
