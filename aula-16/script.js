(function() {

    'use strict'; // use sempre dentro da IIFE;
    
    var name = 'João';
    var nameModificado = name.split('o').join('i');
    console.log(nameModificado);
    var newName = name.charAt(0).toLowerCase() + name.slice(1);
    console.log(newName)
})();