/*
Crie um array com 5 items (tipos variados).
*/
var arr = [1,null,undefined,'Hello', {peso:79, altura:1.75}];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
var addItem = (item) => {
    arr.push(item);
    return arr;
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
addItem(['Breno', true, {altura:1.73, peso: 78}])

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log(`O segundo elemento do segundo array é ${arr[5][1]}`)

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log(arr.length);
/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log(arr[5].length);

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
var dez = 10;
while(dez <= 20){
    if(dez % 2 === 0){
        console.log( 'Números pares entre 10 e 20: ' + dez );
    }
    dez++;
}
console.log('----')

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
dez = 10;
while(dez <= 20) {
    if(dez % 2 === 1){
        console.log( 'Números ímpares entre 10 e 20: '  + dez);
    }
    dez++;
}
console.log('----');

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/

for(let cem = 100; cem <= 120; cem++){
    cem % 2 === 0 ? console.log( 'Números pares entre 100 e 120: ' + cem) : '';

}
console.log('-------');

for(let cem11 = 111; cem11 <= 125;cem11++){
    cem11 % 2 === 1 ? console.log( 'Números ímpares entre 111 e 125: ' + cem11) : '';
}

console.log('-------')