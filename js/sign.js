
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyA7Mjy3cMB8LxlUXyHWOw5l2o-VrKDLy9k",
    authDomain: "healthyme-5ffa6.firebaseapp.com",
    projectId: "healthyme-5ffa6",
    storageBucket: "healthyme-5ffa6.appspot.com",
    messagingSenderId: "53571410570",
    appId: "1:53571410570:web:ab7fedee84e079b2a06b73",
    measurementId: "G-4J4Z1PFWW6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const auth =firebase.auth()

function signUp(){
  var email = document.getElementById("email2")
  var password = document.getElementById("password2")

  const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
  promise.catch(e => alert(e.message));
  alert("Signed Up");
  location.href = "home.html";
}

function signIn(){
  var email = document.getElementById("email")
  var password = document.getElementById("password")

  const promise = auth.signInWithEmailAndPassword(email.value, password.value);
  promise.catch(e => alert(e.message));
  location.href = "home.html";
}

auth.onAuthStateChanged(function(user){
  if(user){
    //is signed in
    var email=user.email;
    alert("Active User ")
  }else{
    alert("No Active User")
  }
});
