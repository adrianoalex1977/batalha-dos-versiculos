// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAIQyLgAlSGQc9XYXBNlD1VzXG5j1jGD7Q",
  authDomain: "batalhadeversiculos.firebaseapp.com",
  databaseURL: "https://batalhadeversiculos-default-rtdb.firebaseio.com",
  projectId: "batalhadeversiculos",
  storageBucket: "batalhadeversiculos.appspot.com",
  messagingSenderId: "303788781845",
  appId: "1:303788781845:web:91b76bd127ada18875791c",
  measurementId: "G-NVG8CHZD10"
};

// Inicialização do Firebase
firebase.initializeApp(firebaseConfig);

// Banco de dados
const database = firebase.database();
