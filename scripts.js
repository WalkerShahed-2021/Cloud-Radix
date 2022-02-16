/* // Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


 */

//unique firebase object
const firebaseConfig = {
    apiKey: "AIzaSyC7mh8cGTnx-sC69OpaK2pjWPRJr970zdc",
    authDomain: "cloudradix-project.firebaseapp.com",
    projectId: "cloudradix-project",
    storageBucket: "cloudradix-project.appspot.com",
    messagingSenderId: "374833942133",
    appId: "1:374833942133:web:60ac24b62a12983567323c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

//variable to access database collection
const db = firestore.collection("fomData");

//get submit form
let submitutton = document.getElementById('submit');

//Create Event listener to Allow Form Submition

submitutton.addEventListener('click', (e) => {
    e.preventDefault();
    let fristName = document.getElementById('name5').value
    let Phone = document.getElementById('phone').value
    let email = document.getElementById('email').value
    let company = document.getElementById('company').value

    db.doc().set({
        fname: fristName,
        phones: Phone,
        Email: email,
        Company: company
    }).then(() => {
        console.log('data save')
    }).catch((error) =>{
       console.log(error);
    })

    alert('Your Form has been submitted successfully');
})