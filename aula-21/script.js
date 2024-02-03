(function(win, doc) {
    'use strict';
    // sincrono significa quando você tem um evento ou um comando ou algo que está acontencendo no meu programa, que está acontecendo um comando após o outro

    /*
    console.log(1);
    console.log(2);
    console.log(3);
    eles executam de forma sicrona, pois vão executar um após o outro

    console.log() // é um comando sicrono, e a maioria dos comandos no javascript funcionam de forma sicrona

    assicrono é quando precisamos trabalhar com eventos, aguarda ação do usuário, fazer um temporizador

    evento sicrono consome muito do navegador

    tudo o que é sicrono no javascript bloqueia as interações até ele terminar de ser executado, exemplo disso é o for

    como eu faço para trabalhar de forma assicrona no JavaScript?
    */

    /*
        Event Loop

        algo que fica rodando em outra thread até uma ação for feita

        CALLBACK - significa retorno, função de retorno

        assicronismo ajuda a não bloquear sua thread
        se tiver muitas ações para tratar, para não tratar na thread principal

        setTimeout() - vai nos ajudar a criar eventos assicronos no javascript, tipo temporizador


    */

    console.log('inicio');
    setTimeout(function() {
        console.log('executou setTimeout');
    }, 1000);
    console.log('fim'); // se setTimeout fosse sicronom ele mostraria primeiro o inicio, depios ele mesmo e depois o fim, mas como ele é assicrono, ele mostra tudo o que vinher antes ou depois dele até ele conseguir bater a sua ação
    // setInterval é igual o setTime out, a diferença só é que ele fica em um loop, até eu mandar parar

    /* console.log()
    console.log()
    console.log('Inicio');
    setInterval(function() {
        console.log('Executou o setInterval')
    }, 2000)
    console.log('fim') */

    // a funçao assicrono fica dentro de uma fila

    // diferença de setTimeout() para setInterval()

    // recursão é fazer que um método ou uma função execute ela própria, o problema é que ela é inifita, para parar ela, podemos fazer uma condição dentro dela, com if ou algo do tipo, se você for usar o setTimeout deve ter que ter essas condições
    var counter = 0;
    var $button = doc.querySelector( '[data-js="button"]');
    var temporizador;
    function timer() {
        console.log('timer', counter++);
        if( counter > 20 )
            return;
        temporizador = setTimeout(timer, 1000); // vai receber o id do setTimeout
    }
    timer();

    $button.addEventListener('click', function() {
        clearTimeout(temporizador); // isso vai parar o temporizador
    },false)

    // Diferença de setTimeout vs setInterval
    /*
        setTimeout executa apenas uma vez, já o interval não

        qual é a vantagem de utilizar o setTimeOut recursivo do que o interval?

        o setTimeout só coloca na fila o próximo setTimeout quando o anterior for executado e para de executa-lo, diferente o setInterval,pois acada tempo pré-escolhido ele vai colocar no event loop, o setInterval vai deixar lento, isso se for em tempo curto, se for 1 min ou mais, não tem problema utilizar o setInterval, dá para parar antes do tempo também usando o clearSetTimeout e o clearSetInterval
    */


})(window, document);
