
(function (win, doc) {
  "use strict";

  function on(elemente, event, callBack) {
    doc.querySelector(elemente).addEventListener(event, callBack, false); // basicamente sempre é usado true
  }

  on('[data-js="link"]', "click", function (event) {
    event.preventDefault();

    alert("clicou no a");
  });

  on('[data-js="div"]', "click", function (e) {
    // não é legal fazer isso, só estou fazendo porque é uma aula de exemplo
    alert("clicou na div");
  });

  on('[data-js="span"]', "click", function (e) {
    alert("clicou no span");
  });

  on('[data-js="input"]', "input", function (e) {
    // input - digitar no formulario
    console.log(this.value + 'input');
  });

  on('[data-js="input"]', 'keyup', function (e) {
    // input - digitar no formulario
    console.log(this.value + 'keyup');
  });

  on('[data-js="input"]', 'keydown', function (e) {
    // input - digitar no formulario
    console.log(this.value + 'keydown');
  });

  on('[data-js="input"]', 'keydown', function (e) {
    // input - digitar no formulario
    console.log(event.shiftKey)
    console.log(this.value + 'keydown');
  });

  on('[data-js="select"]', 'change', function (e) {
    // input - digitar no formulario
    doc.querySelector('[data-js="input"]').value = this.value;
  });
})(window, document);
