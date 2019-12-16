import firebase from 'firebase/app';
import 'firebase/auth';
import Router from '../router.js';
import CONSTANTS from '../constants.js';

const redirectToApp = () => Router.push(CONSTANTS.ROUTES.DEFAULT);
const redirectToLogin = () => Router.push(CONSTANTS.ROUTES.LOGIN);
const login = (email, password, cb = () => {}) =>
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(res => {
      userData(res.user);
      redirectToApp();
    })
    .catch(e => {
      cb(true, e.message, CONSTANTS.LOGIN.TOAST_TYPES.ERROR);
    });

const logout = () => {
  firebase
    .auth()
    .signOut()
    .then(() => redirectToLogin());
};

const signUp = (email, password, cb = () => {}) =>
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      cb(
        true,
        CONSTANTS.LOGIN.SIGNUP_SUCCESS,
        CONSTANTS.LOGIN.TOAST_TYPES.SUCCESS
      );
      logout();
    })
    .catch(e => {
      cb(true, e.message, CONSTANTS.LOGIN.TOAST_TYPES.ERROR);
    });

const getUser = () => firebase.auth().currentUser;

const writeUserData = (userId, name, email, imageUrl) => {
  firebase
    .database()
    .ref('users/' + userId)
    .set({
      username: name,
      email: email,
      profile_picture: imageUrl
    });
};

const userData = (user, cb = () => {}) =>
  firebase
    .database()
    .ref('users')
    .on('value', data => {
      const { uid, displayName, email, photoURL } = user;
      if (findData(data.val(), uid)) {
        writeUserData(uid, displayName, email, photoURL);
      }
      cb(data.val()[uid]);
    });

const findData = (data, uid) => {
  return Object.keys(data).findIndex(elem => elem === uid) === -1
    ? true
    : false;
};

const updateUserData = (userId, data, cb = () => {}) => {
  firebase
    .database()
    .ref('users/' + userId)
    .update(data)
    .then(cb)
    .catch(e => console.log(e));
};
const sendVerificationLink = (cb = () => {}) =>
  getUser()
    .sendEmailVerification()
    .then(() => {
      cb(
        true,
        CONSTANTS.LOGIN.VERIFICATION_MAIL_SENT,
        CONSTANTS.LOGIN.TOAST_TYPES.SUCCESS
      );
      setTimeout(logout, 4000);
    })
    .catch(e => {
      cb(true, e.message, CONSTANTS.LOGIN.TOAST_TYPES.ERROR);
    });
export {
  redirectToApp,
  redirectToLogin,
  login,
  logout,
  signUp,
  getUser,
  writeUserData,
  updateUserData,
  userData,
  sendVerificationLink
};
