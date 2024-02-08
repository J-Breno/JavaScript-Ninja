(function() {
    'use strict';

    var cpf = '111.222.333-44';
    var cpfCortado = cpf.split(/\D/g);
    var cpfLimpo = cpfCortado.toString().replace(/,/g,'');
    console.log(cpfLimpo)

    function isValidEmail(email) {
        return email.match(/^\-?\w+?\.?\w+[\.|\_|\+|]?\w+?[^\_|^\.^\+^\-]\@\w+\.\w\w+(\.\w\w)?/gim)
    }
    console.log(isValidEmail('joao@hotmail.com'))
})();
