(function () {
  "use strict";

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
  const $input = document.querySelector('[data-js="input-calculator"]');
  const $numbers = document.querySelectorAll('[data-js="numbers"]');
  const $deleteDel = document.querySelector('[data-js="delete-del"]');
  const $deleteAc = document.querySelector('[data-js="delete-ac"]');
  const $operators = document.querySelectorAll('[data-js="operators"]');
  const $result = document.querySelector('[data-js="result"]');
  // const math = require('/node_modules/mathjs');
  let arrNumbers = [];
  let arrOperators = [];
  var total = "";

  $numbers.forEach(function (item, index) {
    item.addEventListener(
      "click",
      function () {
        arrNumbers.push(item.value);
        $input.value += item.value;
      },
      false
    );
  });

  $operators.forEach(function (item, index) {
    item.addEventListener(
      "click",
      function () {
        arrOperators.push(item.value);
        eval(item);
        $input.value += item.value;
      },
      false
    );
  });
  let resultado = [];
  if (!!$input.value) {
    console.log(`esse é o valor do ${$input.value}`);
    $input.value = eval($input.value);
  } else {
    $result.addEventListener(
      "click",
      function () {
        for (let i = 0; i < arrNumbers.length; i++) {
          resultado.push(arrNumbers[i]);
          resultado.push(arrOperators[i]);
        }

        resultado.push(total);

        switch (resultado[resultado.length - 1]) {
          case "+":
          case "-":
          case "*":
          case "/":
          case "%":
          case undefined:
            resultado.pop();
            break;
          default:
            break;
        }
        total = resultado.toString().replace(/,/g, "");
        console.log(total);
        console.log(eval(total));
        $input.value = eval(total);

        resultado = [];
        arrNumbers = [];
        arrOperators = [];
        total = eval(total);
      },
      false
    );
  }

  $deleteAc.addEventListener(
    "click",
    function () {
      resultado = [];
      arrNumbers = [];
      arrOperators = [];
      total = '';
      $input.value = '';
    },
    false
  );

  $deleteDel.addEventListener('click', function() {
    $input.value = $input.value.slice(0, -1);
    arrNumbers.pop();
  }, false);
})();
