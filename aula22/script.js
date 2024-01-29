(function() {
    'use srtict'
    
    // um erro que eu fiz no desafio anterior é que eu devia ter colocado data-js, e não data-qualquer outra coisa
    
    var n = '10';
    console.log(+n + 2);
    console.log(typeof (+n + 2)); // se eu colocar um mais antes de uma variável que está em formato de String, mas é um número, ele não vai concatenar, ele vai somar como se ela fosse um Integer

    function myFunction(a, b, c, d) {
        return `${this.lastName}\nA:${a}\nB:${b}\nC:${c}\nD:${d}`;
    };

    var arr = [1, 2, 3, 4];
    console.log(arr.toLocaleString());

    var obj = {
        prop1:1, 
        prop2: 2
    }

    console.log(obj.toString());

    var name = {
        lastName: 'Breno'
    }

    console.log( myFunction.length  );
    console.log(myFunction.toString());
    console.log(myFunction.call(name, 'a' ,'b', 'c' ,'d')); // mesma coisa de chamar assim myFunction.cal(); // no call eu posso dizer quem é o this, como eu fiz ai, o primeiro parâmetro sempre vai ser o this, apartir do segundo vão ser os parâmetro da própria função, caso você for usar o call e você não for passar o this, utilize a própria função como this7
    console.log(myFunction.call(name, ...arr));
    console.log(myFunction.apply(name, arr))


    function MyFunction(name, lastName) {
        this.name = name;
        this.lastName = lastName;
        // this.age = 18;
    }

    MyFunction.prototype.fullName = function() { // o prototype vai servir para estender os noos objetos
        return `${this.name} ${this.lastName}`
    }
    MyFunction.prototype.age = 30;

    var joao = new MyFunction('João', 'Breno');

    MyFunction.prototype.age = 19; // se eu colocar na propria função isso vai ser ignorado
    console.log( joao.fullName() );
    console.log(joao.age);

    function myFunc() {
        Array.prototype.forEach.call(arguments, function(item, index) {
            console.log(item)
        });
    }
    myFunc(1, 2, 3, 4, 5, 6, 7, 8);
})();