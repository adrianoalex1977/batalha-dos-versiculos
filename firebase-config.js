const firebaseConfig = {
    apiKey: "SUA_API_KEY",
    authDomain: "SEU_DOMINIO.firebaseapp.com",
    databaseURL: "https://SEU_DOMINIO.firebaseio.com",
    projectId: "SEU_PROJETO_ID",
    storageBucket: "SEU_DOMINIO.appspot.com",
    messagingSenderId: "SEU_SENDER_ID",
    appId: "SEU_APP_ID"
};
firebase.initializeApp(firebaseConfig);
const database = firebase.database();