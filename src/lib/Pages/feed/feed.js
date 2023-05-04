import { auth } from '../../../firebaseServices/firebaseAuth.js';
import { newPost } from '../../../firebaseServices/fireStore.js';


export default () => {
  const container = document.createElement('div');
  const template = `
  
  <p class='titulo-feed'>Eu amo a minha Air Fryer!</p>
  <p class='membros'>(10.371 membros)<p/>
  <p class='texto-comunidade'>Comunidade feita para todas as pessoas que amam a praticidade de suas Air Fryers</p>
  <section class='caixa-publicar'>
  <p class='texto-compartilhe'>Compatilhe e tenha acesso as mais variadas receitas</p> 
  <textarea id='escrever-receita' name='publicar' rows='5' cols='40' placeholder='Publique aqui sua receita'></textarea> 
  <button type='submit' class='publicar-botao' id='publicar-botao'> Publicar </button>
  </section>
  <p class='apelido'>Apelido</p>
  <section class='postagens'></section>
  <i class='fa-regular fa-heart'></i>
  <i class='fa-regular fa-pen-to-square'></i>
  <i class='fa-regular fa-trash-can'></i>
  `;
  container.innerHTML = template;

  /*
  container.append(sectionMain);
  container.append(Footer());
  class UserException {
    constructor(message) {
      this.message = message;
      this.name = 'UserException';
    }
  }
*/

  const postagem = container.querySelector('#escrever-receita');
  const buttonPost = container.querySelector('#publicar-botao');
  buttonPost.addEventListener('click', () => {
    if (postagem.value !== '') {
      const timeElapsed = Date.now();
      const today = new Date(timeElapsed);
      const dataPostagem = today.toLocaleDateString();
      const username = auth.currentUser.displayName;
      const idUser = auth.currentUser.uid;
      newPost(postagem.value, dataPostagem, username, idUser);
      try {
        if (postagem.value === '') {
          const mensagemError = 'Por favor, escreva algo para publicar!';
          throw new UserException(mensagemError);
        }
        alert('Publicação efetuada com sucesso!');
        window.location.hash = '#feed';
      } catch (error) {
        alert(error.message);
      }
    } else {
      alert('Por favor, escreva algo para publicar!');
    }
  });
  return container;
};
