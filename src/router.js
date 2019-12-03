import Vue from "vue";
import Router from "vue-router";
import MainView from "./views/MainView";
import RecordEntry from "./views/RecordEntry";
import WeightStats from "./views/WeightStats";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "mainView",
      component: MainView
    },
    {
      path: "/record-entry",
      name: "recordEntry",
      component: RecordEntry
    },
    {
      path: "/weight-stats",
      name: "weightStats",
      component: WeightStats
    }
  ]
});
