<script>
import { isDataExists } from '@/utils';
import CONSTANTS from '@/constants.js';
import { Bubble } from 'vue-chartjs';

export default {
  name: 'WeightLineChart',
  extends: Bubble,
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
            backgroundColor: 'rgba(3,218,198,0.5)',
            data: this.yLabelValues
          }
        ]
      });
    }
  }
};
</script>
