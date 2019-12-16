<template>
  <div class="date-picker-container">
    <date-range-picker
      ref="picker"
      :opens="opens"
      v-model="dateRange"
      :startDate="startDate"
      :endDate="endDate"
      :minDate="minDate"
      :maxDate="maxDate"
      @update="handleUpdate"
      :locale-data="localeData"
      :ranges="ranges"
      :single-date-picker="singlePicker"
      :auto-apply="autoApplyStatus"
    >
      <div
        slot="input"
        slot-scope="picker"
        style="min-width: 200px; text-align:left; padding:0 10px; font-size:18px; color:#000;"
      >
        {{ displayDate(picker.startDate) }}
      </div>
    </date-range-picker>
    <img
      :src="closeIcn"
      alt="close"
      @click="clearDatePicker"
      class="date-range-clear"
      v-if="showIcon"
    />
  </div>
</template>
<script>
import DateRangePicker from 'vue2-daterange-picker';
import moment from 'moment';
import 'vue2-daterange-picker/dist/vue2-daterange-picker.css';
import icnClose from '@/assets/icn_close.svg';
export default {
  components: { DateRangePicker },
  data: () => ({
    opens: 'center',
    dateRange: '',
    ranges: false,
    minDate: moment()
      .subtract(180, 'days')
      .format('YYYY-MM-DD'),
    maxDate: moment().format('YYYY-MM-DD'),
    clearBtnValue: 'Clear Range',
    filterBntCustomClass: 'clear-btn-date-picker',
    filterBntType: 'error',
    startDate: '',
    endDate: '',
    localeData: {
      direction: 'ltr',
      format: moment.localeData().longDateFormat('L'),
      separator: ' - ',
      applyLabel: 'Apply',
      cancelLabel: 'Cancel',
      weekLabel: 'W',
      customRangeLabel: 'Custom Range',
      daysOfWeek: moment.weekdaysMin(),
      monthNames: moment.monthsShort(),
      firstDay: moment.localeData().firstDayOfWeek()
    },
    showIcon: false,
    closeIcn: icnClose,
    singlePicker: true,
    autoApplyStatus: true
  }),
  methods: {
    displayDate: function(start, end) {
      if (!start && !end) {
        return 'Select date';
      } else {
        return this.getFormattedDate(start, 'DD/MM/YYYY');
      }
    },
    handleUpdate: function(dateObj, bool = true) {
      const { startDate, endDate } = dateObj;
      let filterData = {};
      if (startDate && endDate) {
        filterData = {
          ...filterData,
          startDate: moment.utc(new Date(startDate)).format(),
          endDate: moment.utc(new Date(endDate)).format()
        };
      }
      this.showIcon = bool;
      this.filterValueEmit({ ...filterData });
    },
    getFormattedDate: function(date, format = 'DD/MM/YYYY') {
      return moment(new Date(date)).format(format);
    },
    clearDatePicker: function() {
      this.clearPicker();
      this.handleUpdate({ startDate: null, endDate: null }, false);
    },
    showClose: function() {
      return this.$refs.picker && this.$refs.picker.start;
    },
    clearPicker: function() {
      this.$refs.picker.start = null;
      this.$refs.picker.end = null;
      this.showIcon = false;
    }
  },
  props: {
    filterValueEmit: {
      type: Function,
      default: () => {}
    },
    isClear: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    isClear: function(next, prev) {
      if (next !== prev && next) {
        this.clearPicker();
      }
    }
  }
};
</script>
<style lang="scss">
@import '../../styles/_variables.scss';
.vue-daterange-picker {
  width: 300px;
  padding: 10px 5px;
  font-size: 16px;
  margin: 0 20px 20px;
  border-radius: 5px;
  box-shadow: 0 1px 31px $box-shadow;
  .reportrange-text {
    border: none;
    padding: 0;
    height: inherit;
  }
  .drp-selected {
    display: none;
  }
  .drp-buttons {
    text-align: center;
    .btn {
      padding: 8px;
      width: 100px;
      outline: none;
      border-radius: 4px;
      font-size: 14px;
      border: none;
      cursor: pointer;
    }
    .cancelBtn {
      color: $white-color;
      background: $error-color;
    }
    .btn-success {
      color: $white-color;
      background: $primary-color-variant;
    }
  }
  .daterangepicker {
    td {
      &.in-range {
        background: $primary-color-variant;
      }
      &.active {
        background: $primary-color;
        &:hover {
          background: $primary-color;
        }
      }
    }
  }
}
.date-picker-container {
  position: relative;
  .date-range-clear {
    position: absolute;
    right: 25px;
    top: 15px;
    cursor: pointer;
  }
}
</style>
