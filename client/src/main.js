import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./routes";
import store from "./store";
import VueApexCharts from "vue-apexcharts";
import CKEditor from "@ckeditor/ckeditor5-vue";
import Axios from 'axios';

Vue.config.productionTip = false;
Vue.prototype.$http = Axios;
const token = 1;
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token;
}

export const bus = new Vue();

Vue.use(VueApexCharts);
Vue.component("rchart", VueApexCharts);
Vue.use(CKEditor);

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiredAuth)) {
    if (store.getters.isLoggedIn) {
      next();
      return;
    }
    next('/signin');
  } else {
    next();
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
