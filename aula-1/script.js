var x = 1;
console.log(x);
console.log(typeof x);
x = 'oi';
console.log(x);
console.log(typeof x);
x = true;
console.log(x);
console.log(typeof x);
x = null;
console.log(x);
console.log(typeof x);
x = {
  nome: "João",
  idade: 19,
  andar: () => {
    return "Andou";
  }
}
console.log(x);
console.log(x.nome);
console.log(x.idade);
x.nome = 'Breno';
console.log(x.nome)
console.log(typeof x);
x = ['Preto', 1, 1.45, true, null, {nome: 'Breno', idade: 19, }, ['ola','oi', 'bom dia']];
console.log(x);
console.log(x[6][1]);
console.log(x[5].nome)
console.log(typeof x);
console.log('==========================');

// Operadores aritiméticos

var n1 = 5;
var n2 = 7;
var calculo;

calculo = n1 + n2;
console.log(calculo);
calculo = n1 - n2;
console.log(calculo);

calculo = n1 * n2;
console.log(calculo);

calculo = n1 / n2;
console.log(calculo);

calculo = n1 % n2; // esse é o módulo, resto de uma divisão;
console.log(calculo);

calculo = (((n1 + n2) * 2) - 5) / 2; 
console.log(calculo);
calculo %= 2; // isso é o mesmo que calculo = calculo % 2;
console.log(calculo);

console.log(++calculo);
console.log(--calculo); // já vai ser instanciado antes, se eu colocar o -- depois, ele vai guardar para depois
console.log('==========================');

console.log(1 == '1');
console.log(1 === '1'); // esse é o mais utilizado,pois ele verifica tanto o tipo de dado quanto o valor, diferente do == que verifica apenas o valor, isso vale o mesmo para != e !==
console.log('==========================');

console.log(1 != '1');
console.log(1 !== '1');
console.log('==========================');
console.log(2 > 1);
console.log(2 < 1);
console.log(2 >=1 );
console.log(2 >=2 );
console.log(2 <= 1);
console.log(2 <= 1);
console.log(2 === 1);
console.log(2 === 2);

function andar(nome) {
  return `${nome} andou`;
}
console.log(andar('Breno'));

var andou = function(nome) {
  return `${nome} andou`;
}
console.log(andou('Breno'));

var falou = (nome) => {
  return `${nome} falou`;
}

console.log(falou('Breno'));
