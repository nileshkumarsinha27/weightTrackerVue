<template>
  <div class="weight-stats-container" v-if="checkDataLoaded() && showLoader">
    <WeightTable :data="data" />
    <div class="weight-list-widget">
      <WeightBarChart :data="data" :xLabelValues="xLabelValues" :yLabelValues="yLabelValues" />
    </div>
    <div class="weight-list-widget">
      <WeightLineChart :data="data" :xLabelValues="xLabelValues" :yLabelValues="yLabelValues" />
    </div>
  </div>
  <div v-else-if="!checkDataLoaded() && showLoader">
    <MainViewComponent />
  </div>
  <div v-else class="loader">
    <Loader />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { isDataExists } from "@/utils.js";
import WeightTable from "@/components/weightTable/WeightTable";
import WeightBarChart from "@/components/weightBarChart/WeightBarChart";
import WeightLineChart from "@/components/weightLineChart/WeightLineChart.vue";
import MainViewComponent from "@/components/mainViewComponent/MainViewComponent";
import Loader from "@/components/loader/Loader";
export default {
  name: "WeightStatsComponent",
  methods: {
    checkDataLoaded: function() {
      return this.data && isDataExists(this.data);
    }
  },
  computed: {
    ...mapGetters({
      data: "weightDataGetter",
      xLabelValues: "chartXAxisValues",
      yLabelValues: "chartYAxisValues",
      showLoader: "showLoader"
    })
  },
  components: {
    WeightTable,
    WeightBarChart,
    WeightLineChart,
    MainViewComponent,
    Loader
  }
};
</script>
<style lang="scss">
.weight-stats-container {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  min-height: calc(100vh - 50px);
  box-sizing: border-box;
  .loader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
