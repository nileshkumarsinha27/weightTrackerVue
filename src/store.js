import Vue from 'vue';
import Vuex from 'vuex';
import ACTIONS from '@/actions.constants';
import MUTATIONS from '@/mutations.constants';
import CONSTANTS from '@/constants.js';
import { getValues, getTimeFromMoment } from '@/utils';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    weightData: [],
    loggedInUser: {},
    showBurger: false,
    isDataLoaded: false,
    userData: {},
    navRoute: CONSTANTS.ROUTES.DEFAULT,
    bmiValue: 0,
    heightEntered: 0,
    weightEntered: 0
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
    getUserDetails: state => state.loggedInUser,
    showBurger: state => state.showBurger,
    showLoader: state => state.isDataLoaded,
    selectedRoute: state => state.navRoute,
    getUserData: state => state.userData,
    getBmi: state => state.bmiValue,
    getHeight: state => state.heightEntered,
    getWeight: state => state.weightEntered
  },
  mutations: {
    [MUTATIONS.UPLOAD_DATA.UPLOAD_SUBMIT_MUTATION]: (state, payload) => {
      state.weightData = [...payload];
    },
    [MUTATIONS.LOGIN.GET_USER_DETAILS_MUTATION]: (state, payload) => {
      state.loggedInUser = { ...payload };
      state.userData = { ...payload };
      state.weightData = payload.weightData ? [...payload.weightData] : [];
      state.isDataLoaded = true;
    },
    [MUTATIONS.HEADER.TOGGLE_MENU_MUTATION]: state => {
      state.showBurger = !state.showBurger;
    },
    [MUTATIONS.LOGIN.CLEAR_STORE_DATA_MUTATION]: state => {
      state.loggedInUser = Object.assign({});
      state.userData = Object.assign({});
      state.weightData = [];
    },
    [MUTATIONS.NAVBAR.SET_NAV_ROUTE_MUTATION]: (state, payload) => {
      state.navRoute = payload;
    },
    [MUTATIONS.PROFILE.UPDATE_PROFILE_DATA_MUTATION]: (state, payload) => {
      state.userData = {
        ...state.userData,
        ...payload
      };
    },
    [MUTATIONS.BMI.SET_BMI_MUTATION]: (state, payload) => {
      state.bmiValue = payload.bmi;
      state.heightEntered = payload.height;
      state.weightEntered = payload.weight;
    }
  },
  actions: {
    [ACTIONS.UPLOAD_DATA.UPLOAD_SUBMIT]: ({ commit }, payload) => {
      commit(MUTATIONS.UPLOAD_DATA.UPLOAD_SUBMIT_MUTATION, payload);
    },
    [ACTIONS.LOGIN.GET_USER_DETAILS]: ({ commit }, payload) => {
      commit(MUTATIONS.LOGIN.GET_USER_DETAILS_MUTATION, payload);
    },
    [ACTIONS.HEADER.TOGGLE_MENU]: ({ commit }) => {
      commit(MUTATIONS.HEADER.TOGGLE_MENU_MUTATION);
    },
    [ACTIONS.LOGIN.CLEAR_STORE_DATA]: ({ commit }) => {
      commit(MUTATIONS.LOGIN.CLEAR_STORE_DATA_MUTATION);
    },
    [ACTIONS.NAVBAR.SET_NAV_ROUTE]: ({ commit }, payload) => {
      commit(MUTATIONS.NAVBAR.SET_NAV_ROUTE_MUTATION, payload);
    },
    [ACTIONS.PROFILE.UPDATE_PROFILE_DATA]: ({ commit }, payload) => {
      commit(MUTATIONS.PROFILE.UPDATE_PROFILE_DATA_MUTATION, payload);
    },
    [ACTIONS.BMI.SET_BMI]: ({ commit }, payload) => {
      commit(MUTATIONS.BMI.SET_BMI_MUTATION, payload);
    }
  }
});
