import firebase from "firebase/app";
import "firebase/auth";
import Router from "../router.js";
import CONSTANTS from "../constants.js";

const redirectToApp = () => Router.push(CONSTANTS.ROUTES.DEFAULT);
const redirectToLogin = () => Router.push(CONSTANTS.ROUTES.LOGIN);
const login = (email, password) =>
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(res => {
      const { uid, displayName, email, photoURL } = res.user;
      writeUserData(uid, displayName, email, photoURL);
      redirectToApp();
    })
    .catch(e => console.log(e.message));

const logout = () => {
  firebase
    .auth()
    .signOut()
    .then(() => redirectToLogin());
};

const signUp = (email, password) =>
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(redirectToLogin)
    .catch(e => console.log(e.message));

const getUser = () => firebase.auth().currentUser;

const writeUserData = (userId, name, email, imageUrl) => {
  firebase
    .database()
    .ref("users/" + userId)
    .set({
      username: name,
      email: email,
      profile_picture: imageUrl
    });
};

export {
  redirectToApp,
  redirectToLogin,
  login,
  logout,
  signUp,
  getUser,
  writeUserData
};
