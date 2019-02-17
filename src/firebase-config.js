const Rebase = require('re-base')
const firebase = require('firebase')

// Initialize Firebase
const FirebaseConfig = {
  apiKey: "AIzaSyB_bGPR9dlV1eqrXWtHuVvaRRZTe1R3uY4",
  authDomain: "marcio-portifolio.firebaseapp.com",
  databaseURL: "https://marcio-portifolio.firebaseio.com",
  projectId: "marcio-portifolio",
  storageBucket: "marcio-portifolio.appspot.com",
  messagingSenderId: "523361082084"
}

const app = firebase.initializeApp(FirebaseConfig)
const config = Rebase.createClass(app.database())

export const storage = app.storage()

export default config
