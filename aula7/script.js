console.log(3 /3);
console.log(3 % 3);
console.log(3 % 2);
console.log(5 % 2);
var num =0;

num % 2 === 0 ? console.log('Par') : console.log('Impar');

while(num <= 20){
    num % 2 === 0 ? console.log('Par') : console.log('Impar');
    num++;
}

var arr = ['Breno', null, true, {cor:'azul', tipo: 'couro'}, function() {}];

console.log(arr.length);
num = 0;
while(num < arr.length){
    console.log(arr[num])
    if(num === 3) {
        console.log(arr[num].cor);
    }
    num++;
}

var arr1 = [1,'João', null, true,{altura: 1.72, peso: 78}, function (nome){return `O ${nome} deu ola`},['lili', 'lolo','lulu']]
arr1.push('Ola');
console.log(arr1);
console.log(arr1[6][1]);
console.log(arr1[5](arr1[1]));