import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyCVtLvbyGPyTFmXOxplACc9JrWgSc8fYmI",
    authDomain: "scholaread-683c9.firebaseapp.com",
    projectId: "scholaread-683c9",
    storageBucket: "scholaread-683c9.appspot.com",
    messagingSenderId: "298721744156",
    appId: "1:298721744156:web:684dcbabd1d6be24f6d6d9",
    measurementId: "G-7W9PEQ9TB0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();