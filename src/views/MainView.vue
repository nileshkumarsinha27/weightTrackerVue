<template>
  <fragment>
    <div class="content-container">
      <MainViewComponent />
    </div>
  </fragment>
</template>

<script>
import MainViewComponent from "@/components/mainViewComponent/MainViewComponent";
export default {
  name: "MainView",
  components: { MainViewComponent }
};
</script>
