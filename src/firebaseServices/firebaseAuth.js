import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { app } from '../firebaseInit.js';

export const Auth = getAuth(app);

export const criarUsuario = getAuth();
createUserWithEmailAndPassword(Auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

export const login = (email, senha) => signInWithEmailAndPassword(Auth, email, senha);

export const googleLogin = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(Auth, provider);
};

export const logOut = () => signOut(Auth);
