/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy = (x) => {
  if (x === true) {
    return true;
  } else {
    return false;
  }
};

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
console.log(isTruthy(undefined));
console.log(isTruthy(null));
console.log(isTruthy(NaN));
console.log(isTruthy(0));
console.log(isTruthy(-0));
console.log(isTruthy(""));

console.log("===========================");

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
console.log(isTruthy(!0));
console.log(isTruthy(Object));
console.log(isTruthy(10));
console.log(isTruthy(1.3));
console.log(isTruthy("false"));
console.log(isTruthy(1));
console.log(isTruthy([]));
console.log(isTruthy({}));
console.log(isTruthy("Ola"));
console.log(isTruthy(true));

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/

var carro = {
  marca: "Fiat",
  modelo: "Palio",
  placa: "XJC1935",
  ano: 2012,
  cor: "Preta",
  quantasPortas: 4,
  assentos: 5,
  quantidadePessoas: 0,
};
/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
var mudarCor = (cor) => (carro.cor = cor);

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
var obterCor = () => {
  return carro.cor;
};

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
var obterModelo = () => {
  return carro.modelo;
};

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
var obterMarca = () => {
  return carro.marca;
};

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
var obterMarcaModelo = () => {
  return `Esse carro é um ${carro.marca} ${carro.modelo}`;
};

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/
carro.addPessoa = (pessoa) => {
  if (pessoa <= 5) {
    if (carro.quantidadePessoas < 5) {
      carro.quantidadePessoas += pessoa;
      if (carro.quantidadePessoas <= 5) {
        return `Já temos ${carro.quantidadePessoas} no carro!`;
      } else {
        carro.quantidadePessoas -= pessoa;
        return `O carro já está lotado`;
      }
    } else {
      return `O carro já está lotado`;
    }
  } else {
    var p = "pessoas";
    if (5 - carro.quantidadePessoas === 1) {
      p = "pessoa";
    }
    return (
      "O carro possui apenas 5 locais, não dá para adicionar mais pessoas do que isso. Só cabem mais " +
      (5 - carro.quantidadePessoas) +
      ` ${p}!`
    );
  }
};

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
console.log(carro.cor); //preto
// Mude a cor do carro para vermelho.
carro.cor = "Vermelho";

// E agora, qual a cor do carro?
console.log(carro.cor); ///vermelho

// Mude a cor do carro para verde musgo.
carro.cor = "Verde musgo";

// E agora, qual a cor do carro?
console.log(carro.cor); // verde musgo

// Qual a marca e modelo do carro?
console.log(carro.marca, carro.modelo);

// Adicione 2 pessoas no carro.
console.log(carro.addPessoa(2));

// Adicione mais 4 pessoas no carro.
console.log(carro.addPessoa(4));

// Faça o carro encher.
console.log(carro.addPessoa(3));

// Tire 4 pessoas do carro.
carro.quantidadePessoas -= 4;

// Adicione 10 pessoas no carro.
console.log(carro.addPessoa(10));

// Quantas pessoas temos no carro?

console.log(carro.quantidadePessoas);
