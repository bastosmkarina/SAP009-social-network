export default () => {
  const container = document.createElement('div');
  const template = `
  
  <nav class='menu-hamburguer'>
  <ul>
  <li>
  <a hrrf='/#'>Sobre</a>
  <li>
  <a href='/#login'>Sair</a>
  </li>
  </u>
  </nav>

  <div class='descriçao'>
  <p> Comunidade feita para todas as pessoas que amam a praticidade de suas Air Fryers<p>
  <p> Compatilhe e tenha acesso as mais variadas receitas<p> 
  <textarea id='escrever-receita' name='publicar' rows='10' cols='45' placeholder='Publique aqui sua receita'>
  </textarea> 
  <button type='submit' value='submit' id='publicar-botao'>Publicar</button>
  </div>
  <span>Apelido</span>
  <div class='postagens'></div>
  <i class='fa-regular fa-heart'></i>
  <i class='fa-regular fa-pen-to-square'></i>
  <i class='fa-regular fa-trash-can'></i>
  `;
  container.innerHTML = template;
  return container;
};
