import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';

import {
  auth, criarUsuario, login, logingoogle,
} from '../src/firebaseServices/firebaseAuth';

jest.mock('firebase/auth');

describe('login', () => {
  it('deve ser uma função', () => {
    expect(typeof login).toBe('function');
  });

  it('deve logar com o usuario criado', async () => {
    signInWithEmailAndPassword.mockResolvedValueOnce();

    const email = 'test@email.com';
    const senha = '123456';
    await login(email, senha);

    expect(signInWithEmailAndPassword).toHaveBeenCalledTimes(1);
    expect(signInWithEmailAndPassword).toHaveBeenCalledWith(auth, email, senha);
  });
});

describe('logingoogle', () => {
  it('deve ser uma função', () => {
    expect(typeof logingoogle).toBe('function');
  });

  it('deve logar com o usuario criado pelo google', async () => {
    const mockUser = {
      uid: 'testuser123',
      email: 'testuser@example.com',
      displayName: 'Test User',
    };
    const mockSignInWithPopup = jest.fn(() => Promise.resolve(mockUser));
    signInWithPopup.mockImplementationOnce(mockSignInWithPopup);

    await logingoogle();

    expect(GoogleAuthProvider).toHaveBeenCalledTimes(1);
    expect(signInWithPopup).toHaveBeenCalledTimes(1);
    expect(mockSignInWithPopup).toHaveBeenCalledWith(auth, new GoogleAuthProvider());
  });
});

describe('criarUsuario', () => {
  it('deve ser uma função', () => {
    expect(typeof login).toBe('function');
  });

  it('deve criar usuario e atualizar perfil com sucesso', async () => {
    const mockUserCredential = {
      user: {},
    };
    createUserWithEmailAndPassword.mockResolvedValueOnce(mockUserCredential);
    updateProfile.mockResolvedValueOnce();

    const nomeCompleto = 'nomecompletoteste';
    const Apelido = 'apelidoteste';
    const email = 'emailteste@email.com';
    const senha = 'senhateste';
    await criarUsuario(nomeCompleto, Apelido, email, senha);

    expect(createUserWithEmailAndPassword).toHaveBeenCalledTimes(1);
    expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(auth, email, senha);
    expect(updateProfile).toHaveBeenCalledTimes(1);
    // eslint-disable-next-line max-len
    expect(updateProfile).toHaveBeenCalledWith(mockUserCredential.user, {
      nomeCompleto, Apelido,
    });
  });
});
