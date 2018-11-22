  const LeiDeIniciativaPopularABI = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "qualEmentaDaProposta",
				"type": "string"
			}
		],
		"name": "definirEmentaDaProposta",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "qualTextoDaProposta",
				"type": "string"
			}
		],
		"name": "definirTextoDaProposta",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "qualTituloDaIniciativa",
				"type": "string"
			}
		],
		"name": "definirTituloDaIniciativa",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_contaETH",
				"type": "address"
			},
			{
				"name": "_nomeSignatario",
				"type": "string"
			},
			{
				"name": "_tituloDeLeleitor",
				"type": "string"
			},
			{
				"name": "_enderecoSignatario",
				"type": "string"
			},
			{
				"name": "_unidadeDaFerderacao",
				"type": "string"
			},
			{
				"name": "_municipio",
				"type": "string"
			}
		],
		"name": "novaAssinatura",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "ementaDaProposta",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "textoDaProposta",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "tituloDaIniciativa",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalDeAssinaturas",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]
}
];

var LeiDeIniciativaPopular = web3.eth.contract(LeiDeIniciativaPopularABI).at("0x97bfaa4b693df3d0e2452cbf90a1bb577e74b54d");

function obterTituloDaIniciativa() {
    contratoLeiDeIniciativaPopular.qualTituloDaIniciativa({from: contaUsuario, gas: 3000000, value: 0}, function (err, resultado) {
        if (err)    {
            console.log("Erro");
            console.error(err);
        } else {
            console.log("Resultado");
            let objStatus = document.getElementById("spanTituloDaIniciativa");
            console.log(resultado);
            objStatus.innerText = resultado;
        }
    });
}
