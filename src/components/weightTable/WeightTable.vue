<template>
  <div class="weight-list-widget">
    <p>{{ title }}</p>
    <TableView :data="data" :headers="headers" />
  </div>
</template>
<script>
import CONSTANTS from "@/constants";
import TableView from "@/components/tableView/TableView";
export default {
  name: "WeightTable",
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    title: CONSTANTS.WIDGET_TITLES.LIST,
    headers: {
      date: "date",
      weight: "weight"
    }
  }),
  components: { TableView }
};
</script>
<style lang="scss">
@import "@/styles/_variables.scss";
.weight-list-widget {
  width: 40%;
  box-sizing: border-box;
  box-shadow: 0 1px 30px $box-shadow;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 10px 0 10px 5px;
  border-radius: 5px;
  p {
    font-size: 16px;
    font-weight: bold;
    margin: 10px 0;
  }
}
@media screen and (max-width: 767px) {
  .weight-list-widget {
    width: 90%;
    flex-wrap: wrap;
  }
}
</style>
