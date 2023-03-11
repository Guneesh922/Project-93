function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   const firebaseConfig = {
    apiKey: "AIzaSyAupVKj18zpp1KSXl1JIg24_ejHyIFO9-Y",
    authDomain: "class-test-85860.firebaseapp.com",
    projectId: "class-test-85860",
    storageBucket: "class-test-85860.appspot.com",
    messagingSenderId: "152823772812",
    appId: "1:152823772812:web:b6e39e9b14a941da36eda9",
    measurementId: "G-V4TVZHJD5P"
  };
  firebase.initializeApp(firebaseConfig);
   //End code
   });});}
getData();