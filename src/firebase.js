import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCJn7Vtu61vXCga3QIknId1pWMg830A4MI',
  authDomain: 'chat-application-ce7f3.firebaseapp.com',
  projectId: 'chat-application-ce7f3',
  storageBucket: 'chat-application-ce7f3.appspot.com',
  messagingSenderId: '776464807691',
  appId: '1:776464807691:web:700f9316c896b15b0ad40e',
  measurementId: 'G-H393MNYFEV',
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
