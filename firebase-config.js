import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAIQyLgAlSGQc9XYXBNlD1VzXG5j1jGD7Q",
  authDomain: "batalhadeversiculos.firebaseapp.com",
  databaseURL: "https://batalhadeversiculos-default-rtdb.firebaseio.com",
  projectId: "batalhadeversiculos",
  storageBucket: "batalhadeversiculos.firebasestorage.app",
  messagingSenderId: "303788781845",
  appId: "1:303788781845:web:91b76bd127ada18875791c",
  measurementId: "G-NVG8CHZD10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

export { database };
