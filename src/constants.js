const CONSTANTS = {
  APP_TITLE: "Weight Tracker",
  WEIGHT_INPUT: {
    type: "text",
    placeholder: "Enter weight",
    name: "weight",
    labelClass: "hidden-class",
    inputClass: "common-input"
  },
  NAN: NaN,
  PAGINATION_COUNT: 10,
  TAOST_SUCCESS: "Data Recorded successfully",
  AUTO_COMPLETE_STATUS: "off",
  NAVBAR: {
    DATA: [
      {
        name: "Record Entry",
        route: "/record-entry"
      },
      {
        name: "Weight Stats",
        route: "/weight-stats"
      }
    ]
  },
  PAGE_TITLES: {
    MAIN_VIEW: "WEIGHT TRACKER"
  },
  MAIN_VIEW_COMPONENT: {
    DESCRIPTION: "Track your weight on a daily basis",
    IMAGE_ALT: "logo",
    BTN_VALUE: "Start Recording"
  },
  ROUTES: {
    DEFAULT: "/",
    RECORD_ENTRY: "/record-entry",
    WEIGHT_STATS: "/weight-stats"
  },
  WIDGET_TITLES: {
    LIST: "WEIGHT DATA"
  },
  DATA_KEYS: {
    DATE: "date",
    WEIGHT: "weight"
  }
};
export default CONSTANTS;
