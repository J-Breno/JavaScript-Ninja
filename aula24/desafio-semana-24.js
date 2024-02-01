/*
Essa semana você terá dois desafios:
1) Revisar todo o contéudo passado até aqui, e ver se você realmente entendeu
tudo o que foi passado! Se tiver dúvidas, anote, e então abra issues,
ou comente no seu pull request mesmo, que eu irei ajudá-lo a entender
o que não ficou tão claro das aulas anteriores.
É essencial que você entenda todo o conteúdo que foi passado até aqui,
para que possamos prosseguir para a parte mais avançada do curso :D

2) Estudar eventos!
Acesse a página do MDN:
https://developer.mozilla.org/en-US/docs/Web/Events#Categories

Tente aplicar na prática alguns dos eventos que estão ali e coloque nesse
desafio os experimentos legais que você conseguir desenvolver :D
*/

/**
 *  Aqui eu irei fazer um resumo do que já foi passado e depois irei fazef um resumo dos eventos que eu aprendi
 * 
 * 1.
 *      O javascript é uma linguagem dinâmica ela não precisa ser inicializada com um tipo para poder ser atribuida
 * os tipos de variáveis no javascript são: Number, String, boolean, object, array, 
 * null é que não tem valor
 * undefined é a ausencia de valor
 * 
 * a diferença entre elas, é que você diz que algo é null, já o undefined você não diz
 * 
 * sempre faça funções pequenas, praticas e objetivas. uma função é um bloco de código que faz uma ação, no caso ela seria tipo um método
 * 
 * Javascript é case sensitive se você declarar uma variável pessoa e depois tentar inicializar ela como peSoa, ele não via funcionar
 * 
 * //Tipos primitivos
 *Number - int,double,float,short,byte,long
 *String - string, char
 *boolean - true, false
 *null e undefiend
 *
* tudo o que não é tipo primitvo é tipo objeto
 *
 * no javascript tudo o que tem mais de uma palavra é caseCamelCase
 * valores que são considerados falsy são {
 *  null
 *  undefined
 * ''
 * -0
 * }
 * 
 * não declare variáveis em escopo global
 * 
 * no javascript usa-se garbage collation - que é tipo um local no javascript que exclui as variáveis que não estão sendo mais usada, o bom de usar escopo local é que o garbage collation faz isso automáticamente
 * 
 * o método push adiciona um número no final do array
 * 
 * sempre nomeei suas funções não faça funções anônimas
 * 
tem momentos que será necessário usar funções anônimas, porém por padrão faça nomeando ela;
 * 
podemos retronar funções dentro de funções
 *
 *
 * podemos acessar chaves de objetos também usando os parenteses, ai esses nomes pode ter espaçoes, desde que estejam entre aspas
 * 
 * hosting é algo que é levado para cima. tipo uma variável que foi inicializada / declarada, mas antes de acontecer isso ela foi chamada,  e naturalmente o javascript leva ela para cima, e ela retornar undefined
 * 
 * iife é uma função que auto se executa
 * 
 * função de callback é quando você tem que chamar ela em um momento especifico
 * 
 * construtores no jvascript criam outros objetos
 * 
 * objetos são mutáveis - podem mudar os valores

E eles são manipulados por referência - cada objeto que eu crio é um objeto diferente

 *
 *
 * é melhor criar objetos da forma literal do que com ocntructor
 * 
 * todo objeto tem um prototype
 * 
 * o método join vai separar um array com o valor que você passar para ele
 * 
 * o método pop exclui do final do array
 * 
 * Object.toString - vai converter para String
 * 
 * slice - ele vai retornar um pedaço do array que a gente selecionar
unshift adiconar no começo
shif remove no começo

splice - modifica o array principal e ele pode tanto adicionar quando remover itens do array;

 *
 *
 * método every vai retornar se todos os itens do array forem true(forem de acordo com a condição)
 * método some vai retornar true se apenas um for true
 * 
 * map - ele recebe uma funçao por parâmetro, e ele vai percorrer todo o array, ele vai retornar um novo array
 * 
 * arraylike parece com um array, mas não é um array
 * 
 * .slice(indexQueroComecarPegar, quantosVoceQuerPegar) -- o último item ele não mostra e ele cria um novo array
 * 
 * \w = A-za-z0-9

\s - espaços em branco

\n quebra de linha

\t - tab/tabulação

\. - todos os caracteres que não sejam quebra de linha

[^abc] - todos os caracteres menos o a,b e c vão ser feito o match

\W - qualqeur caracteres, menos os alfanuméricos (ele está maiusculo), isso vale o mesmo para os outros \'x'

[\S\s] - vai pegar todos os caracteres

// Repetidores

intervalo  - item anterior ao menos n vezes, e no máximo m vezes - representado pelas chaves

\d{2,4} - pegar todos os números que tem no min 2 e no máximo 4

\d{3,} - no min 3 e no máximo qualqeur outro

\d{4} - número exato

\d\d\d? - o último número é opcional

\s\d?

s+ - pelo menos um s ou mais vezes

\w+ - faz o match com as palavras

\w* - qualquer caracteres

 *
 *
 * sicrono é quando está acontecendo um evento atrás do outro
 * 
 * assicrono é quando precisa acontecer algo antes para que ele possa acontecer
 * 
 * Event loop - algo que fica rodando em outra thred até uma ação ser feita
 * 
 *         setTimeout() - vai nos ajudar a criar eventos assicronos no javascript, tipo temporizador
 *
 * recursão é fazer que um método ou uma função execute ela própria o problema é que ela é inifita, para parar ela, podemos fazer uma condição dentro dela, com if ou algo do tipo, se você for usar o setTimeout deve ter que ter essas condições
 * 
 * o setTimeout só coloca na fila o próximo setTimeout quando o anterior for executado e para de executa-lo, diferente o setInterval,pois acada tempo pré-escolhido ele vai colocar no event loop, o setInterval vai deixar lento, isso se for em tempo curto, se for 1 min ou mais, não tem problema utilizar o setInterval, dá para parar antes do tempo também usando o clearSetTimeout e o clearSetInterval
 * 
 * lembre-se quando for um array like utilize o Array.prototype.algo.call(arguments[esse arguments pode ser o array like], function)
 * 
 * 
 * 
 * 2. Peguei os 10 principais eventos
 * 
 * click - quando você clica
 * doubleclick - quando clica duas vezes
 * keyDown - quando pressioina uma tecla 
 * keyUp - quando solta uma tecla
 * mouseOver - passar o mouse sobre o elemento
 * mouseOut - retira o mouse sobre o elemento
 * focus - recebe foco
 * blur - perde o foco
 * change - o valor de algum elemento é alterado
 * submit - define ação ao enviar um formulário
 *      
 */
