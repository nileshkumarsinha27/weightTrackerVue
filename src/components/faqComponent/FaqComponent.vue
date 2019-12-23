<template>
  <div class="faq-container">
    <h1>{{ faqHeader }}</h1>
    <AccordianComponent
      v-for="(item, index) in faqData"
      :key="index"
      :accordianHeader="item.QUESTION"
      :accordianDescription="item.DESCRIPTION"
    />
  </div>
</template>
<script>
import CONSTANTS from '@/constants';
import AccordianComponent from '@/components/accordianComponent/AccordianComponent';
export default {
  name: 'FaqComponent',
  data: () => ({
    faqHeader: CONSTANTS.FAQ.HEADER,
    faqData: CONSTANTS.FAQ.FAQ_QUESTIONS
  }),
  components: { AccordianComponent }
};
</script>
<style lang="scss" scoped>
@import '@/styles/_variables';
.faq-container {
  margin: 60px 10px 30px;
  h1 {
    font-size: 32px;
  }
}
</style>
