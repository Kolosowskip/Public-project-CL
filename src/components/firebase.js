import firebase from "firebase/app"
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDESIMnKScVOO3wlXiP5w2eHr8YUpppi-I",
    authDomain: "whowehelp-b7fcd.firebaseapp.com",
    databaseURL: "https://whowehelp-b7fcd.firebaseio.com",
    projectId: "whowehelp-b7fcd",
    storageBucket: "whowehelp-b7fcd.appspot.com",
    messagingSenderId: "180735716274",
    appId: "1:180735716274:web:66d6159a3708f4b83112ab",
    measurementId: "G-XTTGV05B8W"
};

firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore()
export default firebase
