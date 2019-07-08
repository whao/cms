import Amplify from "@aws-amplify/core";
import { components } from 'aws-amplify-vue';
import aws_exports from './aws-exports'
import Vue from 'vue'
import axios from 'axios'
import moment from 'vue-moment'
import VueAxios from 'vue-axios'
import Buefy from 'buefy'
import VeeValidate from 'vee-validate'
import App from './App.vue'
import router from './router'
import store from './store'
import wysiwyg from "vue-wysiwyg";
import "vue-wysiwyg/dist/vueWysiwyg.css";
import 'buefy/dist/buefy.css'

Amplify.configure(aws_exports);

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(moment);
Vue.use(Buefy, {
  defaultIconPack: 'fa'
});
Vue.use(VeeValidate);
Vue.use(wysiwyg, {});
new Vue({
  router,
  store,
  render: h => h(App),
  components: {
    ...components
  }
}).$mount('#app');
