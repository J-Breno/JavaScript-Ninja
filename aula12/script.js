var obj = {
  prop1: "prop1",
  prop2: "prop2",
};

var obj2 = {
  prop1: "prop1",
  prop2: "prop2",
};
console.log(obj);
obj.prop1 = 'Propriedade1'

console.log(obj);

delete obj.prop1;
console.log(obj);
obj.prop1 = 'Propriedade1'
obj2.prop1 = 'Propriedade1'

console.log(obj === obj2);

var objCopy = obj; // são iguais, pois fazem referência
console.log(objCopy);
console.log(objCopy === obj);
delete objCopy.prop1;

console.log(obj);

var obj3 = {x:1, y: 2}

var obj4 = Object.create(obj3); // ele não tem uma propriedade propria, porem ele herdou de obj3

console.log(obj4.x);
obj3.x = 3; // O objeto pai não muda se você não mudar ele na mão assim;
console.log(obj4.x);

console.log(obj3.toString());

console.log(obj3.hasOwnProperty('x'))
console.log(obj4.hasOwnProperty('x'))
for (let prop in obj3){
    if(obj3.hasOwnProperty(prop)){
        console.log(prop);
    }
}

console.log(Object.keys(obj3));

console.log(obj3.isPrototypeOf(obj4)); // Objeto4 é prototipo do obj3

console.log(JSON.stringify(obj3));

console.log(JSON.parse('8'));

var arr = ['Breno', 'Almondega','feijão'];
arr.push(0)
arr.pop();
console.log(arr);

arr.push('ervilhas');
console.log(arr);
arr.sort(); // ele tem especificação de letra maiscula e minuscula
console.log(arr.sort());
console.log(Object.keys(obj2))