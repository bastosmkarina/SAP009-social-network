/* eslint-disable no-alert */
import { auth } from '../../../firebaseServices/firebaseAuth.js';
import { newPost, accessPost } from '../../../firebaseServices/fireStore.js';
import logomobile from '../../../images/logo/logomobile.png';
import airfryerfeed from '../../../images/logo/airfryerfeed.png';

export default async () => {
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
  <section class='postagens'></section>
  </section>
  </section>
  `;

  container.innerHTML = template;

  const postagensSection = container.querySelector('.postagens');

  let messages = await accessPost();
  messages.forEach((message) => {
    const postContainer = document.createElement('div');
    postContainer.classList.add('post-container');
    postContainer.innerHTML = `
      <p>${message.data} - ${message.username}</p>
      <p>${message.post}</p>
      <i id='editar' class='fa-regular fa-pen-to-square'></i>
      <i id='deletar' class='fa-regular fa-trash-can'></i>
    `;
    postagensSection.appendChild(postContainer);
  });

  /*
  arrayPosts.forEach(post) => {
    if (post.userId === auth.currentUser.uid)
  const botaoEditar = document.getElementById(post.idUser + 'editar');
    };

  botaoEditar.addEventListener('click', (e) => {
    e.preventDefault();
    if (window.confirm('Tem certeza de que deseja editar a publicação?')) {
      botaoEditar.setAttribute('hidden', true);
      postagensSection.removeAttribute('disabled');
    }
  });
  */

  const postagem = container.querySelector('#escrever-receita');
  const buttonPost = container.querySelector('#publicar-botao');

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
      messages = await accessPost();
      messages.forEach((message) => {
        const postContainer = document.createElement('div');
        postContainer.innerHTML = `
          <p>${message.data} - ${message.username}</p>
          <p>${message.post}</p>
          <i class='fa-regular fa-pen-to-square'></i>
          <i class='fa-regular fa-trash-can'></i>
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
