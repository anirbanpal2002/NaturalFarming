import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import{getFirestore,doc,setDoc} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHglIoUToaTgVTjc7eJAcPR00VJZ8_McQ",
  authDomain: "natural-farming-bb09c.firebaseapp.com",
  projectId: "natural-farming-bb09c",
  storageBucket: "natural-farming-bb09c.appspot.com",
  messagingSenderId: "191892055767",
  appId: "1:191892055767:web:ac8a0cdc0cf7ae71407292",
  measurementId: "G-CEBHBF9QBC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// const database =getFirestore(app)
const db=firebaseConfig.firestore();

const dataForm = document.getElementById('dataForm');

// Listen for form submission
dataForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get input values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const Phone=document.getElementById('number').value;
  const whatsapp=document.getElementById('whatsapp').value;
  const phonecode=document.getElementById('phonecode').value;
  const Message=document.getElementById('message').value;
  const cuntryname=document.getElementById('country').value;

  // Create an object with the data
  const newData = {
    Name: name,
    Email: email,
    Message:Message,
    Phone:Phone,
    WhatsApp:whatsapp,
    PhoneCode:phonecode,
    Country:cuntryname
  };

  // Add the data to Firebase
  db.collection('Survey').add(newData)
    .then(function(docRef) {
      console.log('Data added with ID: ', docRef.id);
    })
    .catch(function(error) {
      console.error('Error adding data: ', error);
    });
});
