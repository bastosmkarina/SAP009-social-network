import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from 'firebase/auth';

import { app } from '../firebaseInit.js';

export const auth = getAuth(app);

export const login = (email, senha) => signInWithEmailAndPassword(auth, email, senha);

export const logingoogle = () => {
  const authprovider = new GoogleAuthProvider();
  return signInWithPopup(auth, authprovider);
};

// eslint-disable-next-line max-len
export const criarUsuario = (nomeCompleto, email, senha) => createUserWithEmailAndPassword(auth, email, senha)
  .then((userCredential) => {
    const usuario = userCredential.user;
    return updateProfile(usuario, { nomeCompleto });
  });
