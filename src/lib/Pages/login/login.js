import { login, logingoogle } from '../../../firebaseServices/firebaseAuth';

export default () => {
  const container = document.createElement('div');

  const template = `
 
 <p class='primeiro-texto-login'> Sua comunidade de trocas de receitas para Air Fryer </p>
 <form id='login' class='login'>
 <p> Acesse: </p>
 <input type ='email' name ='email' id='email-login' placeholder='Email' autocomplete=''> <br>
 <input type ='password' name='password' id='senha-login' placeholder='Senha' autocomplete='current-password'> <br>
 <button type='button' class='login-botao' id='login-botao'> Entrar </button> <br>
 <p> Se preferir, entre com sua conta Google: </p>
 <button type='button' id='google-botao' class='google-botao'><i class="fab fa-google"></i></button>
 <p> Novo por aqui? Crie agora sua conta! <p>
 <button type='button' class='cadastro-botao' id='cadastro-botao'> Cadastrar </button>
 </form>
`;
  container.innerHTML = template;

  const botaoLogin = container.querySelector('#login-botao');
  botaoLogin.addEventListener('click', async () => {
    const email = container.querySelector('#email-login').value;
    const senha = container.querySelector('#senha-login').value;
    try {
      await login(email, senha);
      window.location.hash = '#feed';
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        alert('Usuário não encontrado');
      } else if (error.code === 'auth/wrong-password') {
        alert('Senha incorreta');
      }
    }
  });

  const botaoGoogle = container.querySelector('#google-botao');
  botaoGoogle.addEventListener('click', () => {
    logingoogle()
      .then(() => {
        window.location.hash = '#feed';
      })
      // eslint-disable-next-line no-unused-vars
      .catch((error) => {
        alert('Erro ao efetuar login com o Google!');
      });
  });

  return container;
};
