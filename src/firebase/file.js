import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyB6-ThE1M3nj_dqJgBrmKiW4smXG1y8VHk",
    authDomain: "twf-virtual-gallery.firebaseapp.com",
    databaseURL: "https://twf-virtual-gallery.firebaseio.com",
    projectId: "twf-virtual-gallery",
    storageBucket: "twf-virtual-gallery.appspot.com",
    messagingSenderId: "895759241944",
    appId: "1:895759241944:web:6cb20e365813577b69fdad"
  };

  var fire=firebase.initializeApp(firebaseConfig);
  export default fire;