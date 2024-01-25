(function() {
    'use strict';

    var cpf = '111.222.333-44';
    var cpfCortado = cpf.split(/\D/g);
    var cpfLimpo = cpfCortado.toString().replace(/,/g,'');
    console.log(cpfLimpo)
})();