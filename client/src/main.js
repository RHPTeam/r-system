import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./routes";
import store from "./store";
import CKEditor from '@ckeditor/ckeditor5-vue';
import 'highlight.js/styles/default.css';
import Highlight from 'vue-markdown-highlight';

<<<<<<< HEAD
Vue.use(Highlight)
Vue.use( CKEditor );
=======
import CKEditor from '@ckeditor/ckeditor5-vue';
Vue.use( CKEditor );

>>>>>>> parent of 319d32b... Revert "prims editor"
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
