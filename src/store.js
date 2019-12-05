import Vue from "vue";
import Vuex from "vuex";
import ACTIONS from "@/actions.constants";
import MUTATIONS from "@/mutations.constants";
import CONSTANTS from "@/constants.js";
import { getValues, getTimeFromMoment } from "@/utils";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    weightData: [],
    loggedInUser: {}
  },
  getters: {
    weightDataGetter: state =>
      state.weightData.sort((a, b) =>
        a.date > b.date ? 1 : b.date > a.date ? -1 : 0
      ),
    totalPagesPagination: state =>
      Math.ceil(state.weightData.length / CONSTANTS.PAGINATION_COUNT),
    chartYAxisValues: state =>
      getValues(state.weightData, CONSTANTS.DATA_KEYS.WEIGHT).map(elem =>
        Number(elem)
      ),
    chartXAxisValues: state =>
      getValues(state.weightData, CONSTANTS.DATA_KEYS.DATE).map(elem =>
        getTimeFromMoment(elem)
      ),
    getUserDetails: state => state.loggedInUser
  },
  mutations: {
    [MUTATIONS.UPLOAD_DATA.UPLOAD_SUBMIT_MUTATION]: (state, payload) => {
      state.weightData = [...state.weightData, payload];
    },
    [MUTATIONS.LOGIN.GET_USER_DETAILS_MUTATION]: (state, payload) => {
      state.loggedInUser = { ...payload };
    }
  },
  actions: {
    [ACTIONS.UPLOAD_DATA.UPLOAD_SUBMIT]: ({ commit }, payload) => {
      commit(MUTATIONS.UPLOAD_DATA.UPLOAD_SUBMIT_MUTATION, payload);
    },
    [ACTIONS.LOGIN.GET_USER_DETAILS]: ({ commit }, payload) => {
      commit(MUTATIONS.LOGIN.GET_USER_DETAILS_MUTATION, payload);
    }
  }
});
