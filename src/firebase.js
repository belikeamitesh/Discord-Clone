import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBSuUFcS32h8DmmgkQUHlWQAFybFc0X18U",
    authDomain: "discord-clone-45349.firebaseapp.com",
    projectId: "discord-clone-45349",
    storageBucket: "discord-clone-45349.appspot.com",
    messagingSenderId: "971103146088",
    appId: "1:971103146088:web:0f25fe64a2e83f72aeebdd"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider };
export default db;