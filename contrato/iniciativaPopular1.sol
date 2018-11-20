pragma solidity 0.4.25;

contract LeiDeIniciativaPopular {
	
    string public tituloDaIniciativa;
    string public ementaDaProposta;
    string public textoDaProposta;
    address proponente;
    
    struct signatario {
        id = 0;
        address contaETH;
        string nomeSignatario;
	string tituloDeLeleitor;
	string enderecoSignatario;
	string unidadeDaFerderacao;
	string municipio;
	unit assinado;
    }
	
	mapping (address => signatario) signatarios;
	uint assinado;
	uint id;
	 
	constructor() public {
        tituloDaIniciativa = "Proposta de Lei de Iniciativa Popular";
        proponente = msg.sender;
	assinado  = 0;
  	id = 0;
    }
		
    modifier somenteProponente() {
        require(msg.sender==proponente, "Somente o proponente desta iniciativa pode realizar esta operação");
        _;
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
    
    function incluirAssinatura(string _nomeSignatario) public {
    id=id+1;
    signatarios[id] = signatario(id, contaETH, nomeSignatario, tituloDeLeleitor, enderecoSignatario, unidadeDaFerderacao, municipio, assinado);
  }

  function getAssinaturas(uint _id) public view returns(string) {
   return signatarios[_id].nomeSignatario.tituloDeLeleitor;
  }
    
    
  }   
