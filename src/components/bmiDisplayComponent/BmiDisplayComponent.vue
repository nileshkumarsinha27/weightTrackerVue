<template>
  <div class="bmi-calculator-component">
    <div class="form-container">
      <h1 class="bmi-display-heading">{{ widgetHeading }}</h1>
      <div class="bmi-data" v-if="checkBmiRender()">
        <p>
          {{ getBmi() }}
          <sup>{{ bmiMetricMeter }}</sup>
        </p>
        <p>
          {{ bmiVerdict }}<span class="bold-text">{{ returnBmiResult() }}</span>
        </p>
        <img :src="bmiScale" alt="scale" />
      </div>
      <div class="no-data" v-else>
        <p>
          {{ noDataMessage }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import CONSTANTS from '@/constants';
import bmiScaleImg from '@/assets/bmiScale.png';

export default {
  name: 'BmiDisplayComponent',
  data: () => ({
    widgetHeading: CONSTANTS.BMI_DISPLAY.HEADER,
    bmiScale: bmiScaleImg,
    noDataMessage: CONSTANTS.BMI_DISPLAY.NO_DATA_MESSAGE,
    bmiMessage: CONSTANTS.BMI_DISPLAY.BMI_MESSAGE,
    bmiUnit: CONSTANTS.BMI_DISPLAY.BMI_UNIT,
    bmiVerdict: CONSTANTS.BMI_DISPLAY.BMI_VERDICT,
    bmiMetricMeter: 2
  }),
  props: {
    bmi: { type: Number, default: 0 }
  },
  methods: {
    checkBmiRender: function() {
      return this.bmi > 0;
    },
    getBmi: function() {
      return `${this.bmiMessage} ${this.bmi} ${this.bmiUnit}`;
    },
    returnBmiResult: function() {
      if (this.bmi < 16) {
        return CONSTANTS.BMI_DISPLAY.BMI_RAGNGES.SEVERE_THIN;
      } else if (this.bmi >= 16 && this.bmi < 17) {
        return CONSTANTS.BMI_DISPLAY.BMI_RAGNGES.MODERATE_THIN;
      } else if (this.bmi >= 17 && this.bmi < 18.5) {
        return CONSTANTS.BMI_DISPLAY.BMI_RAGNGES.MILD_THINNESS;
      } else if (this.bmi >= 18.5 && this.bmi < 25) {
        return CONSTANTS.BMI_DISPLAY.BMI_RAGNGES.NORMAL;
      } else if (this.bmi >= 25 && this.bmi < 30) {
        return CONSTANTS.BMI_DISPLAY.BMI_RAGNGES.OVERWEIGHT;
      } else if (this.bmi >= 30 && this.bmi < 35) {
        return CONSTANTS.BMI_DISPLAY.BMI_RAGNGES.OBESE_CLASS_1;
      } else if (this.bmi >= 35 && this.bmi < 40) {
        return CONSTANTS.BMI_DISPLAY.BMI_RAGNGES.OBESE_CLASS_2;
      }
      return CONSTANTS.BMI_DISPLAY.BMI_RAGNGES.OBESE_CLASS_3;
    }
  }
};
</script>
<style lang="scss" scoped>
@import '@/styles/_variables';
.bmi-calculator-component {
  .bmi-display-heading {
    font-weight: bold;
    font-size: 24px;
    margin: 10px 0;
  }
  .no-data {
    font-size: 18px;
  }
  .bmi-data {
    p {
      font-size: 18px;
      margin: 10px auto;
      position: relative;
      sup {
        vertical-align: super;
        font-size: 14px;
      }
    }
    .bold-text {
      font-weight: bold;
      padding: 0 5px;
    }
  }
}
</style>
