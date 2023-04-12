export default () => {
  const container = document.createElement('div');
  const template = `
 <h1> iorkut </h1>
 <p> Faça parte da maior comunidade da AirFryer</p>
 <form>
 <p>Acesse</p>
 <label for='email'> 
 <input type ='email' name ='email' id='email-login' placeholder='Email'> <br>
 </label>
 <label for='password'> 
 <input type ='password' name='password' id='senha-login' placeholder='Senha'> <br>
 </label>
 <label for='submit'> 
 <button type='submit' value='Submit' id='button'>Entrar</button> </label> <br>
 <button type=
 ,
`;
  container.innerHTML = template;
  return container;
};
