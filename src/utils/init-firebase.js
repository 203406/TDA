import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDtp4UzCJeyn13AnjfeKwmQn9hFwSoWi7Q",
  authDomain: "tda-page.firebaseapp.com",
  projectId: "tda-page",
  databaseURL: "https://tda-page-default-rtdb.firebaseio.com",
  storageBucket: "tda-page.appspot.com",
  messagingSenderId: "1049977458973",
  appId: "1:1049977458973:web:75f2263467f4cadaa091f4",
  measurementId: "G-JKBH6L1N3Y"
};

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
