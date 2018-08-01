import * as firebase from 'firebase'

var config = {
  apiKey: "AIzaSyD2OWF-xmOCq10CnoJTwrDbp9uGoXq61rQ",
  authDomain: "blendify-a3d3a.firebaseapp.com",
  databaseURL: "https://blendify-a3d3a.firebaseio.com",
  storageBucket: "blendify-a3d3a.appspot.com"
};    
firebase.initializeApp(config);

export default firebase;