<template>
  <th>{{ header }}</th>
</template>
<script>
export default {
  name: "TableHeader",
  props: {
    header: {
      type: String,
      required: true
    }
  }
};
</script>
