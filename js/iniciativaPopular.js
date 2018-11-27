var contratoLeiDeIniciativaPopular = web3.eth.contract(contratoLeiDeIniciativaPopularABI).at("0xcda2b0c33f34f63fce25844b9224feb0b7374494");

function obterTituloDaIniciativa() {
    contratoLeiDeIniciativaPopular.tituloDaIniciativa({from: contaUsuario, gas: 3000000, value: 0}, function (err, resultado) {
        if (err)    {
            console.log("Erro");
            console.error(err);
        } else {
            console.log("Resultado");
            let objStatus = document.getElementById("spanTituloDaIniciativa");
            // console.log(resultado);
			objStatus.innerText = resultado;
        }
    });
}

function novaAssinatura() {
	var campoNomeSignatario = document.getElementById("campoNomeSignatario").value;
	console.log(campoNomeSignatario);
	var campoNumeroTituloDeLeleitor = document.getElementById("campoNumeroTituloDeLeleitor").value;
	console.log(campoNumeroTituloDeLeleitor);
	var campoEnderecoSignatario = document.getElementById("campoEnderecoSignatario").value;
	console.log(campoEnderecoSignatario);
	var campoUnidadeDaFerderacao = document.getElementById("estados").value;
	console.log(campoUnidadeDaFerderacao);
	var campoMunicipio = document.getElementById("cidades").value;
	console.log(campoMunicipio);
	

	msgAssinatura = document.getElementById("msgAssinatura");
	console.log(msgAssinatura);
	//msgAssinatura.innerHTML = "Assinatura realizada, obrigado.";

	// contratoUsoDeImagem.definirNomeDaEmpresa(nomeEmpresa, {from: contaUsuario, gas: 3000000, value: 0}, function (err, resultado)
	contratoLeiDeIniciativaPopular.novaAssinatura(campoNomeSignatario, campoNumeroTituloDeLeleitor, campoEnderecoSignatario, campoUnidadeDaFerderacao, campoMunicipio, {from: contaUsuario, gas: 3000000, value: 0}, function (err, resultado) {
        if (err)    {
            console.log("Erro");
			console.error(err);
			msgAssinatura.innerHTML = "Erro: " + err;
        } else {
            console.log("Resultado");
            console.log(resultado);
						msgAssinatura.innerHTML = `Transação enviada ao Blockchain Ethereum. Faça a monitoração pelo hash: <a href="https://rinkeby.etherscan.io/tx/${resultado}" target="_blank">${resultado}</a>`;
        }
	});
	


}
