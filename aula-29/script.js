(function () {
  "use strict";
/*
  var months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  //   var year = 2004;
  //   var month = 10; // mês começa com base 0, se eu quiser novembro, eu vou ter que colocar 10, pois mês 0 é janeiro e novembro é 10
  //   var day = 11; // se um mês tem 30 dias, e eu colocar 31, ele vai para o mês seguinte no dia 01 , e isso serve para todos os outros parâmetros
  //   var hour = 10;
  //   var min = 10;
  //   var sec = 0;
  //   var milliseconds = 0;
  console.log("Objeto DATE");
  console.log(Date.now() / 1000 / 60 / 60 / 24 / 365); // eu não preciso instancia-lo para poder usá-lo, ele vai me passar os milisegundos desde de 1 de janeiro de 1970, 1000 milisegundos  é 1 segundo
  //   var date = new Date(year, month, day, hour, min, sec, milliseconds);
  var date = new Date();
  console.log(date);
  console.log("dia do mês = ", date.getDate()); // o dia do mês atual
  console.log("dia da semana = ", date.getDay()); // o dia da semana, começa pelo domingo e com base 0
  console.log("qual mes = ", date.getMonth());
  console.log("qual ano = ", date.getFullYear());
  console.log("quantos anos de até 1970 = ", date.getYear()); // vai me dar o ano desde de 1970
  console.log("hora atual = ", date.getHours()); // as houras atual
  console.log("minuto atual = ", date.getMinutes()); // os minutos atual
  console.log("segundo atual = ", date.getSeconds());
  console.log("milisegundos atual = ", date.getMilliseconds());

  // um exemplo para saber quanto tempo meu for leva para terminar

  var start = Date.now();
  console.log("oi");
  for (var i = 0; i < 10000000; i++); // lembre-se o for é sicrono, as coisas depois dele só são executadas quando ele termina
  var end = Date.now();
  console.log(end - start); // vou saber quanto milisegundos se passar para fazer esse for

  console.log("-----------------------------");
  console.log("Objeto MATH");

  // ele é um objeto estático, não precisa ser instanciado

  console.log("PI = ", Math.PI);
  console.log("VALOR ABSOLUTO = ", Math.abs(-234)); // valor positivo de um número
  console.log("Arredondando o valor para cima = ", Math.ceil(10.3)); // sempre vai arredondadr para cima, independende do valor
  console.log("Arredonda sempre para baixo = ", Math.floor(10.9));
  console.log("Respeita a regra de arredondadmento = ", Math.round(10.5));
  console.log("Respeita a regra de arredondadmento = ", Math.round(10.49999));
  console.log("Raiz quadrada = ", Math.sqrt(9));
  console.log("rais cúbica = ", Math.cbrt(12));
  console.log("Máximo = ", Math.max(11, 8, 3, 5, 1, 10));
  console.log("Mínimo = ", Math.min(11, 8, 3, 5, 1, 10));
  var num = [10, 1, 5, 6, 2, 4];
  console.log(Math.min(num));
  console.log(Math.min.apply(Math, num));
  console.log("Aleatorio = ", Math.random()); // de 0 a 1
  console.log('Aleátorio, mas eu escolhendo o valor = ', Math.random() * 4);
  console.log('Aleátorio, mas eu escolhendo o valor, e arrdondando para baixo = ', Math.floor(Math.random() * 4)); // isso aqui vai ser de 0 á 3, nunca de 0 a 4;
  console.log('Aleátorio, mas eu escolhendo o valor, e arrdondando para cima = ', Math.ceil(Math.random() * 4)); // isso aqui vai ser de 1 á 4, nunca de 0 a 4;
*/

    const nomeCompleto = () => {
        const nome = 'João Breno Souza Melo';

        const formataNome = () => {
            const nomes = nome.split(' ');
            return nomes[0] + ' ' + nomes[nomes.length - 1];
        }
        return formataNome
    }  
    const minhaClosure = nomeCompleto();
    console.log(minhaClosure())
})();
