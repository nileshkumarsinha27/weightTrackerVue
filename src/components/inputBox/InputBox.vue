<template>
  <fragment>
    <label :for="inputName" :class="getLabelClass()">{{ name }}</label>
    <input
      :type="typeSent"
      :name="name"
      :id="inputName"
      :placeholder="placeholder"
      v-model="inputVal"
      @input="inputHandle"
      :class="getInputClass()"
      :disabled="disabled"
    />
  </fragment>
</template>
<script>
import cx from "classnames";
export default {
  name: "InputBox",
  data: () => ({
    inputVal: ""
  }),
  props: {
    typeSent: {
      type: String,
      default: "text"
    },
    name: {
      type: String,
      default: ""
    },
    handleChange: {
      type: Function,
      default: () => {}
    },
    placeholder: {
      type: String,
      default: ""
    },
    labelClass: {
      type: String,
      default: ""
    },
    inputClass: {
      type: String,
      default: ""
    },
    isClear: {
      type: Boolean,
      default: false
    },
    inputName: {
      type: String,
      default: ""
    },
    defaultValue: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    inputHandle: function(e) {
      let { inputVal, inputName } = this;
      inputVal = e.target.value;
      this.handleChange(inputVal, inputName);
    },
    getLabelClass: function() {
      return cx([this.labelClass]);
    },
    getInputClass: function() {
      return cx(["input-component", this.inputClass]);
    }
  },
  watch: {
    isClear: function(next, prev) {
      if (next !== prev && next) {
        this.inputVal = "";
      }
    },
    defaultValue: function(next, prev) {
      if (next !== prev) {
        this.inputVal = next;
      }
    }
  },
  mounted: function() {
    if (this.defaultValue) {
      this.inputVal = this.defaultValue;
    }
  }
};
</script>
