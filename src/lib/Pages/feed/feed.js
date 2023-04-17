export default () => {
  const container = document.createElement('div');
  const template = `

  <img src='./lib/Pages/imagens/LogoAirFryer.png' class='logo'>
  <nav>
  <ul>
  <li>
  <a href='/#publicar'>Home</a>
  </li>
  <li>
  <a href='/#feed'>Publicações</a>
  </li>
  <li>
  <a href='/#login'>Sair</a><img src='./lib/Pages/imagens/sair.png'>
  </li>
  </u>
  </nav>

  <h1>Publicações</h1>

  <textarea id='feed'>

  </textarea>
  <img src='./lib/Pages/imagens/like.png'>
  <img src='./lib/Pages/imagens/editar.svg'>
  <img src='./lib/Pages/imagens/delete.png'>

  `;
  container.innerHTML = template;
  return container;
};
