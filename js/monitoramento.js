function obterTotalDeAssinaturas() {
    contratoLeiDeIniciativaPopular.totalDeAssinaturas({from: contaUsuario, gas: 3000000, value: 0}, function (err, resultado) {
		let resultado = document.getElementById("totalAssinaturas");
		console.log(obterTotalDeAssinaturas);
	}