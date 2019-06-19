function signOut () {
  firebase.auth().signOut().then(function() {
  // Sign-out successful.
  window.location = "login.html";
  }).catch(function(error) {
  // An error happened.
  });
}

function submit () {
  var caption = document.getElementById('caption');
  var url = document.getElementById('url');

  var postData = {
        caption: caption.value,
        url: url.value
    };

    firebase.database().ref('posts/').push(postData);
}

function newsfeed () {
  document.getElementById('posts').innerHTML = '';
    var postRef = firebase.database().ref('posts/')
    postRef.once('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            var childKey = childSnapshot.key;
            var childData = childSnapshot.val();

            var div = document.createElement('div');

            div.className = 'form-group';

            div.innerHTML =
                '<img src="' + childData.url + '">'+
                '<h1>' + childData.caption + '</h1>';

            document.getElementById('posts').appendChild(div);
            // ...
        });
    });
}
