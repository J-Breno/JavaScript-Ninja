(function(){

    console.log(Object.toString());
    var obj = [1,2,3,4];
    console.log(obj.toString());
    var arr = [1,2,3,4,5,6];
    console.log(arr.join(' - ')); // A diferença do join para o toString é que no join você consegue passar parâmetros  
    console.log(arr.concat(7));
    console.log(arr);
    arr.unshift(30); // adiciona no começo do array
    console.log(arr);
    arr.shift() // remove no começo
    console.log(arr);
    console.log(arr.slice(0,2)); //primeiro parâmetro é onde eu vou começar, segundo parâmetro é até onde você quer que ele vá, só que ele não retorna o último index, se você colocar 2 no segundo parâmetro ele vai retornar até 1
    arr.splice(3); // o primeiro parâmetro vai especificar o index que vai haver a exclusão ou a inclusão, isso que eu to fazendo tá removendo, isso quando eu só uso um parâmetro;
    arr.push(4,5,6,7);
    console.log(arr);
    arr.splice(1,3); // o segundo parâmetro é quando itens eu quero remover
    console.log(arr);
    arr.splice(1,0,'a','b','c'); // 1 - onde vai começar, 0 - quantos de itens que vai remover, e o resto é o que vai adicionar
    console.log(arr);
    arr.splice(1,3,2,3,4)
    console.log(arr);

    console.log('-------------------');
    arr.forEach(function(item,index,proprioArray){
        console.log(`[item: ${item}, index: ${index}, proprio array: ${proprioArray}]\n`)
    })
    var every = arr.every(function(item){ // um exemplo de utilidade: verificar se todos do arrya são divisiveis por dois
        console.log(item);
        return item < 5;
    });
    
    console.log(every)

    var some = arr.some(function(item) {
        console.log(item)
        return item % 2 === 0;
    })
    console.log(some);


    var map = arr.map(function(item, index, proprioArray){ // ele não modifica o array principal
        return {itemMaisUm: (item + 1), indexMenosUm: (index - 1)};
    }); //

    var map = arr.map(function(item, index, proprioArray){ // ele não modifica o array principal
        return item + 10;
    });
    var map2 = arr.map(function(item, index, proprioArray){ // ele não modifica o array principal
        return item + 20;
    }).filter(function(item, index, proprioArray){
        return item > 23;
    })

    var filter = map.filter(function(item, index, proprioArray){
        return item > 13;
    })
    
    console.log(arr, map)
    console.log(filter);
    console.log('--------')
    console.log(map2)
})();
