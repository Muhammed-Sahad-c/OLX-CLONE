import Firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCHdD9NnfiU8CiDvxYXY9aSW6I-hT92g_c",
    authDomain: "olx-clone-d5162.firebaseapp.com",
    projectId: "olx-clone-d5162",
    storageBucket: "olx-clone-d5162.appspot.com",
    messagingSenderId: "392193324558",
    appId: "1:392193324558:web:4699d2a6499df5c91d2e5f",
    measurementId: "G-LY6J9HJNQG"
};



 
export default Firebase.initializeApp(firebaseConfig);