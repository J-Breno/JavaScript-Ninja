(function () {
  /*
    Envolva todo o conteúdo desse arquivo em uma IIFE.
    */

  /*
   Crie um objeto chamado `person`, com as propriedades:
   `name`: String
   `lastname`: String
   `age`: Number
   Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
   de valor para cada propriedade.
   */

  var person = {
    name: "João",
    lastname: "Breno",
    age: 19,
  };

  console.log('Propriedades de "person":');

  /*
  Mostre no console, em um array, todas as propriedades do objeto acima.
  Não use nenhuma estrutura de repetição, nem crie o array manualmente.
  */

  var arr = new Array();
  arr.push(person.age, person.lastname, person.name);
  console.log(arr);

  /*
 Crie um array vazio chamado `books`.
 */
  var books = [];

  /*
Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
seguintes propriedades:
`name`: String
`pages`: Number
*/
  books.push({ name: "Instituas de João Calvino", pages: 1072 });
  books.push({ name: "Confissão de Fé de Westminster", pages: 240 });
  books.push({ name: "Nascido Escravo", pages: 104 });

  console.log("\nLista de livros:");
  console.log(books);
  /*
Mostre no console todos os livros.
*/
  for (prop in books) {
    console.log(prop);
  }

  console.log("\nLivro que está sendo removido:");
  /*
Remova o último livro, e mostre-o no console.
*/
  var lastBooks = books.pop();
  console.log(lastBooks);

  console.log("\nAgora sobraram somente os livros:");

  /*
Mostre no console os livros restantes.
*/
  console.log(books);

  /*
Converta os objetos que ficaram em `books` para strings.
*/
  // ?
  console.log("\nLivros em formato string:");
  books = JSON.stringify(books);
  /*
Mostre os livros nesse formato no console:
*/
  console.log(books);

  /*
Converta os livros novamente para objeto.
*/
  books = JSON.parse(books);
  console.log("\nAgora os livros são objetos novamente:");
  console.log(books);
  /*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
"[PROPRIEDADE]: [VALOR]"
*/
  for (let i = 0; i < books.length; i++) {
    for (let prop in books[i]) {
      console.log(`${prop}: ${books[i][prop]}`);
    }
  }

  /*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
  // ?
  console.log("\nMeu nome é:");
  var myName = ["J", "o", "ã", "o", " ", "B", "r", "e", "n", "o"];
  /*
Juntando todos os itens do array, mostre no console seu nome.
*/
  console.log(myName.join(""));

  console.log("\nMeu nome invertido é:");
  console.log(myName.reverse().join(""));
  /*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/
  // ?

  console.log("\nAgora em ordem alfabética:");
  /*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/
  console.log(myName.sort().join(""));
})();
