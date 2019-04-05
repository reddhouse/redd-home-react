import firebase from '@firebase/app';
import '@firebase/firestore'

// Props to @NickDelfino for an awesome config example.
// https://github.com/NickDelfino/nextjs-with-redux-and-cloud-firestore

export function loadDB() {
  try {
    var config = {
      apiKey: "",
      authDomain: "",
      databaseURL: "",
      projectId: "",
      storageBucket: "",
      messagingSenderId: ""
    }
    firebase.initializeApp(config)
  } catch (err) {
    // we skip the "already exists" message which is
    // not an actual error when we're hot-reloading
    if (!/already exists/.test(err.message)) {
      console.error('Firebase initialization error', err.stack)
    }
  }

  return firebase
}
