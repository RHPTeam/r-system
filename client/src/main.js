import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./routes";
import store from "./store";
import VueApexCharts from "vue-apexcharts";

Vue.config.productionTip = false;

export const bus = new Vue();

Vue.use(VueApexCharts);
Vue.component("rchart", VueApexCharts);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
