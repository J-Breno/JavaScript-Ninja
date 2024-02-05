(function (win, doc) {
  "use strict";

  /*
    No HTML:
    - Crie um formulário com um input de texto que receberá um CEP e um botão
    de submit;
    - Crie uma estrutura HTML para receber informações de endereço:
    "Logradouro, Bairro, Estado, Cidade e CEP." Essas informações serão
    preenchidas com os dados da requisição feita no JS.
    - Crie uma área que receberá mensagens com o status da requisição:
    "Carregando, sucesso ou erro."

    No JS:
    - O CEP pode ser entrado pelo usuário com qualquer tipo de caractere, mas
    deve ser limpo e enviado somente os números para a requisição abaixo;
    - Ao submeter esse formulário, deve ser feito um request Ajax para a URL:
    "https://viacep.com.br/ws/[CEP]/json/", onde [CEP] será o CEP passado
    no input criado no HTML;
    - Essa requisição trará dados de um CEP em JSON. Preencha campos na tela
    com os dados recebidos.
    - Enquanto os dados são buscados, na área de mensagens de status, deve mostrar
    a mensagem: "Buscando informações para o CEP [CEP]..."
    - Se não houver dados para o CEP entrado, mostrar a mensagem:
    "Não encontramos o endereço para o CEP [CEP]."
    - Se houver endereço para o CEP digitado, mostre a mensagem:
    "Endereço referente ao CEP [CEP]:"
    - Utilize a lib DOM criada anteriormente para facilitar a manipulação e
    adicionar as informações em tela.
    */
  var request = doc.querySelector('[data-js="request"] p');
  var $getCep = doc.querySelector('[data-js="getCep"]');
  var $button = doc.querySelector('[data-js="button-submit"]');
  var $inputLogadouro = doc.querySelector('[data-js="logadouro"]');
  var $inputBairro = doc.querySelector('[data-js="bairro"]');
  var $inputEstado = doc.querySelector('[data-js="estado"]');
  var $inputCidade = doc.querySelector('[data-js="cidade"]');
  var $setCep = doc.querySelector('[data-js="setCep"]');

  $button.addEventListener("click", enviaCep, false);

  function enviaCep(e) {
    e.preventDefault();
    limpaCep();
  }

  function limpaCep() {
    var cep = " ";
    cep = $getCep.value;
    cep = cep.match(/\w+/gi).join("");
    $getCep.value = cep;
    verificandoAjax(cep);
  }

  function verificandoAjax(cep) {
    if (cep.length != 8) {
      console.log("Erro");
    } else {
      var ajax = new XMLHttpRequest();
      ajax.open("GET", `https://viacep.com.br/ws/${cep}/json/`);
      ajax.send(null);
      ajax.addEventListener("readystatechange", function () {
        if (
          ajax.readyState === 1 ||
          ajax.readyState === 2 ||
          ajax.readyState === 3
        ) {
          // LEMBREte !!! isso aqui tem que ser evidado, pois quando o cep vem invalido ele entrada aqui de qualquer jeito
          request.innerText = `Buscando Informações para o CEP: ${cep}`;
          console.log(ajax.readyState, ajax.status);
          console.log("oi");
        }

        if (isRequestOk(ajax)) {
          setTimeout(function () {
            if (JSON.parse(ajax.responseText).erro != true) {
              request.innerText = `Endereço referente ao CEP: ${cep}`;
              $inputBairro.value = JSON.parse(ajax.responseText).bairro;
              $inputLogadouro.value = JSON.parse(ajax.responseText).logradouro;
              $inputEstado.value = JSON.parse(ajax.responseText).uf;
              $inputCidade.value = JSON.parse(ajax.responseText).localidade;
              $setCep.value = JSON.parse(ajax.responseText).cep;
              console.log("ola");
            } else {
              request.innerText = `Não encontramos o endereço para o CEP : ${cep}.`;
            }
          }, 3000);
        }
      });
    }
  }

  function isRequestOk(ajax) {
    return ajax.readyState === 4 && ajax.status === 200;
  }
})(window, document);
