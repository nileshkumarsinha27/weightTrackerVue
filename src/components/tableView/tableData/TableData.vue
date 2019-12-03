<template>
  <td v-if="checkIfString()">{{ data }}</td>
  <td v-else>{{ renderTime(data) }}</td>
</template>
<script>
import { getTimeFromMoment } from "@/utils";
export default {
  name: "TableData",
  props: {
    data: {
      required: true
    },
    headerKey: {
      type: String,
      required: true
    }
  },
  methods: {
    checkIfString: function() {
      return (
        this.displayData.toLowerCase() === "string" &&
        !(this.headerKey === "date")
      );
    },
    renderTime: function(data) {
      return getTimeFromMoment(data);
    }
  },
  computed: {
    displayData: function() {
      return typeof this.data;
    }
  }
};
</script>
