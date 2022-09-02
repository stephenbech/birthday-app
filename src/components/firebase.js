import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database'

function StartFirebase () {
     const firebaseConfig = {
          apiKey: "AIzaSyC3-PZQEXTETk29XQ9BLlF7n03jleVH4P4",
          authDomain: "to-do-cp-93bd8.firebaseapp.com",
          databaseURL: "https://to-do-cp-93bd8-default-rtdb.firebaseio.com",
          projectId: "to-do-cp-93bd8",
          storageBucket: "to-do-cp-93bd8.appspot.com",
          messagingSenderId: "1072065953760",
          appId: "1:1072065953760:web:87fcc80f0e04dc44c93585",
          measurementId: "G-9EB0ZLXNTP"
     };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

return getDatabase(app)
}

export default StartFirebase