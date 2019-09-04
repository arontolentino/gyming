import firebase from 'firebase';
import 'firebase/firestore';

// Firebase init
const config = {
  apiKey: 'AIzaSyAILT1a9iVww71noaYH1oPs3hstMfgEg8U',
  authDomain: 'gyming-app.firebaseapp.com',
  databaseURL: 'https://gyming-app.firebaseio.com',
  projectId: 'gyming-app',
  storageBucket: 'gyming-app.appspot.com',
  messagingSenderId: '283119908064',
  appId: '1:283119908064:web:0be69afb6f078b62'
};

firebase.initializeApp(config);

// firebase utilities
const db = firebase.firestore();
const auth = firebase.auth();
const currentUser = auth.currentUser;

// firebase collections
const workoutsCollection = db.collection('workouts');

export { db, auth, currentUser, workoutsCollection };
