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
 <button type='submit' value='Submit' id='button'>Entrar</button> </label> <br>
 <label for='login-google'>
 <button type='submit' value='Login-Google' id='btn-google'> Entrar com Google</button>
 <p> Novo por aqui? Crie agora sua conta! <p>
 <button type='submit' value='Criar-cadastro' id='btn-cadastrar'> Criar conta</button>
 </form>
`;
  container.innerHTML = template;
  return container;
};
