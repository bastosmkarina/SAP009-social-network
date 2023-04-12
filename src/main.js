// Este es el punto de entrada de tu aplicacion

import login from './lib/Pages/login/login.js';

const main = document.querySelector('#root');

window.addEventListener('load', () => {
  main.appendChild(login());
});
