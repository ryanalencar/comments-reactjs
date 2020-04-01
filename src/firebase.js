import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCl_gXoAcO_nDVOs5LsfSS59vwD8hEo58Q",
    authDomain: "comments-react-53132.firebaseapp.com",
    databaseURL: "https://comments-react-53132.firebaseio.com",
    projectId: "comments-react-53132",
    storageBucket: "comments-react-53132.appspot.com",
    messagingSenderId: "155358327450",
    appId: "1:155358327450:web:e2dde1b8d57cfd14586523",
    measurementId: "G-CHLPW5VSTY"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const database = firebase.database()
export const auth = firebase.auth()