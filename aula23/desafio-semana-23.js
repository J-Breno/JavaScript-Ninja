(function (win, doc) {
  'use strict';

  /*
    Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
    As regras são:

    - Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
    diretamente;
    - O input deve iniciar com valor zero;
    - Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
    - Deve haver 4 botões para as operações principais: soma (+), subtração(-),
    multiplicação(x) e divisão(÷);
    - Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
    que irá limpar o input, deixando-o com valor 0;

    - A cada número pressionado, o input deve atualizar concatenando cada valor
    digitado, como em uma calculadora real;
    - Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
    operação no input. Se o último caractere no input já for um símbolo de alguma
    operação, esse caractere deve ser substituído pelo último pressionado.
    Exemplo:
    - Se o input tem os valores: "1+2+", e for pressionado o botão de
    multiplicação (x), então no input deve aparecer "1+2x".
    - Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
    input;
    - Ao pressionar o botão "CE", o input deve ficar zerado.
    */

    
  const $input = doc.querySelector('[data-js="input-calculator"]');
  const $numbers = doc.querySelectorAll('[data-js="numbers"]');
  const $deleteDel = doc.querySelector('[data-js="delete-del"]');
  const $deleteAc = doc.querySelector('[data-js="delete-ac"]');
  const $operators = doc.querySelectorAll('[data-js="operators"]');
  const $result = doc.querySelector('[data-js="result"]');

    function initialize() {
      iniEvents();
    };

    function iniEvents() {
      Array.prototype.forEach.call($numbers, function (button) {
        button.addEventListener("click", handleClickNumber, false);
      });
      Array.prototype.forEach.call($operators, function (button) {
        button.addEventListener("click", handleClickOperation, false);
      });
      $deleteAc.addEventListener('click', handleClickAc, false);
      $result.addEventListener("click", handleClickResult, false);
    }

    

  function handleClickNumber() {
    $input.value += this.value; // -
  }

  function handleClickOperation() {
    $input.value = removeLastItemIfItIsAnOperator($input.value); //-
    $input.value += this.value; // -
  }

  function handleClickAc() {
    $input.value = '';
  }

  function isLastItemAnOperation(number) {
    var operations = getOperations();
    var lastItem = number.split('').pop();
    return operations.some(function(operator) {
      return operator === lastItem;
    });
  }

  function getOperations() {
      return Array.prototype.map.call($operators, function(button) {
        return button.value;  
      });
  }

  function removeLastItemIfItIsAnOperator(string) {
    if(isLastItemAnOperation(string)) 
      return string.slice(0, -1);
    return string;
  }

  function handleClickResult() {
    $input.value = removeLastItemIfItIsAnOperator($input.value);
    var allValues = $input.value.match(getRegexOperations());
    $input.value = allValues.reduce(calculateAllValues);
  }

  function getRegexOperations() {
    return new RegExp('\\d+[' + getOperations().join('')+']?', 'g');
  }

  function calculateAllValues(accumulated, actual) {
    var firstValue = accumulated.slice(0, -1);
    var operator = accumulated.split('').pop();
    var lastValue = removeLastItemIfItIsAnOperator(actual);
    var lastOperator = getLastOperator(actual);
    return doOperation(operator,firstValue, lastValue) + lastOperator;
  } //

  function getLastOperator(value) {
   return isLastItemAnOperation(value) ? value.split('').pop() : '';
  }

  function doOperation(operator, firstValue, lastValue) {
    switch(operator) {
      case '+':
        return  Number( firstValue ) + Number( lastValue ) ;
      case '-':
        return  Number( firstValue ) - Number( lastValue ) ;
      case '*':
        return  Number( firstValue ) * Number( lastValue ) ;
      case '/':
        return  Number( firstValue ) / Number( lastValue ) ;
      case '%':
        return  Number( firstValue ) % Number( lastValue ) ;
    }
    $input.value = removeLastItemIfItIsAnOperator($input.value); //-
    var allValues = $input.value.match(/\d+[+\*\/-]?/g);
    $input.value = allValues.reduce(function(accumulated, actual) { // aqui
      var firstValue = accumulated.slice(0, -1);
      var operator = accumulated.split('').pop();
      var lastValue = removeLastItemIfItIsAnOperator(actual);
      var lastOperator = isLastItemAnOperation(actual) ? actual.split('').pop() : '';
      switch(operator) {
        case '+':
          return ( Number(firstValue) + Number(lastValue) ) + lastOperator;
        case '-':
          return ( Number(firstValue) - Number(lastValue) ) + lastOperator;
        case '*':
          return ( Number(firstValue) * Number(lastValue) ) + lastOperator;
        case '/':
          return ( Number(firstValue) / Number(lastValue) ) + lastOperator;
        case '%':
          return ( Number(firstValue) % Number(lastValue) ) + lastOperator;
      }
    });
  }

  

  $deleteDel.addEventListener(
    "click",
    function () {
      $input.value = $input.value.slice(0, -1);
    },
    false
  );

  initialize(); // sempre tenha uma funçao que vai iniciar a sua aplicação

  // se algo não estiver muito claro, você deve estrair ela para uma função

  // nunca quebre linha dentro de uma função, se você precisar quebrar linha dentro de uma função, refatore o seu código e faça outra function, pois com toda a certeza ele precisa ser reformulado;

  // no máximo se for ter que utlizar if, utilize if de no max 4 linhas

  // tente manter arquivos pequenos de no max 100 linhas e tente não usar comentários(eu estou utilizando porque são anotações de estudo), mas nos projetos não precisa.

  
  

})(window, document);
