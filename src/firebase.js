import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyANBKJeTdZ5Q46w92Dl59AELh0stVNZ5dw",
    authDomain: "slack-clone-3932d.firebaseapp.com",
    databaseURL: "https://slack-clone-3932d.firebaseio.com",
    projectId: "slack-clone-3932d",
    storageBucket: "slack-clone-3932d.appspot.com",
    messagingSenderId: "977831074366",
    appId: "1:977831074366:web:82a481625ccf41f26e8f6f",
    measurementId: "G-5EBCNTX4ZF"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider};
export default db;