import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

Vue.config.productionTip = false;

const base = axios.create({
  baseURL: "http://localhost:5000",
});

Vue.prototype.$http = base;
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
