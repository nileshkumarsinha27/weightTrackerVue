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
    .then(redirectToApp)
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

export { redirectToApp, redirectToLogin, login, logout, signUp, getUser };
