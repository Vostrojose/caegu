function abrirPopup() {
  document.getElementById("popup").style.display = "block";
}

function fecharPopup() {
  document.getElementById("popup").style.display = "none";
  document.getElementById("resposta").innerText = "";
}

function enviarFormulario(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const mensagem = document.getElementById("mensagem").value;

  const resposta = `Obrigado, ${nome}! Recebemos sua mensagem: "${mensagem}"`;
  document.getElementById("resposta").innerText = resposta;

  document.getElementById("formulario").reset();
}

function fecharAoClicarFora(event) {
  const popupConteudo = document.querySelector(".popup-conteudo");
  if (!popupConteudo.contains(event.target)) {
    fecharPopup();
  }
}

function mostrarProdutos() {
  const produtos = document.getElementById("produtos");
  produtos.style.display = produtos.style.display === "none" ? "block" : "none";
}

function filtrarProdutos() {
  const termo = document.getElementById("pesquisa").value.toLowerCase();
  const produtos = document.querySelectorAll("#lista-produtos .product");

  produtos.forEach(produto => {
    const texto = produto.textContent.toLowerCase();
    produto.style.display = texto.includes(termo) ? "block" : "none";
  });
}

function mostrarSobreNos() {
  const sobre = document.getElementById("sobre-nos");
  sobre.style.display = sobre.style.display === "none" ? "block" : "none";
}

fetch('export-Vostrojose-1755467322.json')
  .then(res => res.json())
  .then(data => {
    console.log(data); // Aqui você vê os dados
  });

  fetch('./data/export-Vostrojose.json')
  .then(response => response.json())
  .then(data => {
    console.log('Dados carregados com sucesso:', data);
    // Aqui você pode manipular os dados como quiser
  })
  .catch(error => {
    console.error('Erro ao carregar o JSON:', error);
  });