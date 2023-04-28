import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from 'firebase/auth';

import { app } from '../firebaseInit.js';

export const firebaseauth = getAuth(app);

export const login = (email, senha) => signInWithEmailAndPassword(firebaseauth, email, senha);

export const logingoogle = () => {
  const authprovider = new GoogleAuthProvider();
  return signInWithPopup(firebaseauth, authprovider);
};

// eslint-disable-next-line max-len
export const criarUsuario = (nomeCompleto, Apelido, email, senha) => createUserWithEmailAndPassword(firebaseauth, email, senha)
  .then((userCredential) => {
    const usuario = userCredential.user;
    return updateProfile(usuario, { nomeCompleto, Apelido });
  });
