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
  return container;
};

/*
<nav class='menu-hamburguer'>
<ul>
<li>
<a hrrf='/#'>Sobre</a>
<li>
<a href='/#login'>Sair</a>
</li>
</u>
</nav>
*/
