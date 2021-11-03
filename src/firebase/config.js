import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyDkRa4SZQym0aKgKZOlbEVxrBsGQrQMzns",
  authDomain: "photo-wall-cb607.firebaseapp.com",
  projectId: "photo-wall-cb607",
  storageBucket: "photo-wall-cb607.appspot.com",
  messagingSenderId: "146328546568",
  appId: "1:146328546568:web:6c3281e162d19bcd6310bd"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };