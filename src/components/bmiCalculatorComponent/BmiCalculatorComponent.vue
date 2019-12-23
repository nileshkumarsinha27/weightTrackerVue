<template>
  <div class="bmi-calculator-component">
    <div class="form-container">
      <p class="form-heading">{{ formHeading }}</p>
      <form
        :autocomplete="autoCompleteStatus"
        @submit="handleSubmit"
        class="data-form"
      >
        <InputBox
          v-for="(item, index) in formData"
          :key="index"
          :typeSent="item.type"
          :name="item.name"
          :placeholder="item.name"
          :inputName="item.inputName"
          :inputClass="inputClass"
          :labelClass="labelClass"
          :handleChange="handleChange"
          :isClear="isClear"
        />
        <Button
          :value="btnValue"
          :handleClick="handleButtonClick"
          :buttonType="btnType"
          :isDisabled="getDisabledStatus()"
        />
      </form>
      <Toast
        v-if="toast.showToast"
        :toastMessage="toast.message"
        :toastType="toast.type"
        :closeToast="
          () => {
            showHideToast(false, '', '');
          }
        "
      />
    </div>
  </div>
</template>
<script>
import CONSTANTS from '@/constants.js';
import InputBox from '@/components/inputBox/InputBox';
import Button from '@/components/button/Button';
import Toast from '@/components/toast/Toast';
import Store from '@/store.js';
import ACTIONS from '@/actions.constants';
import { checkEmptyStr, checkNumber, calculateBmi } from '@/utils';
export default {
  name: 'BmiCalculatorComponent',
  data: () => ({
    formHeading: CONSTANTS.BMI_CALCULATOR.FORM_HEADING,
    autoCompleteStatus: CONSTANTS.AUTO_COMPLETE_STATUS,
    formData: CONSTANTS.BMI_CALCULATOR.FORM_INPUT_FIELDS,
    labelClass: 'hidden-class',
    inputClass: 'common-input',
    btnValue: 'Calculate',
    btnType: 'primary',
    formDataStored: {
      height: '',
      weight: ''
    },
    toast: {
      message: '',
      type: '',
      showToast: false
    },
    bmi: '',
    isClear: false
  }),
  methods: {
    handleSubmit: function(e) {
      e.preventDefault();
    },
    handleChange: function(val, key) {
      if (this.isClear) {
        this.isClear = false;
      }
      this.formDataStored = {
        ...this.formDataStored,
        [key]: val
      };
    },
    getDisabledStatus: function() {
      const { height, weight } = this.formDataStored;
      return checkEmptyStr(height) && checkEmptyStr(weight) ? false : true;
    },
    handleButtonClick: function() {
      const { height, weight } = this.formDataStored;
      if (checkNumber(Number(height)) && checkNumber(Number(weight))) {
        this.bmi = calculateBmi(height, weight);
        Store.dispatch(ACTIONS.BMI.SET_BMI, Number(this.bmi));
        this.isClear = true;
      } else {
        this.showHideToast(
          true,
          CONSTANTS.BMI_CALCULATOR.TOAST.MESSAGE,
          CONSTANTS.BMI_CALCULATOR.TOAST.TYPE
        );
      }
    },
    showHideToast: function(status, message, type) {
      this.toast = {
        ...this.toast,
        message,
        type,
        showToast: status
      };
    }
  },
  components: { InputBox, Button, Toast }
};
</script>
<style lang="scss">
@import '@/styles/_variables';
.bmi-calculator-component {
  animation: opacityAnimation 0.5s ease;
  width: 48%;
  height: 400px;
  box-sizing: border-box;
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: column;
  box-shadow: 0 1px 3px $box-shadow;
  margin: 20px 10px;
  .form-heading {
    font-weight: bold;
    font-size: 24px;
    margin: 10px 0;
  }
  .form-container {
    width: 96%;
    display: block;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 300px;
    .data-form {
      width: 80%;
      margin: 0 auto;
      input {
        margin: 20px 0;
      }
    }
  }
}
@media screen and (max-width: 767px) {
  .bmi-calculator-component {
    width: 75%;
  }
}

@media (max-width: 992px) {
  .bmi-calculator-component {
    .form-container {
      input {
        width: 90%;
      }
    }
  }
}
</style>
