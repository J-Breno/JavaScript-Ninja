(function (win, doc, DOM) {
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

    function app() {
      var $formCEP = new DOM('[data-js="form-cep"]');
      var $inputCEP = new DOM('[data-js="getCep"]');
      var ajax = new XMLHttpRequest();
      var $logradouro = new DOM('[data-js="logradouro"]');
      var $bairro = new DOM('[data-js="bairro"]');
      var $estado = new DOM('[data-js="estado"]');
      var $cidade = new DOM('[data-js="cidade"]');
      var $cep = new DOM('[data-js="setCep"]');
      var $status = new DOM('[data-js="status"]');
      var $input = new DOM('input');
      $formCEP.on("submit", handleSubmitFormCEP);

      function handleSubmitFormCEP(event) {
        event.preventDefault();
        if (
          $inputCEP.get()[0].value.length != 8 ||
          $inputCEP.get()[0].value === ""
        ) {
          $logradouro.get()[0].value = "-";
          $bairro.get()[0].value = "-";
          $estado.get()[0].value = "-";
          $cidade.get()[0].value = "-";
          $cep.get()[0].value = "-";
          errorInput();
          getMessage("errorLength");
          clearData();
          return;
        } else {
          var url = getUrl();
          ajax.open("GET", url);
          ajax.send();
          getMessage("loading");
          ajax.addEventListener("readystatechange", handleReadyStateChange);
        }
      }
    
      function getUrl() {
        return `https://viacep.com.br/ws/${clearCEP()}/json/`;
      }
    
      function clearCEP() {
        return $inputCEP.get()[0].value.replace(/\D/g, "");
      }
    
      function handleReadyStateChange() {
        setTimeout(function () {
          if (isRequestOk()) {
            getMessage("ok");
            fillCEPFields();
            $input.forEach((item) => {
              item.classList.remove('error')
            })
          }
        }, 3000);
      }
    
      function isRequestOk() {
        return ajax.readyState === 4 && ajax.status === 200;
      }
    
      function fillCEPFields() {
        setTimeout(function() {
        debugger;
        var data = parceData();
          if (!data) {
            getMessage("error");
            data = clearData();
            errorInput();
          }
    
        $logradouro.get()[0].value = data.logradouro;
        $bairro.get()[0].value = data.bairro;
        $estado.get()[0].value = data.uf;
        $cidade.get()[0].value = data.localidade;
        $cep.get()[0].value = data.cep;
      }, 3000)
    
      }
    
      function errorInput() {
        $input.forEach(item => {
          item.classList.add('error');
        });
      }
    
      function clearData() {
        return {
          logradouro: "-",
          bairro: "-",
          uf: "-",
          localidade: "-",
          cep: "-",
        };
      }
    
      function parceData() {
        var result;
        if (JSON.parse(ajax.responseText).erro !== true) {
          result = JSON.parse(ajax.responseText);
        } else {
          result = null;
        }
        return result;
      }
    
      function getMessage(type) {
        var cep = clearCEP();
        var messages = {
          loading: `Buscando informações para o CEP: ${cep}...`,
          ok: `Endereço referente ao CEP: ${cep}.`,
          error: `Não encontramos o endereço para o CEP: ${cep}.`,
          errorLength: "Por favor digite um cep de 8 digitios",
        };
        $status.get()[0].textContent = messages[type];
      }


    }

    app();


})(window, document, window.DOM);
