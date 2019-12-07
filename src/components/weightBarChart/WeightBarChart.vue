<script>
import { isDataExists } from "@/utils";
import CONSTANTS from "@/constants.js";
import { Bar, mixins } from "vue-chartjs";

export default {
  name: "WeightBarChart",
  extends: Bar,
  mixins: [mixins.reactiveProp],
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
  data: () => ({
    chartOptions: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      },
      responsive: true,
      maintainAspectRatio: false
    }
  }),
  mounted() {
    if (isDataExists(this.data)) {
      this.renderChart(
        {
          labels: this.xLabelValues,
          datasets: [
            {
              label: CONSTANTS.DATA_KEYS.WEIGHT,
              backgroundColor: "#03dac6",
              data: this.yLabelValues
            }
          ]
        },
        this.chartOptions
      );
    }
  }
};
</script>
<style lang="scss" >
#bar-chart {
  width: 100% !important;
}
</style>
