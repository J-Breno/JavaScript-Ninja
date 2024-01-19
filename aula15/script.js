(function() {
    console.log('JS no Browser!');
    var myObj = {
        myProperty: 1,
        init: function init() {
            return this; // seria a mesma coisa que eu retornasse o mesmo objeto, isso signifca que eu posso retornar propriedades do proprio objeto, resumindo ele vai ser uma referência para o objeto principal
        }
    }
    function myFunction() {
        return this;
    };

    var newObj = new Object();

    console.log('newObj', newObj);

    function MyConstructor() {
        this.prop1 = 'prop1',
        this.prop2 = 'prop2';
    }
    var constructor = new MyConstructor();
    console.log('MyConstructor',new MyConstructor())
    console.log('constructor', constructor  )


    console.log('myFunction: ', myFunction(), myFunction() === window);
    console.log('myObj: ', myObj.init(), myObj.init() === myObj);

    function myFunc() { // nunca nomeie o seu argumento como arguments
        return arguments; // podemos acessa-lo de qualquer forma como se fosse um array
    }
    console.log(myFunc(8, 9))
})();