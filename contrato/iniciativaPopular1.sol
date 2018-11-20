pragma solidity 0.4.25;

contract LeiDeIniciativaPopular {
	
    string public tituloDaIniciativa;
    string public ementaDaProposta;
    string public textoDaProposta;
    address proponente;
    
    struct signatario {
        address contaETH;
        string nomeSignatario;
	string tituloDeLeleitor;
	string enderecoSignatario;
	string unidadeDaFerderacao;
	string municipio;
    }
	
	uint contador_signatarios;
	mapping (uint => signatario) signatarios;
	
	function novaAssinatura (address _contaETH, string _nomeSignatario, string _tituloDeLeleitor, string _enderecoSignatario, string _unidadeDaFerderacao, string _municipio) public {
    	signatarios[contador_signatarios] = signatario(_contaETH, _nomeSignatario, _tituloDeLeleitor, _enderecoSignatario, _unidadeDaFerderacao, _municipio);
    	contador_signatarios++;
    }
    
    	function getAssinaturas (address contaETH) public returns (string) {
    	for (uint i = 0 ; i < contacts_count; i++) {
            return contador_signatarios.nomeSignatario;
    }
		
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
