// Este es el punto de entrada de tu aplicacion

import login from './lib/Pages/login/login.js';
import publicar from './lib/Pages/publicar/publicar.js';
import cadastro from './lib/Pages/cadastro/cadastro.js';

const main = document.querySelector('#root');

const init = () => {
  window.addEventListener('hashchange', () => {
    main.innerHTML = '';
    switch (window.location.hash) {
      case '':
        main.appendChild(login());
        break;
      case '#publicar':
        main.appendChild(publicar());
        break;
      case '#feed':
        main.appendChild(feed());
        break;
      case '#cadastro':
        main.appendChild(cadastro());
        break;

      default:
        main.appendChild(login());
    }
  });
};

window.addEventListener('load', () => {
  main.appendChild(login());
  init();
});
