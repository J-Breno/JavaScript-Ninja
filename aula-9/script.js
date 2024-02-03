function myFunction() {
  function sum() {
    return 1 + 2;
  }
  return sum();
}

console.log(myFunction());

function myFunction2() {
  var num1 = 12;
  var num2 = 2;
  function sum() {
    // Esse sum está fazendo papel de uma clousers, clouser é uma função que consegue acessar parâmentros externos a ela.
    return num1 + num2;
  }
  return sum();
}

console.log(myFunction2());

function myFunction3() {
  var num1 = 12;
  var num2 = 2;
  return sum();
  function sum() {
    // Isso vai da certo, pois no javascript existe o hosting;
    return num1 + num2;
  }
}

function myFunction4() {
  var num1 = 12;
  var num2 = 2;
  return sum();
  var sum = function () {
    // isso não vai dá certo, por que como você atribui a uma variável, vai ser undefineld
    return num1 + num2;
  };
}


(function(){
    console.log(1 + 5);
})();