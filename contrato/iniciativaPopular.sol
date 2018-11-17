pragma solidity 0.4.25;

contract LeiDeIniciativaPopular {
	
    string public tituloDaIniciativa;
    address proponente;
    address assinante;
	
    modifier somenteProponente() {
        require(msg.sender==proponente, "Somente o proponente desta iniciativa pode realizar esta operação");
        _;
    }

    constructor() public {
        nomeEmpresa = "Proposta de Lei de Iniciativa Popular";
        proponente = msg.sender;
    }
