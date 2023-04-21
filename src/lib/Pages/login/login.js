import { login } from '../../firebaseServices/firebaseAuth.js';

export default () => {
  const container = document.createElement('div');
  const template = `
 
 <p> Sua comunidade de trocas de receitas para Air Fryer</p>
 <form id='login'>
 <p>Acesse</p>
 <label for='email'>
 <input type ='email' name ='email' id='email-login' placeholder='Email'autocomplete=''> <br>
 </label>
 <label for='password'>
 <input type ='password' autocomplete='current-password'name='password' id='senha-login' placeholder='Senha'> <br>
 </label>
 <label for='submit-login'>
 <button type='submit' value='Submit' id='s'>Entrar</button> </label> <br>
 <label for='login-google'>
 <button type='submit' value='Login-Google' id='btn-google'> Entrar com Google</button>
 <p> Novo por aqui? Crie agora sua conta! <p>
 <button type='submit' value='Criar-cadastro' id='btn-cadastrar'> Criar conta</button>
 </form>
`;
  container.innerHTML = template;

  const botaoLogin = container.querySelector('#submit-login');
  botaoLogin.addEventListener ('click', () => {
    const email = document.getElementById('email-login');
    const senha = document.getElementById('senha-login');
    login(email.value, senha.value);
    .then(() => {
      window.location.hash = '#feed';
    })
      .catch((error) => {
        if(error.message === 'Firebase: Error (auth/user-not-found).') {
          alert('Usuário não encontrado');
        } else if (error.message === 'Firebase: Error (auth/wrong-password).') {
          alert('Senha incorreta'); 
        }
      });
      
  });
}
  return container;
