// estou escrevendo as coisas aqui pois os arquivos txt estão bugados

(function(win, doc){
    'use strict';

    function myFunction(number) {
        return number * 2;
    }
    console.log( myFunction( 4 ) );
    if(win === window) // não é aconselhado fazer assim
        console.log(`win é igaul a window`);
    // o objeto window tem alguns métodos, ex: alert
    //window.alert('Hello') -- ele existe porem não é muito usado,ele pode ser chamado também só com o alert('hello')


    var obj = {
        prop1: {
            prop2: {
                prop3: 1
            }
        }
    }
    /*var name = prompt('Qual o seu nome? ');

    if(name) {
        console.log('Oi ' + name)
    }
    else {
        console.log('Não enviou!')
    }*/

    // evite usar muitos if, se for usar, utilize no máximo if de única linha

    var del = prompt('Deseja realmente excluir? ');
    if( del )
        console.log('Excluido com sucesso! ', del);
    else
        console.log('Ação cancelada!');

   // console.log(doc.getElementById('my-link')); // vai mostrar o documento. o  html, o dom, o Document Objetc Model, é a arvore do documento, como se fosse uma arvore geonealogica, cada um dos elementos da arvore se chama nó
    /*console.log(doc.getElementsByClassName('my-link'));
    console.log(doc.getElementsByTagName('a'));*/

    /*var $inputs = doc.getElementsByTagName('input');
    console.log($inputs);*/
    //var $inputs = doc.querySelectorAll('input') // não causa efeito colateral
    // querySelectorAll e querySelector são estaticos != dos outros query

    // getter - obter, pegar - get
    // setter - setar, atribuit algo - set


    // eventos

    // .addEventListener
        // click
    var $inputUserName = doc.querySelector("#username");
    var $inputPassword = doc.querySelector("#password");
    var $button = doc.querySelector('#button');
 // click = clicar; submit =apos o envio;
    $button.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('clicou no botão');
    }, false);

    $inputUserName.addEventListener('click', function() {
        alert('Clicou no input')
    }, false);

})(window, document);
