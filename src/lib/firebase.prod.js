import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { seedDatabase } from '../seed'
// Run the commented two lines one time only. Else, there will be copy of same data in the database.

const config = {
    apiKey: "AIzaSyC9KwWz_mI9RF2O3BY2fIalHARKhKpaGG8",
    authDomain: "netflix-812fd.firebaseapp.com",
    projectId: "netflix-812fd",
    storageBucket: "netflix-812fd.appspot.com",
    messagingSenderId: "690841228555",
    appId: "1:690841228555:web:65947e694292dc1e293e0e"
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase)

export { firebase };