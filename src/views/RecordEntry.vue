<template>
  <RecordEntryComponent :user="user" :weightData="weightData" />
</template>

<script>
import RecordEntryComponent from "@/components/recordEntryComponent/RecordEntryComponent";
import { mapGetters } from "vuex";
export default {
  name: "RecordEntry",
  components: { RecordEntryComponent },
  computed: {
    ...mapGetters({
      user: "getUserDetails",
      weightData: "weightDataGetter"
    })
  }
};
</script>
