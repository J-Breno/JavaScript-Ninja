var arr = [1, 2, 3, 4, 5];
var reduce = arr.reduce(function(totalValorAcumulado, valorAtual, index, proprioArray) {
    return totalValorAcumulado + valorAtual;
}, 0); // não modifica o array principal
console.log(reduce);

console.log(arr.indexOf(3));  //ele retorna o index do que eu estou procurando
console.log(arr.indexOf(2, 5));  //1° parâmetro. o valor que eu quero procurar,2° parâmetro. o index de onde eu quero começar a procurar

console.log(Array.isArray(arr)); // diz se é array ou não   