<template>
  <div class="bmi-calculator-container">
    <BmiCalculatorComponent />
    <BmiDisplayComponent :bmi="bmi" />
    <p class="know-more-text">
      {{ knowMoreText }}
      <span class="click-here-text" @click="faqClick">{{ clickHereText }}</span>
    </p>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import CONSTANTS from '@/constants';
import Router from '@/router';
import Store from '@/store';
import ACTIONS from '@/actions.constants';
import BmiCalculatorComponent from '@/components/bmiCalculatorComponent/BmiCalculatorComponent';
import BmiDisplayComponent from '@/components/bmiDisplayComponent/BmiDisplayComponent';
export default {
  name: 'BmiCalculator',
  components: { BmiCalculatorComponent, BmiDisplayComponent },
  computed: {
    ...mapGetters({
      bmi: 'getBmi'
    })
  },
  data: () => ({
    knowMoreText: CONSTANTS.BMI_CALCULATOR.KNOW_MORE_TEXT,
    clickHereText: 'Click Here'
  }),
  methods: {
    faqClick: function() {
      Store.dispatch(ACTIONS.NAVBAR.SET_NAV_ROUTE, CONSTANTS.ROUTES.FAQ);
      Router.push(CONSTANTS.ROUTES.FAQ);
    }
  }
};
</script>
<style lang="scss" scoped>
@import '@/styles/_variables';
.bmi-calculator-container {
  animation: opacityAnimation 0.5s ease;
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 50px);
  box-sizing: border-box;
  text-align: center;
  position: relative;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  .know-more-text {
    font-size: 18px;
    width: 100%;
    .click-here-text {
      text-decoration: underline;
      color: $primary-color-variant;
      cursor: pointer;
      font-weight: bold;
      font-size: 16px;
      &:hover {
        color: $primary-color;
      }
    }
  }
}
</style>
