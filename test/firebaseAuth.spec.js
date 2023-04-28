import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';

import { auth, login, logingoogle } from '../src/firebaseServices/firebaseAuth';

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
