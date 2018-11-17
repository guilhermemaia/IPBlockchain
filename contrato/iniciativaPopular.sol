pragma solidity 0.4.25;

contract LeiDeIniciativaPopular {
	
    string public tituloDaIniciativa;
    string public textoDaProposta;
    address proponente;
    address assinante;
	
    modifier somenteProponente() {
        require(msg.sender==proponente, "Somente o proponente desta iniciativa pode realizar esta operação");
        _;
    }

    constructor() public {
        tituloDaIniciativa = "Proposta de Lei de Iniciativa Popular";
        proponente = msg.sender;
    }

    function definirTituloDaIniciativa(string qualTituloDaIniciativa) public somenteProponente  {
        tituloDaIniciativa = qualTituloDaIniciativa;
    }
    
    
    
