import {
  signInWithEmailAndPassword,
} from 'firebase/auth';

import { login } from '../src/firebaseServices/firebaseAuth';

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
    expect(signInWithEmailAndPassword).toHaveBeenCalledWith(undefined, email, senha);
  });
});
