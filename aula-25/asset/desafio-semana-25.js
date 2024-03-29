(function () {
  "use strict";

  /*
    O desafio dessa semana é criar uma mini library (biblioteca) para
    reutilizarmos nossos códigos quando fizermos manipulação de DOM!
    
    Requisitos:
    - O nome da lib deve ser "DOM".
    - Ela deve ser uma função construtora, que receberá uma string por parâmetro.
    Essa string será o nó do DOM a ser selecionado;
    - No construtor, você deve atribuir à `this.element` todos os elementos
    do DOM selecionados;
    - Extenda a lib para ter os métodos `on`, `off` e `get`.
    - O método `on` irá adicionar um listener de evento a todos os elementos
    selecionados.
    - O método `off` irá remover o listener de evento de todos os elementos
    selecionados.
    - O método `get` deve retornar os elementos.
    - O código abaixo deve funcionar corretamente após a lib criada.
    
    Dica: olhe os erros que acontecem no console, e vá resolvendo um a um.
    Só passe para o próximo problema quando tiver resolvido o anterior :)
    */
  // ?

  function DOM(elements) {
    this.element = document.querySelectorAll(elements);
    this.on = function (event, func) {
      return adicionarUmListener(this.element, event, func);
    };
    this.off = function (event, func) {
      return removeUmListener(this.element, event, func);
    };
    this.get = function () {
      return retornaElementos(this.element);
    };
  }

  function adicionarUmListener(nodeListTag, event, func) {
    Array.prototype.forEach.call(nodeListTag, function (item) {
      return item.addEventListener(event, func, false);
    });
  }

  function removeUmListener(nodeListTag, event, func) {
    Array.prototype.forEach.call(nodeListTag, function (item) {
      return item.removeEventListener(event, func);
    });
  }

  function retornaElementos(nodeListTag) {
    var $newArray = Array.prototype.map.call(nodeListTag, function (item) {
      return item;
    });
    return $newArray;
  }

  var $a = new DOM('[data-js="link"]');
  $a.on("click", function handleClick(e) {
    e.preventDefault();
    console.log("clicou");
    var resultado = confirm('Desaja Excluir o evento? ')
    if (resultado === true) {
      $a.off("click", handleClick);
    }
  });


  console.log("Elementos selecionados:", $a.get());
  console.log("$a é filho de body?", $a.get()[0].parentNode === document.body);
})();