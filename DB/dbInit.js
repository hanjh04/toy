import firebase from 'firebase';
import 'firebase/firestore';
import { firebaseConfig } from './dbConfig';
const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseDB = firebaseApp.firestore();
const firebaseStorageRef = firebaseApp.storage().ref()
export { firebaseDB, firebaseStorageRef }