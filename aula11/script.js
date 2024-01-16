var counter = 1;

while(counter < 10) {
    console.log(counter++);
}
counter = 1;
do {
    console.log(counter++);
}while(counter < 10);

var obj = {
    nome: 'Breno',
    idade: 19,
    altura: 1.72
}

for(let item in obj) {
    console.log(item);
}

// for(let item of obj) {
//     console.log(item);
// }

for(let item in obj) {
    console.log(obj[item]);
}

console.log('no obj tem nome?', 'nome' in obj)