var arr = [1,2,3];

function myFunction(arg){
    return arg;
}

myFunction(arr);

function arr2() {
    return [4,5,6];
}

function obj1() {
    return {
        nome: 'João',
        idade: 19
    }
}

console.log(obj1().nome)

var obj = {
    nome: 'Breno',
    idade: 19
}

function exibir(obj){
    return obj;
}

console.log(exibir(obj));