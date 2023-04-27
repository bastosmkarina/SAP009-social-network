import { criarUsuario } from '../../../firebaseServices/firebaseAuth';

export default () => {
  const container = document.createElement('div');
  const template = `  
      <section>   
    
      <h2>Cadastro</h2> 
      <div>
       <form class='cadastrar'> 
     <label for='Nome Completo'>  
     <input type='text' id='Nome-Completo' placeholder='Nome Completo'>  
     </label>  
     <label for='apelido'>  
    <input type='text' id='Apelido' placeholder='Apelido'> 
      </label> 
      <label for='email'>  
    <input type='email' id='email' placeholder='Email'> 
     </label>  
     <label for='senha'> 
     <input type='password' id='senha' placeholder='Senha'> 
     </label>  
     </div>
    <button type='submit' value='submit2' id='confirmar'>Confirmar</button>  
    <span class='txt-error hide' id='txtError'></span>
    </form>    `;
  container.innerHTML = template;
  function errorMessage(error) {
    if (error.code === 'auth/email-already-exists') {
      return 'Email já cadastrado.';
    } if (error.code === 'auth/invalid-password') {
      return 'A senha precisa ter no mínimo 6 caracteres.';
    } if (error.code === 'auth/invalid-email') {
      return 'Email inválido';
    }
    return 'Preencha todos os campos corretamente';
  }

  const cadastro = container.querySelector('#confirmar');
  cadastro.addEventListener('click', () => {
    const nomeCompleto = container.querySelector('#Nome-Completo');
    const apelido = container.querySelector('#Apelido');
    const email = container.querySelector('#email');
    const senha = container.querySelector('#senha');
    if (apelido.value === '' || nomeCompleto.value === '' || email.value === '' || senha.value === '') {
      alert('Por favor, preencha todos os campos.');
    } else {
      criarUsuario(email.value, senha.value, nomeCompleto.value, apelido.value)
        .then(() => {
          alert('Cadastro realizado com sucesso!');
          window.location.hash = '#login';
        })
        .catch((error) => {
          const mensagem = container.querySelector('#txtError');
          mensagem.innerHTML = errorMessage(error);
        });
    }
  });

  return container;
};

// const cadastro = container.querySelector('#confirmar');
  //cadastro.addEventListener('click', () => {
   // const nomeCompleto = container.querySelector('#Nome-Completo');
   // const apelido = container.querySelector('#Apelido');
   // const email = container.querySelector('#email');
   // const senha = container.querySelector('#senha');
   // if (apelido.value === '' || nomeCompleto.value === '' || email.value === '' || senha.value === '') {
     // alert('Por favor, preencha todos os campos.');
    //} else {
      //criarUsuario(email.value, senha.value, nomeCompleto.value, apelido.value)
       // .then(() => {
          // eslint-disable-next-line no-alert
        //  alert('Cadastro realizado com sucesso!');
         // window.location.hash = '#login';
       // })
       // .catch((error) => {
        //  const mensagem = container.querySelector('#txtError');
         // mensagem.innerHTML = errorMessage(error);
       // });
    //}
  //});

  //return container;};