import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./routes";
import store from "./store";
import CKEditor from '@ckeditor/ckeditor5-vue';
import 'highlight.js/styles/default.css';
import Highlight from 'vue-markdown-highlight';

Vue.use(Highlight)
Vue.use( CKEditor );
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
