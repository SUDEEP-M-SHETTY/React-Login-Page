// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDQkpRn3JMx3Bxs1mOHPh1YddCKBFrdnh8",
    authDomain: "login-2adb9.firebaseapp.com",
    projectId: "login-2adb9",
    storageBucket: "login-2adb9.appspot.com",
    messagingSenderId: "484612413133",
    appId: "1:484612413133:web:a8a6240bb3d1c8bcc0fb84",
    measurementId: "G-FGPEWQ4VGN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Initialize Firebase Authentication
const firestore = getFirestore(app); // Initialize Firestore

// Export the initialized services
export { auth, firestore };
