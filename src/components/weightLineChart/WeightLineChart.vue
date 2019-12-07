<script>
import { isDataExists } from "@/utils";
import CONSTANTS from "@/constants.js";
import { Line, mixins } from "vue-chartjs";

export default {
  name: "WeightLineChart",
  extends: Line,
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
              backgroundColor: "rgba(3,218,198,0.5)",
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
<style lang="scss">
#line-chart {
  width: 100% !important;
}
</style>
