const firebaseConfig = {
    apiKey: "AIzaSyDSuXE2lHNUaoWEoiq1oYWS7S2qGtzHldQ",
    authDomain: "projeto3miateste.firebaseapp.com",
    projectId: "projeto3miateste",
    storageBucket: "projeto3miateste.appspot.com",
    messagingSenderId: "738448392673",
    appId: "1:738448392673:web:273efe16ed4ca039bc12a0"
  };

  firebase.initializeApp(firebaseConfig);

const emailField = document.getElementById('email');
const passwordField = document.getElementById('password');
const loginButton = document.getElementById('loginButton');
    
 loginButton.addEventListener('click', () => {
    const email = emailField.value;
     const password = passwordField.value;
        firebase.auth().signInWithEmailAndPassword(email, password)

        .then((userCredential) => {
        // Usuário logado com sucesso
        const user = userCredential.user;
        console.log('Usuário logado:', user);
        })

        .catch((error) => {
        // Tratar erros de autenticação
        const errorMessage = error.message;
        console.error('Erro de autenticação:', errorMessage);
        });
});