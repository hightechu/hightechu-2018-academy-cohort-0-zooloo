/* Your JS codes here */
//Make sure the database connection works
var ref = firebase.database().ref();
alert(ref);

//When the user logs in
firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser) {
        //Go to profile page
        //You can use google to quickly find how to redirect to another html using javascript
		window.location = "newsfeed.html";
    } else {
        //No user signed in
    }
  });



function signup() {
    //Get email, password, and terms
    var email = document.getElementById("Email").value;
    var pass = document.getElementById("Password").value;

    //Use documentation to create user with email and password
	firebase.auth().createUserWithEmailAndPassword(email,pass).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  alert(errorMessage);
  // ...
});
}

function login() {

  let pass = document.getElementById("Password").value;
    //Get login email and password
  let user = document.getElementById("Email").value;
    //Use documentation to sign in (almost the same as signup)
	firebase.auth().signInWithEmailAndPassword(user, pass).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  alert(errorMessage);
  // ...
});
}

function resetPass() {
    var auth = firebase.auth();
    var emailAddress = document.getElementById('Email').value;

    auth.sendPasswordResetEmail(emailAddress).then(function() {
    // Email sent.
    alert("Email sent")
    }).catch(function(error) {
    // An error happened.
    });
}
