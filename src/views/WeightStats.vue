<template>
  <fragment>
    <div class="weight-stats-container">
      <WeightStatsComponent />
    </div>
  </fragment>
</template>
<script>
import WeightStatsComponent from "@/components/weightStatsComponent/WeightStatsComponent";
export default {
  name: "WeightStats",
  components: { WeightStatsComponent }
};
</script>
