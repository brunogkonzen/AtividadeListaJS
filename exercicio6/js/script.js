function pesquisarCEP() {
    var cep = $('#cepInput').val();
    $.getJSON('https://viacep.com.br/ws/' + cep + '/json/', function(data) {
      exibirResultado(data);
    });
  }
  
  function pesquisarCidade() {
    var uf = $('#ufInput').val().toUpperCase(); // Obtém a sigla do estado e converte para mai?sculas
    var cidade = $('#cidadeInput').val();
    var rua = $('#ruaInput').val(); // Adiciona um campo para a rua
    cidade = cidade.replace(/\s/g, '%20'); // Substitui os espa?os por "%20"
    $.getJSON('https://viacep.com.br/ws/' + uf + '/' + cidade + '/' + rua + '/json/', function(data) {
      exibirResultado(data);
    });
  }
  
  
  
  function pesquisarCEPsIntervalo() {
    var cepInicial = parseInt($('#cepInicialInput').val()); // Converter para n?mero inteiro
    var cepFinal = parseInt($('#cepFinalInput').val()); // Converter para n?mero inteiro
    
    for (var i = cepInicial; i <= cepFinal; i++) {
      (function(cep) { // Usar uma IIFE para capturar o valor atual de 'cep'
        $.getJSON('https://viacep.com.br/ws/' + cep + '/json/', function(data) {
          exibirResultado(data);
        });
      })(i);
    }
  }
  
  
  function exibirResultado(data) {
    $('#resultado').append('<p><strong>CEP:</strong> ' + data.cep + '<br>' +
                          '<strong>Logradouro:</strong> ' + data.logradouro + '<br>' +
                          '<strong>Bairro:</strong> ' + data.bairro + '<br>' +
                          '<strong>Cidade:</strong> ' + data.localidade + '<br>' +
                          '<strong>Estado:</strong> ' + data.uf + '</p>');
  }