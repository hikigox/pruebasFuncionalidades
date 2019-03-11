const firebase = require('firebase/app');
require("firebase/storage");
// const storage = require('firebase/storage');
const admin = require('firebase-admin');

const path = require('path');

const base64 = require('./base64');


var config = {
    
  apiKey: "AIzaSyB3XiK-nRb5mlhWY31tUzOGzJfwfnykEos",
  authDomain: "fileimages-ee4af.firebaseapp.com",
  databaseURL: "https://fileimages-ee4af.firebaseio.com",
  projectId: "fileimages-ee4af",
  storageBucket: "fileimages-ee4af.appspot.com",
  messagingSenderId: "94078408988"

  };
  var serviceAccount = require('./fileimages-ea2e5aff1848.json');

admin.initializeApp({
 credential: admin.credential.cert(serviceAccount),
 storageBucket: "fileimages-ee4af.appspot.com",


});

var bucket = admin.storage().bucket();
firebase.initializeApp(config);

// Get a reference to the storage service, which is used to create references in your storage bucket
var storage = firebase.storage();




const example =(path1) => {
  // Create a storage reference from our storage service
  var storageRef = storage.ref();
  var ref = storageRef.child('message.jpg');
  var metadata = {
    contentType: 'image/jpeg'
  };
  var img = base64.base64_encode(path1);
  var message = 'This is my message.';
  // ref.putString(message).then(function(snapshot) {
  //   console.log('Uploaded a raw string!');
  // });
  
    firebase.storage().ref('img/').child('ejemplo.jpg')
  .put(img,{contentType:'image/jpeg'});


}


module.exports = {
    example
};