const CONSTANTS = {
  APP_TITLE: 'Weight Tracker',
  WEIGHT_INPUT: {
    type: 'text',
    placeholder: 'Enter weight',
    name: 'weight',
    labelClass: 'hidden-class',
    inputClass: 'common-input'
  },
  NAN: NaN,
  PAGINATION_COUNT: 10,
  TAOST_SUCCESS: 'Data Recorded successfully',
  AUTO_COMPLETE_STATUS: 'off',
  NAVBAR: {
    DATA: [
      {
        name: 'Record Entry',
        route: '/main/record-entry'
      },
      {
        name: 'Weight Stats',
        route: '/main/weight-stats'
      }
    ]
  },
  PAGE_TITLES: {
    MAIN_VIEW: 'WEIGHT TRACKER'
  },
  MAIN_VIEW_COMPONENT: {
    DESCRIPTION: 'Track your weight on a daily basis',
    IMAGE_ALT: 'logo',
    BTN_VALUE: 'Start Recording'
  },
  ROUTES: {
    DEFAULT: '/main',
    RECORD_ENTRY: '/main/record-entry',
    WEIGHT_STATS: '/main/weight-stats',
    LOGIN: '/',
    PROFILE: '/main/profile'
  },
  WIDGET_TITLES: {
    LIST: 'WEIGHT DATA'
  },
  DATA_KEYS: {
    DATE: 'date',
    WEIGHT: 'weight'
  },
  LOGIN: {
    LOGIN_FORM_DATA: [
      {
        name: 'Email',
        inputName: 'email',
        type: 'text'
      },
      {
        name: 'Password',
        inputName: 'password',
        type: 'password'
      }
    ],
    TOAST_TYPES: {
      SUCCESS: 'success',
      ERROR: 'error'
    },
    SIGNUP_SUCCESS: 'You have signed up successfully',
    VERIFICATION_MAIL_SENT: 'Email has been sent successfully'
  },
  REGEX_PATTERS: {
    EMAIL: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
  },
  PROFILE_DROPDOWN_MENU: [
    {
      data: 'viewProfile',
      label: 'View Profile'
    },
    {
      data: 'logout',
      label: 'Logout'
    }
  ],
  PROFILE: {
    FIELDS: [
      {
        name: 'Name',
        inputName: 'displayName',
        type: 'text'
      },
      {
        name: 'Email',
        inputName: 'email',
        type: 'text'
      },
      {
        name: 'Location',
        inputName: 'location',
        type: 'text'
      }
    ],
    DISABLED_FIELDS: ['email'],
    TOAST_MESSAGE_PROFILE: 'Data Updated successfully'
  },
  EMAIL_VERIFY: {
    DESCRIPTION: 'Please verify your email to continue',
    BTN_VALUE: 'Send Link'
  }
};
export default CONSTANTS;
