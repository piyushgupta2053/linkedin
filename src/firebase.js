import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDZhlgkK8NTWLu1mLNq8xvXt5G98kkyQPg",
  authDomain: "linked-181fa.firebaseapp.com",
  projectId: "linked-181fa",
  storageBucket: "linked-181fa.appspot.com",
  messagingSenderId: "978222600481",
  appId: "1:978222600481:web:e69d72bed5694147686e60"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp();
const auth= firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {auth, provider, storage};
export default db;