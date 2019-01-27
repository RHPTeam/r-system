import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./routes";
import store from "./store";
import VueApexCharts from "vue-apexcharts";
import CKEditor from "@ckeditor/ckeditor5-vue";

Vue.config.productionTip = false;

export const bus = new Vue();

Vue.use(VueApexCharts);
Vue.component("rchart", VueApexCharts);
Vue.use(CKEditor);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
