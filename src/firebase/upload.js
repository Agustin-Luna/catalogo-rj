import MOCK_DATA from '../data/MOCK_DATA.json' assert{type: 'json'}
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { addDoc, collection, doc, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArk9fKfMPWiqslOShrFc5zEp5888v4O_Y",
  authDomain: "estilo-pastelero.firebaseapp.com",
  projectId: "estilo-pastelero",
  storageBucket: "estilo-pastelero.appspot.com",
  messagingSenderId: "604847678945",
  appId: "1:604847678945:web:80bf12f333266bb1721ea0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore (app)

const productosRef = collection(db, 'productos')

MOCK_DATA.forEach(item => {
    delete item.id
    addDoc(productosRef, item)
})

// node src/firebase/upload.js