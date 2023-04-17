export default () => {
  const formCadastro = document.createElement('div');
  const template = `  
      <section>   
    <h1>iorkut</h1>    
      <h2>Cadastro</h2> 
       <form class='cadastrar'> 
     <label for='Nome Completo'>  
     <input type='text' id='Nome-Completo' placeholder='Nome Completo'>  
     </label>  
     <label for='Apelido'>  
    <input type='text' id='Apelido' placeholder='Apelido'> 
      </label> 
      <label for='email'>  
    <input type='email' id='email' placeholder='Email'> 
     </label>  
     <label for='senha'> 
     <input type='password' id='senha' placeholder='Senha'> 
     </label>  
    <button type='submit' value='submit2' id='confirmar'>Confirmar</button>  
    </form>    `;
  formCadastro.innerHTML = template;
  return formCadastro;
};
