(function() {

    'use strict';

    var ajax = new XMLHttpRequest();
    ajax.open('GET', '/aula-27/data/data.json');
    ajax.send(null);
    console.log('carregando')

    ajax.addEventListener('readystatechange', function(){ // verifica quando meu estado mudou
        if(isRequestOk()) {
           // console.log('requisição ok', JSON.parse(ajax.responseText).message);
           try{
           throw new Error('Mensagem de error'); // throw serve para mostrar um erro  
           }
           catch(e) { // o e é o nosso objeto de error
            console.log(e); 
           }  
        }
       // console.log( 'terminou requisição', ajax.readyState, ajax.status )
    }, false);

   function isRequestOk() {
    return ajax.readyState === 4 && ajax.status === 200
   }
})();