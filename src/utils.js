import moment from "moment";
const isDataExists = arr => arr && arr.length > 0;
const checkEmptyStr = str => str !== "";
const getTimeFromMoment = date => moment(new Date(date)).format("DD/MM/YYYY");
const getValues = (arr, key) => {
  const newArr = [];
  arr.forEach(elem => {
    newArr.push(elem[key]);
  });
  return newArr;
};
export { isDataExists, checkEmptyStr, getTimeFromMoment, getValues };
