// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; // This line imports the initializeApp function from the Firebase App SDK. This function is used to initialize a Firebase application with the provided configuration.
import { getFirestore } from "firebase/firestore"; // This line imports the getFirestore function from the Firebase Firestore SDK. This function is used to get access to the Firestore database service.
import { getStorage } from "firebase/storage"; //  This line imports the getStorage function from the Firebase Storage SDK. This function is used to get access to the Firebase Storage service.
import { getAuth } from "firebase/auth"; // This line imports the getAuth function from the Firebase Auth SDK. This function is used to get access to the Firebase Authentication service.
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlfv21tGXr6lmLvZhmIHtyGDbjwMihO9M",  // This block of code defines the Firebase configuration object. It contains various configuration settings required to initialize the Firebase app, including the API key, authentication domain, project ID, storage bucket, messaging sender ID, app ID, and optionally, the measurement ID.
  authDomain: "podcast-app-react-rec-1dd73.firebaseapp.com",
  projectId: "podcast-app-react-rec-1dd73",
  storageBucket: "podcast-app-react-rec-1dd73.appspot.com",
  messagingSenderId: "1014518372842",
  appId: "1:1014518372842:web:4d7b130d756fc8e314fa93",
  measurementId: "G-VRTEGKY3HH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); // This line initializes the Firebase app using the provided configuration object firebaseConfig.
const db = getFirestore(app); // This line initializes the Firestore database service using the initialized Firebase app app obtained from the initializeApp function.
const storage = getStorage(app);  // This line initializes the Firebase Storage service using the initialized Firebase app app obtained from the initializeApp function.
const auth = getAuth(app); // This line initializes the Firebase Authentication service using the initialized Firebase app app obtained from the initializeApp function.

export { auth, db, storage }; // This line exports the initialized instances of Firebase Authentication (auth), Firestore (db), and Storage (storage) services for use in other modules or files within the application.


/* 
importing Firebase SDK functions: In JavaScript, you import specific functions or modules from libraries using import statements. Understanding how to import functions from external libraries is fundamental in web development.
Firebase Configuration Object: The firebaseConfig object contains sensitive information such as API keys and project IDs. Understanding how to securely manage configuration data, including API keys and environment variables,is crucial for web development. Additionally, understanding how to set up and configure Firebase projects is essential.
Initializing Firebase App: The initializeApp function initializes the Firebase application with the provided configuration. This step is necessary to establish a connection between your web app and Firebase services. Understanding how to initialize libraries or services is fundamental in web development.
Initializing Firebase Services: After initializing the Firebase app, you initialize specific Firebase services like Firestore, Storage, and Authentication using their respective functions (getFirestore, getStorage, getAuth). Understanding how to initialize and use third-party services or APIs within your application is important.
Exporting Initialized Services: Finally, the initialized instances of Firebase services are exported (auth, db, storage) for use in other parts of the application. This allows other modules or files to access these Firebase services. Understanding module exports and imports in JavaScript is crucial.
*/


