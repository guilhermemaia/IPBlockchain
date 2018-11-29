function obterTotalDeAssinaturas() {
//     contratoLeiDeIniciativaPopular.totalDeAssinaturas({from: contaUsuario, gas: 3000000, value: 0}, function (err, resultado) {
//         if (err)    {
//             console.log("Erro");
//             console.error(err);
//         } else {
//             console.log("Resultado");
//             let objStatus = document.getElementById("totalAssinaturas");
//             // console.log(resultado);
// 			objStatus.innerText = resultado;
//         }
//     });
// }

contratoLeiDeIniciativaPopular.totalDeAssinaturas({from: contaUsuario, gas: 3000000, value: 0}, function (err, resultado) {
        let resultado = document.getElementById("totalAssinaturas");
});
}