function getEnderecoEthereum() {
  var enderecoEthereum = document.getElementById("enderecoEthereum").value;

  // https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
  localStorage.setItem('enderecoEthereum', enderecoEthereum); 
  window.location = "https://guilhermemaia.github.io/IPBlockchain/assinaturas.html";
}


