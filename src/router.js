import Vue from "vue";
import Router from "vue-router";
import firebase from "firebase/app";
import "firebase/auth";
import Login from "./views/Login";
import MainView from "./views/MainView";
import MainViewComponent from "@/components/mainViewComponent/MainViewComponent";
import RecordEntry from "./views/RecordEntry";
import WeightStats from "./views/WeightStats";
import ProfileView from "./views/ProfileView";
import EmailVerify from "./views/EmailVerify";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "login",
      component: Login
    },
    {
      path: "/email-verify",
      name: "emailVerify",
      component: EmailVerify
    },
    {
      path: "/main",
      name: "mainView",
      component: MainView,
      meta: {
        requiresAuth: true
      },
      children: [
        {
          path: "record-entry",
          name: "recordEntry",
          component: RecordEntry
        },
        {
          path: "weight-stats",
          name: "weightStats",
          component: WeightStats
        },
        {
          path: "profile",
          name: "profile",
          component: ProfileView
        },
        {
          path: "",
          name: "mainViewComponent",
          component: MainViewComponent
        }
      ]
    }
  ]
});
router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser;
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth && !currentUser) next("/");
  else if (requiresAuth && currentUser && !currentUser.emailVerified)
    next("/email-verify");
  else if (!requiresAuth && currentUser && currentUser.emailVerified)
    next("/main");
  else next();
});

export default router;
