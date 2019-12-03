<template>
  <fragment>
    <label :for="name" :class="getLabelClass()">{{ name }}</label>
    <input
      :type="typeSent"
      :name="name"
      :id="name"
      :placeholder="placeholder"
      v-model="inputVal"
      @input="inputHandle"
      :class="getInputClass()"
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
    }
  },
  methods: {
    inputHandle: function(e) {
      let { inputVal } = this;
      inputVal = e.target.value;
      this.handleChange(inputVal);
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
    }
  }
};
</script>
