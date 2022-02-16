var form = document.getElementById("my-form");

// function success (){
//     status.innerHTML = 'Thanks';
// }

async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            status.innerHTML = "Thanks for your submission!";
            form.reset()
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                } else {
                    status.innerHTML = "Oops! There was a problem submitting your form"
                }
            })
        }
    }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
    });
    alert('Your Form has been submitted successfully');
}
form.addEventListener("submit", handleSubmit)



/* //unique firebase object
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
}) */