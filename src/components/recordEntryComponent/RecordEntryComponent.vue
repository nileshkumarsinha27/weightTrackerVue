<template>
  <div class="record-entry-container">
    <p class="form-heading">Enter details</p>
    <form :autocomplete="autoCompleteStatus" @submit="handleSubmit" class="data-form">
      <InputBox
        :typeSent="inputBoxData.type"
        :name="inputBoxData.name"
        :placeholder="inputBoxData.placeholder"
        :inputClass="inputBoxData.inputClass"
        :labelClass="inputBoxData.labelClass"
        :handleChange="weightInput"
        :isClear="isClear"
      />
      <DatePicker :filterValueEmit="handleUpdate" :isClear="isClearPicker" />
      <Button
        :value="btnValue"
        :buttonType="btnType"
        :isDisabled="disableStatus"
        :handleClick="formSubmithandle"
      />
    </form>
    <Toast
      v-if="showToast"
      :toastMessage="toastMsg"
      :closeToast="
        () => {
          handleOpenCloseToast(false);
          changeClear();
        }
      "
    />
  </div>
</template>
<script>
import uuidv1 from "uuid/v1";
import CONSTANTS from "@/constants";
import InputBox from "@/components/inputBox/InputBox";
import Button from "@/components/button/Button";
import DatePicker from "@/components/datePicker/DatePicker";
import Toast from "@/components/toast/Toast";
import { checkEmptyStr } from "@/utils";
import Store from "@/store.js";
import ACTIONS from "@/actions.constants.js";
import { updateUserData, getUser } from "@/auth/Auth";
export default {
  name: "MainContent",
  data: () => ({
    inputBoxData: CONSTANTS.WEIGHT_INPUT,
    weightVal: "",
    btnValue: "Submit",
    btnType: "primary",
    disableStatus: true,
    autoCompleteStatus: CONSTANTS.AUTO_COMPLETE_STATUS,
    dataObject: {
      date: "",
      weight: ""
    },
    showToast: false,
    toastMsg: "",
    isClear: false,
    isClearPicker: false
  }),
  components: { InputBox, Button, DatePicker, Toast },
  methods: {
    weightInput: function(value) {
      if (this.checkWeight(value)) {
        this.dataObject = {
          ...this.dataObject,
          weight: value
        };
      } else {
        this.dataObject = {
          ...this.dataObject,
          weight: ""
        };
      }
      this.checkDisable();
    },
    handleSubmit: function(e) {
      e.preventDefault();
    },
    checkWeight: function(weight) {
      return Number(weight) !== CONSTANTS.NAN && Number(weight) !== 0;
    },
    handleUpdate: function(data) {
      this.dataObject = {
        ...this.dataObject,
        date: data.startDate || ""
      };
      this.checkDisable();
    },
    checkDisable: function() {
      if (
        this.checkWeight(this.dataObject.weight) &&
        checkEmptyStr(this.dataObject.date)
      ) {
        this.disableStatus = false;
      } else {
        this.disableStatus = true;
      }
    },
    formSubmithandle: function() {
      const { uid } = getUser();
      this.isClear = true;
      this.isClearPicker = true;
      updateUserData(
        uid,
        {
          weightData: [
            ...this.weightData,
            {
              weight: this.dataObject.weight,
              date: this.dataObject.date,
              id: uuidv1()
            }
          ]
        },
        () => {
          this.handleOpenCloseToast(true, CONSTANTS.TAOST_SUCCESS);
        }
      );
    },
    handleOpenCloseToast: function(toastStatus, text = "") {
      this.showToast = toastStatus;
      this.toastMsg = text;
    },
    changeClear: function() {
      this.isClear = false;
      this.isClearPicker = false;
      this.disableStatus = true;
    }
  },
  props: {
    user: {
      type: Object,
      required: true
    },
    weightData: {
      type: Array,
      default: []
    }
  }
};
</script>
<style lang="scss">
@import "@/styles/_variables.scss";
.record-entry-container {
  animation: opacityAnimation 0.5s ease;
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 50px);
  box-sizing: border-box;
  text-align: center;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  .form-heading {
    font-weight: bold;
    font-size: 24px;
    margin: 10px 0;
  }
  .data-form {
    width: 50%;
    display: block;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 20px auto;
    height: 300px;
    box-shadow: 0 1px 3px $box-shadow;
    input,
    .date-picker-container {
      margin: 20px 0;
    }
  }
}
@media screen and (max-width: 767px) {
  .record-entry-container {
    .data-form {
      width: 90%;
    }
    input,
    .date-picker-container {
      width: 90%;
    }
    .date-picker-container {
      .vue-daterange-picker {
        padding: 10px 0;
        margin: 0 0 20px;
        width: 100%;
      }
    }
  }
}
</style>
