import {
  getAuth,
  // createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { app } from '../firebaseInit.js';

export const auth = getAuth(app);
export const login = (email, senha) => signInWithEmailAndPassword(auth, email, senha);

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
