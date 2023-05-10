/* eslint-disable no-alert */
import { auth } from '../../../firebaseServices/firebaseAuth.js';
import {
  newPost,
  accessPost,
  editPost,
  deletePost,
} from '../../../firebaseServices/fireStore.js';

import logomobile from '../../../images/logo/logomobile.png';
import airfryerfeed from '../../../images/logo/airfryerfeed.png';

export default () => {
  const container = document.createElement('div');
  const template = `

  <header>
  <img class='logo-mobile' src='${logomobile}' alt=''>
  <p class='frase1-login'> Sua comunidade de trocas de receitas </p>
  <p class='frase2-login'>para Air Fryer</p>
  <p class='titulo-header-desktop'>iorkut</p>
  <a href="#login" class="sair">Sair</a>
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

  const printPost = async () => {
    const arrayPosts = await accessPost();
    const postList = arrayPosts.map((post) => `
      <section class="areaPostado" id="${post.id}">
      ${console.log(post.id)}
        <div class="postado">
        <ul>
        <li>
                  <div class='li'> 
                  <div class="position-username-data">
                  <div class="position-user-name">
        
                  <p class="user-name">${post.username}</p>
                  </div>
                  </div>
                  <textarea disabled name="" id="txt-area-postado${post.id}" cols="70" rows="5">${post.post}</textarea>
                  ${console.log(post.post)}
                  <div class="position-btn-postar">
                  <p class ="dataPost">${post.data}</p>
                  ${post.username === auth.currentUser.uid ? `
                  <button id="${post.id}editar" class="btn-postar editado">Editar</button>
                  <button id="${post.id}salvar" class="btn-postar editado"></button>
                  <button id="${post.id}deletar" class="btn-postar delete">
                  </button>` : ''}
                      </div>
                     </div>
                  </li>
                  </ul>
          </div>
      </section>     
    `).join('');

    container.querySelector('.postagens').innerHTML = postList;

    arrayPosts.forEach(post => {
      if (post.userId === auth.currentUser.uid) {
        const btnDeletar = document.getElementById(`${post.id}deletar`);
        btnDeletar.addEventListener('click', (e) => {
          e.preventDefault();
          if (window.confirm('Tem certeza de que deseja excluir a publicação?')) {
            deletePost(post.id)
              .then(() => {
                const areaPostado = document.getElementById(post.id);
                areaPostado.remove();
              });
          }
        });
      }
    });

    arrayPosts.forEach(post => {
      if (post.userId === auth.currentUser.uid) {
        const btnEditar = document.getElementById(`${post.id}editar`);
        const textPostado = document.getElementById(`txt-area-postado${post.id}`);
        const btnSalvar = document.getElementById(`${post.id}salvar`);
        btnSalvar.addEventListener('click', (e) => {
          editPost(post.id, textPostado.value);
          textPostado.setAttribute('disabled', true);
          btnEditar.removeAttribute('hidden');
        });

        btnEditar.addEventListener('click', (e) => {
          e.preventDefault();
          if (window.confirm('Tem certeza de que deseja editar a publicação?')) {
            btnEditar.setAttribute('hidden', true);
            textPostado.removeAttribute('disabled');
          }
        });
      }
    });
  };
  printPost();

  const textArea = container.querySelector('#escrever-receita');
  const btnPublicar = container.querySelector('#publicar-botao');
  btnPublicar.addEventListener('click', () => {
    if (textArea.value !== '') {
      const today = new Date();
      const userName = auth.currentUser.displayName;
      const idUser = auth.currentUser.uid;

      newPost(today, idUser, textArea.value, userName).then(() => {
        printPost();
        textArea.value = '';
      });
    } else { alert('Por favor, preencha o campo de postagem!'); }
  });

  return container;
};
