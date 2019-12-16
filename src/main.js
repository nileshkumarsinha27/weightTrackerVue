import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { Plugin } from 'vue-fragment';
import FIREBASE_CONFIG from './config/firebase';
import firebase from 'firebase/app';
import 'firebase/firebase-database';
import './registerServiceWorker';
Vue.use(Plugin);

Vue.config.productionTip = false;

let app = '';

Vue.config.productionTip = false;
firebase.initializeApp(FIREBASE_CONFIG);
firebase.database().ref();

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app');
  }
});
