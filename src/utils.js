import moment from 'moment';
const isDataExists = arr => arr && arr.length > 0;
const checkEmptyStr = str => str !== '';
const getTimeFromMoment = date => moment(new Date(date)).format('DD/MM/YYYY');
const getValues = (arr, key) => {
  const newArr = [];
  arr.forEach(elem => {
    newArr.push(elem[key]);
  });
  return newArr;
};
const matchRegex = (regex, str) => regex.test(str);
const checkNumber = num => !isNaN(num);
const calculateBmi = (height, weight) =>
  (weight / Math.pow(height / 100, 2)).toFixed(2);
export {
  isDataExists,
  checkEmptyStr,
  getTimeFromMoment,
  getValues,
  matchRegex,
  checkNumber,
  calculateBmi
};
