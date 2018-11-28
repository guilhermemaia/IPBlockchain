pragma solidity 0.4.25;

contract LeiDeIniciativaPopular {
	
    string public tituloDaIniciativa;
    string public ementaDaProposta;
    string public textoDaProposta;
    address proponente;
    address sig;
    
    struct signatario {
        string nomeSignatario;
	    string tituloDeLeleitor;
	    string enderecoSignatario;
    	string unidadeDaFerderacao;
	    string municipio;
	    bool assinou;
    }
	
	
	uint contador_signatarios;
	mapping (uint => signatario) signatarios;
	
	modifier somenteProponente() {
        require(msg.sender==proponente, "Somente o proponente desta iniciativa pode realizar esta operação");
        _;
    }

    modifier somenteUmaAss() {
        require(!signatarios[sig].assinou);
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
    
    function novaAssinatura (string _nomeSignatario, string _tituloDeLeleitor, string _enderecoSignatario, string _unidadeDaFerderacao, string _municipio, bool _assinou) public somenteUmaAss {
    	signatarios[contador_signatarios] = signatario(_nomeSignatario, _tituloDeLeleitor, _enderecoSignatario, _unidadeDaFerderacao, _municipio, _assinou);
    	sig = msg.sender;
    	contador_signatarios++;
    }
    
    function totalDeAssinaturas() public view returns (uint) {
         return contador_signatarios;
     }
    
    
    // retorna informações do proponente (não funciona com dados internos de structs)
    function verProposta() public view returns(string, string, string, address) {
        return (tituloDaIniciativa, ementaDaProposta, textoDaProposta, proponente);
    }

}