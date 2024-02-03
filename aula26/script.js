(function() {

    'use strict';

    var fragment = document.createDocumentFragment();
    var childP = document.createElement('p');
    var textChildP = document.createTextNode('Texto da tag P!');

    childP.appendChild(textChildP);
    fragment.appendChild(childP);

    document.body.appendChild(fragment);

    var arr = [1, 2, 3, 4, 5] 
    var arr2 = arr.map(function(item) { // se eu tivesse feito assim arr2 = arr; ia da true, pois ele iam fazer referência ao mesmo array que está alocado na memória
        return item;
    }); // também pode ser feito com o slice === arr.slice(0, 5);(assim ele vai pegar todos, lembrando ai está 5, pois se eu colocasse 4 ele não iria pegar o útimo item, eu também poderia fazer só assim: arr.slice(0))
    console.log(arr, arr2, arr === arr2);

    console.log( Object.prototype.toString.call(arr) )
    console.log( Object.prototype.toString.call(arr2) )

    function is(obj) {
        return Object.prototype.toString.call(obj);
    }

    function isArray(obj) {
        return is(obj) === '[object Array]';
    }
    console.log( isArray([1, 2 , 3]) )

})();