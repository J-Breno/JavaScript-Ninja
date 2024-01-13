/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
// ?

var arr = [1, 2, 3, 4, 5];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
// ?

function arr1(arr) {
  return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
// ?
console.log(arr1(arr)[2]);
/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
// ?
function retornarArray(arr = [a, b, c, d, e], x) {
  return arr[x];
}

console.log(retornarArray([1, 2, 3, 4, 5], 3));
/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
// ?

var arr3 = [1, "Ola", true, null, { nome: "Breno", idade: 19 }];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
// ?

function valorArray() {
  return arr3;
}

console.log(valorArray());
/* 
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
// ?
function book(nameBook) {
  var objBook = {
    "Institutas de João Calvino": {
      qunatidadePagina: 1072,
      autor: "João Calvino",
      editora: "Cultura Cristã",
    },
    "Confissão de Fé de Westminster": {
      qunatidadePagina: 240,
      autor: "Assembleia de Westminster",
      editora: "Cultura Cristã",
    },

    "Nascido Escravo": {
      qunatidadePagina: 104,
      autor: "Martinho Lutero",
      editora: "Fiel",
    },
  };

  return !nameBook ? objBook : objBook[ nameBook ];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
// ?
console.log(book("Confissão de Fé de Westminster"));

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
// ?
console.log(`O Nascido Escravo tem ${book('Nascido Escravo').qunatidadePagina}`)
/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
// ?
console.log(`O autor do livro institutas da religião cristão é ${book('Institutas de João Calvino').autor}`)
/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
// ?
console.log(`O livro Confissão de Fé de Westminster foi publicada pela editora ${book('Confissão de Fé de Westminster').editora}`);