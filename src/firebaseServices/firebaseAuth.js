import {
  getAuth,
  // createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { app } from '../firebaseInit.js';

export const firebaseauth = getAuth(app);

export const login = (email, senha) => signInWithEmailAndPassword(firebaseauth, email, senha);

export const logingoogle = () => {
  const authprovider = new GoogleAuthProvider();
  return signInWithPopup(firebaseauth, authprovider);
};

// export const criarUsuario = getAuth();
// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
// });
