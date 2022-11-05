import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA0-NIyn_Je0PlDh-dwB3ZeA59coYiNfw0',
  authDomain: 'house-marketplace-app-71981.firebaseapp.com',
  projectId: 'house-marketplace-app-71981',
  storageBucket: 'house-marketplace-app-71981.appspot.com',
  messagingSenderId: '665902581620',
  appId: '1:665902581620:web:77f8c42be3c1a5b6a1ce21',
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
