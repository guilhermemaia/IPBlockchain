function obterTotalDeAssinaturas() {
    contratoLeiDeIniciativaPopular.totalDeAssinaturas({from: contaUsuario, gas: 3000000, value: 0}, function (err, resultado) {
        if (err)    {
            console.log("Erro");
            console.error(err);
        } else {
            console.log("Resultado");
            let objStatus = document.getElementById("totalAssinaturas");
            // console.log(resultado);
			objStatus.innerText = resultado;
        }
    });
}


function obterTituloDaProposta() {
    contratoLeiDeIniciativaPopular.tituloDaIniciativa({from: contaUsuario, gas: 3000000, value: 0}, function (err, resultado) 
    {
        if (err)    {
            console.log("Erro");
            console.error(err);
        } else {
            console.log("Resultado");
            let objStatus = document.getElementById("tituloDaProposta");
            // console.log(resultado);
			objStatus.innerText = resultado;
        }
    });
}

function obterEmentaDaProposta() {
    contratoLeiDeIniciativaPopular.ementaDaProposta({from: contaUsuario, gas: 3000000, value: 0}, function (err, resultado) 
    {
        if (err)    {
            console.log("Erro");
            console.error(err);
        } else {
            console.log("Resultado");
            let objStatus = document.getElementById("ementaDaProposta");
            // console.log(resultado);
			objStatus.innerText = resultado;
        }
    });
}

function obterTextDaProposta() {
    contratoLeiDeIniciativaPopular.textoDaProposta({from: contaUsuario, gas: 3000000, value: 0}, function (err, resultado) 
    {
        if (err)    {
            console.log("Erro");
            console.error(err);
        } else {
            console.log("Resultado");
            let objStatus = document.getElementById("textDaProposta");
            // console.log(resultado);
			objStatus.innerText = resultado;
        }
    });
}