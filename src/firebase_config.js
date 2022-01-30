import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC4uo3YLXM8w44G1WjxSOQ2wkZyUuPfSsA",
    authDomain: "karna-kya-hai.firebaseapp.com",
    projectId: "karna-kya-hai",
    storageBucket: "karna-kya-hai.appspot.com",
    messagingSenderId: "44216553966",
    appId: "1:44216553966:web:58ebdc2cb222f626307eff"
};

firebase.initializeApp(firebaseConfig);

const db=firebase.firestore();

 export {db};