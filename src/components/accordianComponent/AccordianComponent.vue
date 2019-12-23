<template>
  <div class="accordian-container" ref="accordian">
    <div class="header-container">
      <p>{{ accordianHeader }}</p>
      <img
        :src="icnArrow"
        alt="arrow"
        @click="toggleDescription"
        v-if="showArrow"
        :class="getImageClass()"
      />
    </div>
    <div class="description-container" v-if="showDescription">
      <p v-html="accordianDescription"></p>
    </div>
  </div>
</template>
<script>
import downArr from '@/assets/down_arrow_black.svg';
import cx from 'classnames';
export default {
  name: 'AccordianComponent',
  props: {
    accordianHeader: {
      type: String,
      default: ''
    },
    accordianDescription: {
      type: String,
      default: ''
    },
    showArrow: {
      type: Boolean,
      default: true
    }
  },
  data: () => ({
    icnArrow: downArr,
    showDescription: false
  }),
  methods: {
    toggleDescription: function() {
      this.showDescription = !this.showDescription;
    },
    getImageClass: function() {
      return cx({ toggleClass: this.showDescription });
    }
  }
};
</script>
<style lang="scss">
@import '@/styles/_variables';
.accordian-container {
  width: 90%;
  margin: 10px auto 20px;
  border: none;
  box-shadow: 0 1px 3px $box-shadow;
  border-radius: 5px;
  padding: 10px;
  .header-container {
    padding: 10px;
    font-weight: bold;
    font-size: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      display: inline-block;
      height: 12px;
      width: 16px;
      cursor: pointer;
      &.toggleClass {
        transform: rotate(180deg);
      }
    }
  }
  .description-container {
    padding: 10px;
    font-size: 20px;
    animation: opacityAnimation 0.4s ease;
    line-height: 1.25;
    .description-list {
      padding: 0 20px;
      li {
        font-weight: bold;
        font-size: 16px;
      }
    }
    .faq-table {
      border-spacing: 0 0.8rem;
      width: 50%;
      display: table;
      font-size: 13px;
      margin-bottom: 94px;
      table-layout: fixed;
      margin: 0 auto;
      animation: opacityAnimation 0.8s ease;
      overflow: hidden;
      tr {
        display: table-row;
      }
      th {
        font-size: 16px;
        font-weight: bold;
        text-transform: uppercase;
        text-align: center;
        padding: 24px;
      }
      td {
        vertical-align: middle;
        text-align: center;
        font-size: 18px;
        padding: 0 24px;
        white-space: pre-wrap;
        word-break: break-word;
      }
      tbody {
        tr {
          padding: 10px 0;
          height: 45px;
          border-radius: 5px;
          &:nth-of-type(2n) {
            background: $primary-color;
            color: $white-color;
          }
        }
      }
    }
  }
}
</style>
