<template>
  <paginate
    :page-count="pageCount"
    :page-range="pageRange"
    :margin-pages="marginPages"
    :click-handler="clickCallback"
    :prev-text="prevText"
    :next-text="nextText"
    :container-class="containerClass"
    :page-class="pageClass"
    v-model="page"
  ></paginate>
</template>
<script>
import paginate from 'vuejs-paginate';
export default {
  name: 'PaginationComponent',
  props: {
    pageCount: {
      type: Number,
      default: 0
    },
    pageRange: {
      type: Number,
      default: 0
    },
    marginPages: {
      type: Number,
      default: 0
    },
    clickCallback: {
      type: Function,
      required: true
    },
    prevText: {
      type: String,
      default: '<'
    },
    nextText: {
      type: String,
      default: '>'
    },
    containerClass: {
      type: String,
      default: ''
    },
    pageClass: {
      type: String,
      default: ''
    },
    page: {
      type: Number,
      required: true
    }
  },
  components: { paginate }
};
</script>
