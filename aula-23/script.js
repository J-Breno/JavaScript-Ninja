(function() {
    'use strict';

    function sum() {
        return Array.prototype.reduce.call( arguments, function( valorAcumulado, valorAtual ) {
            return Number( valorAcumulado ) + Number( valorAtual );
        });
    }
    console.log( sum(1, 21, 32, 4) )

})();