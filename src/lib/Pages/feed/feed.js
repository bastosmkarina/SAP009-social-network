import { auth } from '../../../firebaseServices/firebaseAuth.js';
import { newPost, accesPost } from '../../../firebaseServices/fireStore.js';
import logomobile from '../../../images/logo/logomobile.png';
import airfryerfeed from '../../../images/logo/airfryerfeed.png';

export default () => {
  const container = document.createElement('div');
  const template = `

  <header>
  <img class='logo-mobile' src='${logomobile}' alt=''>
  <p class='frase1-login'> Sua comunidade de trocas de receitas </p>
  <p class='frase2-login'>para Air Fryer</p>
  </header>


  <p class='titulo-feed'>Eu amo a minha Air Fryer!</p>
  <p class='membros'>(10.371 membros)<p/>
  <p class='texto-comunidade'>Comunidade feita para todas as pessoas que amam a praticidade de suas Air Fryers</p>
 
  <img class='airfryerfeed' src='${airfryerfeed}' alt=''>
  
  <section class='caixa-publicar'>
  <p class='texto-compartilhe'>Compatilhe e tenha acesso as mais variadas receitas</p> 
  <textarea id='escrever-receita' name='publicar' rows='5' cols='40' placeholder='Publique aqui sua receita'></textarea> 
  <button type='submit' class='publicar-botao' id='publicar-botao'> Publicar </button>
  <p class='apelido'>Apelido</p>
  <section class='postagens'></section>
  <i class='fa-regular fa-heart'></i>
  <i class='fa-regular fa-pen-to-square'></i>
  <i class='fa-regular fa-trash-can'></i>
  </section>
  </section>
  <footer>
  2023
  </footer>
  `;
  container.innerHTML = template;
 //criar uma duv vazia para receber os posts pelo id (pra puxar pro html)
 //chamar funçao de aceeso do post 
//funçao retornará um array, que teremos que usar um loop/map pra pegar cada post e criar a template string sdo post 

  const postagem = container.querySelector('#escrever-receita');
  const buttonPost = container.querySelector('#publicar-botao');
  const postagensSection = container.querySelector('.postagens');

  buttonPost.addEventListener('click', async () => {
    if (postagem.value !== '') {
      const timeElapsed = Date.now();
      const today = new Date(timeElapsed);
      const dataPostagem = today.toLocaleDateString();
      const username = auth.currentUser.displayName;
      const idUser = auth.currentUser.uid;
      await newPost(postagem.value, dataPostagem, username, idUser);
      postagem.value = '';
      postagensSection.innerHTML = '';
      const messages = await accessPost();
      messages.forEach((message) => {
        const postContainer = document.createElement('div');
        postContainer.innerHTML = `
          <p>${message.data} - ${message.username}</p>
          <p>${message.post}</p>
        `;
        postagensSection.appendChild(postContainer);
      });
      // alert('Publicação efetuada com sucesso!');
      // window.location.hash = '#feed';
    } else {
      alert('Por favor, escreva algo para publicar!');
    }
  });
  return container;
};
