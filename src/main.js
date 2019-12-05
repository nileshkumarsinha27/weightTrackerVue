import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Plugin } from "vue-fragment";
import FIREBASE_CONFIG from "./config/firebase";
import firebase from "firebase/app";
Vue.use(Plugin);

Vue.config.productionTip = false;

let app = "";

Vue.config.productionTip = false;
firebase.initializeApp(FIREBASE_CONFIG);

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});
