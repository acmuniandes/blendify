import * as firebase from 'firebase'
require("firebase/firestore")

var config = {
  apiKey: "AIzaSyD2OWF-xmOCq10CnoJTwrDbp9uGoXq61rQ",
  authDomain: "blendify-a3d3a.firebaseapp.com",
  databaseURL: "https://blendify-a3d3a.firebaseio.com",
  projectId: "blendify-a3d3a",
  storageBucket: "blendify-a3d3a.appspot.com",
  messagingSenderId: "824073626050"
};    
firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots: true});
export const db = firebase.firestore();

export default firebase;