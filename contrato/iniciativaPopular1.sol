pragma solidity 0.4.25;

contract LeiDeIniciativaPopular {
	
    address proponente;
    
    struct proposta {
    string public tituloDaIniciativa;
    string public ementaDaProposta;
    string public textoDaProposta;
    bool assinado;
    }
       
    struct signatario {
        address contaETH;
        string nomeSignatario;
	string tituloDeLeleitor;
	string enderecoSignatario;
	string unidadeDaFerderacao;
	string municipio;
    }
	
	mapping (address => signatario) signatarios;
	
		
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
    
    function definirEmentaDaProposta(string qualEmentaDaProposta) public somenteProponente  {
        ementaDaProposta = qualEmentaDaProposta;
    }
    
    function definirTextoDaProposta(string qualTextoDaProposta) public somenteProponente  {
        textoDaProposta = qualTextoDaProposta;
    }
    
  }   
