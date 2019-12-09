<template>
  <img :src="loader" alt="loader" />
</template>
<script>
import loadingIcn from "@/assets/loading.gif";
export default {
  name: "Loader",
  data: () => ({
    loader: loadingIcn
  })
};
</script>