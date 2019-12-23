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
      },
      {
        name: 'BMI Calculator',
        route: '/main/bmi-calculator'
      },
      {
        name: 'FAQ',
        route: '/main/faq'
      }
    ]
  },
  PAGE_TITLES: {
    MAIN_VIEW: 'WEIGHT TRACKER'
  },
  MAIN_VIEW_COMPONENT: {
    DESCRIPTION: 'Track your weight on a daily basis',
    IMAGE_ALT: 'logo',
    BTN_VALUE: 'Start Recording',
    BMI_TEXT: `Don't know your BMI?`
  },
  ROUTES: {
    DEFAULT: '/main',
    RECORD_ENTRY: '/main/record-entry',
    WEIGHT_STATS: '/main/weight-stats',
    LOGIN: '/',
    PROFILE: '/main/profile',
    BMI_CHECK: '/main/bmi-calculator',
    FAQ: '/main/faq'
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
  },
  TIME: {
    MORNING: 'Good Morning',
    AFTERNOON: 'Good Afternoon',
    EVENING: 'Good Evening'
  },
  BMI_CALCULATOR: {
    FORM_HEADING: 'Please enter your details',
    FORM_INPUT_FIELDS: [
      {
        name: 'Height in cm',
        inputName: 'height',
        type: 'text'
      },
      {
        name: 'Weight in Kg',
        inputName: 'weight',
        type: 'text'
      }
    ],
    TOAST: {
      MESSAGE: 'Please enter proper values',
      TYPE: 'error'
    },
    KNOW_MORE_TEXT: 'Want to know more about BMI?'
  },
  BMI_DISPLAY: {
    HEADER: 'BMI Results',
    NO_DATA_MESSAGE: 'Please enter the form to calculate BMI',
    BMI_MESSAGE: 'Your BMI is',
    BMI_VERDICT: 'You are',
    BMI_UNIT: 'Kg/m',
    BMI_RAGNGES: {
      SEVERE_THIN: 'Severe Thinness',
      MODERATE_THIN: 'Moderate Thinness',
      MILD_THINNESS: 'Mild Thinness',
      NORMAL: 'Normal',
      OVERWEIGHT: 'Overweight',
      OBESE_CLASS_1: 'Obese Class I',
      OBESE_CLASS_2: 'Obese Class II',
      OBESE_CLASS_3: 'Obese Class III'
    }
  },
  FAQ: {
    HEADER: 'FAQs',
    FAQ_QUESTIONS: [
      {
        QUESTION: 'What is BMI?',
        DESCRIPTION: `BMI is a measurement of a person's leanness or corpulence based on their height and weight, and is intended to quantify tissue mass. It is widely used as a general indicator of whether a person has a healthy body weight for their height. Specifically, the value obtained from the calculation of BMI is used to categorize whether a person is underweight, normal weight, overweight, or obese depending on what range the value falls between. These ranges of BMI vary based on factors such as region and age, and are sometimes further divided into subcategories such as severely underweight or very severely obese. Being overweight or underweight can have significant health effects, so while BMI is an imperfect measure of healthy body weight, it is a useful indicator of whether any additional testing or action is required. Refer to the table below to see the different categories based on BMI that is used by the calculator.`
      },
      {
        QUESTION: 'Why BMI?',
        DESCRIPTION: `The BMI is generally used as a means of correlation between groups related by general mass and can serve as a vague means of estimating adiposity. The duality of the BMI is that, while it is easy to use as a general calculation, it is limited as to how accurate and pertinent the data obtained from it can be. Generally, the index is suitable for recognizing trends within sedentary or overweight individuals because there is a smaller margin of error. The BMI has been used by the WHO as the standard for recording obesity statistics since the early 1980s.This general correlation is particularly useful for consensus data regarding obesity or various other conditions because it can be used to build a semi-accurate representation from which a solution can be stipulated, or the RDA for a group can be calculated. Similarly, this is becoming more and more pertinent to the growth of children, due to the fact that the majority of children are sedentary.[32] Cross-sectional studies indicated that sedentary people can decrease BMI by becoming more physically active. Smaller effects are seen in prospective cohort studies which lend to support active mobility as a means to prevent a further increase in BMI`
      },
      {
        QUESTION: 'Scalability',
        DESCRIPTION: `BMI is proportional to the mass and inversely proportional to the square of the height. So, if all body dimensions double, and mass scales naturally with the cube of the height, then BMI doubles instead of remaining the same. This results in taller people having a reported BMI that is uncharacteristically high, compared to their actual body fat levels. In comparison, the Ponderal index is based on the natural scaling of mass with the third power of the height.However, many taller people are not just "scaled up" short people but tend to have narrower frames in proportion to their height. Carl Lavie has written that, "The B.M.I. tables are excellent for identifying obesity and body fat in large populations, but they are far less reliable for determining fatness in individuals."`
      },
      {
        QUESTION: 'Consequences of elevated level in adults',
        DESCRIPTION: `The BMI ranges are based on the relationship between body weight and disease and death. Overweight and obese individuals are at an increased risk for the following diseases:
        <ul class="description-list">
        <li>Coronary artery disease</li>
        <li>Dyslipidemia</li>
        <li>Type 2 diabetes</li>
        <li>Gallbladder disease</li>
        <li>Hypertension</li>
        <li>Osteoarthritis</li>
        <li>Sleep apnea</li>
        <li>Stroke</li>
        </ul>
        At least 10 cancers, including endometrial, breast, and colon cancer.
        Epidural lipomatosis
        Among people who have never smoked, overweight/obesity is associated with 51% increase in mortality compared with people who have always been a normal weight`
      },
      {
        QUESTION: 'What are the BMI ranges?',
        DESCRIPTION: `<table class="faq-table">
        <thead>
        <tr>
        <th>Category</th>
        <th>BMI range - kg/m2</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td>Severe Thinness</td>
        <td><16</td>
        </tr>
        <tr>
        <td>Moderate Thinness</td>
        <td>16-17</td>
        </tr>
        <tr>
        <td>Mild Thinness</td>
        <td>17-18</td>
        </tr>
        <tr>
        <td>Normal</td>
        <td>18-25</td>
        </tr>
        <tr>
        <td>Overweight</td>
        <td>25-30</td>
        </tr>
        <tr>
        <td>Obese Class I</td>
        <td>30-35</td>
        </tr>
        <tr>
        <td>Obese Class II</td>
        <td>35-40</td>
        </tr>
        <tr>
        <td>Obese Class III</td>
        <td>>40</td>
        </tr>
        </tbody>
        </table>`
      }
    ]
  }
};
export default CONSTANTS;
