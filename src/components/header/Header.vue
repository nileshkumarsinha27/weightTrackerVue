<template>
  <header class="header">
    <h1>{{ title }}</h1>
  </header>
</template>
<script>
import CONSTATNS from "@/constants";
export default {
  name: "Header",
  data: () => ({
    title: CONSTATNS.APP_TITLE
  })
};
</script>
<style lang="scss" scoped>
@import "@/styles/_variables.scss";
.header {
  width: 80%;
  margin: 0 0 0 20%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background: $primary-color;
  color: $white-color;
  height: 50px;
  box-sizing: border-box;
  padding: 10px;
  h1 {
    font-size: 22px;
  }
}
</style>
