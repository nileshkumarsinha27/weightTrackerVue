<script>
import { isDataExists } from "@/utils";
import CONSTANTS from "@/constants.js";
import Chart from "chart.js";
import { Bar } from "vue-chartjs";

export default {
  name: "WeightBarChart",
  extends: Bar,
  props: {
    data: {
      type: Array,
      required: true
    },
    yLabelValues: {
      type: Array,
      required: true
    },
    xLabelValues: {
      type: Array,
      required: true
    }
  },
  mounted() {
    if (isDataExists(this.data)) {
      this.renderChart({
        labels: this.xLabelValues,
        datasets: [
          {
            label: CONSTANTS.DATA_KEYS.WEIGHT,
            backgroundColor: "#03dac6",
            data: this.yLabelValues
          }
        ]
      });
    }
  }
};
</script>
