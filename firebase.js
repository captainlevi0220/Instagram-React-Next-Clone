// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB4N302yHPF8Vxy2oG5IGmQ5FIxtkCv3m4',
  authDomain: 'instagram-firebase-c3136.firebaseapp.com',
  projectId: 'instagram-firebase-c3136',
  storageBucket: 'instagram-firebase-c3136.appspot.com',
  messagingSenderId: '799010897565',
  appId: '1:799010897565:web:1e43860a82b88aee71de74',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()
