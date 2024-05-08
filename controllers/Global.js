import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js'
import { 

  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
  sendEmailVerification,
  sendPasswordResetEmail,
  deleteUser
} from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js'


const firebaseConfig = {
    apiKey: "AIzaSyDr9g2wEfqzQgCfeP_TcOSfAbNq3mRU5TU",
    authDomain: "desarrollonube-73c6f.firebaseapp.com",
    databaseURL: "https://desarrollonube-73c6f-default-rtdb.firebaseio.com",
    projectId: "desarrollonube-73c6f",
    storageBucket: "desarrollonube-73c6f.appspot.com",
    messagingSenderId: "179060021824",
    appId: "1:179060021824:web:02db7b70b24cda321adda5",
    measurementId: "G-0XW5V553HY"
  };


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const user = auth.currentUser;

//Metodo de Registro de Usario
export const registerauth = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password)

//Verifacion por correo
export const verification = () =>
  sendEmailVerification(auth.currentUser)

// Metodo de autenticación de usuario
export const loginauth = (email, password) =>
  signInWithEmailAndPassword(auth, email, password)

// Método Inicion Sesion Google
export const googleauth = (provider) =>
  signInWithPopup(auth, provider)

// Método Inicion Sesion Facebook
export const facebookauth = (provider) =>
  signInWithPopup(auth, provider)

// Estado del Usuario logeado
export function userstate(){
  onAuthStateChanged(auth, (user) => {
    if (user) {

      const uid = user.uid;
      console.log(uid)

    } else {
      window.location.href= '../InicioIndex.html'
    }
  });
}

//Restablecer contraseña por correo
export const recoverypass = (email) =>
  sendPasswordResetEmail(auth, email)

// Cerrar sesion del usuario
export const loginout = () =>
  signOut(auth)


// Eliminar usuario
export const deleteuser = (user) =>
  deleteUser(user);

export { auth }; // Exportar la instancia de autenticación

