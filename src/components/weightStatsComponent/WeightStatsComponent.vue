<template>
  <div class="weight-stats-container" v-if="checkDataLoaded()">
    <WeightTable :data="data" />
    <div class="weight-list-widget">
      <WeightBarChart
        :data="data"
        :xLabelValues="xLabelValues"
        :yLabelValues="yLabelValues"
      />
    </div>
    <div class="weight-list-widget">
      <WeightLineChart
        :data="data"
        :xLabelValues="xLabelValues"
        :yLabelValues="yLabelValues"
      />
    </div>
  </div>
  <div v-else>
    <MainViewComponent />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { isDataExists } from "@/utils.js";
import WeightTable from "@/components/weightTable/WeightTable";
import WeightBarChart from "@/components/weightBarChart/WeightBarChart";
import WeightLineChart from "@/components/weightLineChart/WeightLineChart.vue";
import MainViewComponent from "@/components/mainViewComponent/MainViewComponent";
export default {
  name: "WeightStatsComponent",
  methods: {
    checkDataLoaded: function() {
      return isDataExists(this.data);
    }
  },
  computed: {
    ...mapGetters({
      data: "weightDataGetter",
      xLabelValues: "chartXAxisValues",
      yLabelValues: "chartYAxisValues"
    })
  },
  components: {
    WeightTable,
    WeightBarChart,
    WeightLineChart,
    MainViewComponent
  }
};
</script>
<style lang="scss">
.weight-stats-container {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
}
</style>
