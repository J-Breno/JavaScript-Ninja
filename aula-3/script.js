{propriedade: 'Valor'};

var objeto = {
    propriedade: 'Valor',
    propriedade2: 10,
    propriedade3: true
};

console.log(objeto.propriedade);

var pessoa = {
    nome: "Breno",
    idade: 19,
    peso: 78,
    altura: 1.75
};

console.log(pessoa.nome);
console.log(pessoa.idade);

var carro = {
    cor: 'Vermelho',
    motor: '2.0',
    portas: 4
};

console.log('-------------');

console.log(carro.portas);
console.log(carro.cor);
console.log(carro.motor);

var myvar = function() {
    return `variável myvar`;
}
console.log(myvar());

pessoa.olhos = 2;

console.log(pessoa);

pessoa.andar = () => 'pessoa andando';
console.log(pessoa.andar())

pessoa.idade++;
console.log(pessoa.idade);
pessoa.nome = 'João';
pessoa.sobrenome = 'Breno';

pessoa.nomeCompleto = () => pessoa.nome + ' ' + pessoa.sobrenome;
console.log('------------');
console.log(pessoa.nomeCompleto());
console.log(pessoa.andar())