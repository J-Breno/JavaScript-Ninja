(function (win, doc) {
  "use strict";

  /*
    O desafio de hoje será um pequeno projeto: um cronômetro!
    As regras para criação do cronômetro são as seguintes:
    1. Crie um arquivo index.html e adicione esse script a ele;
    2. Crie um campo `input` do tipo `text`, e inicie-o com um valor 0 (zero).
    Ele será o nosso cronômetro;
    3. Crie 3 botões para as ações do cronômetro: Start, Stop e Reset;
    4. Ao clicar em Start, o valor do campo deve ser incrementado de 1 em 1, a
    cada segundo;
    5. Ao clicar em Stop, o cronômetro deve parar de contar;
    6. Ao clicar em Reset, o cronômetro deve zerar e parar de contar.

    Utilize o atributo data-js para nomear o campo e os botões. Você pode
    usar o nome que achar melhor, desde que ele seja semântico, ou seja, o nome
    dado ao elemento HTML deve definir o que o elemento é ou o que ele faz.
    */
  var $buttonRed = doc.querySelector('[data-button="red"]');
  var $buttonGreen = doc.querySelector('[data-button="green"]');
  var $buttonBlue = doc.querySelector('[data-button="blue"]');

  var $hours = doc.querySelector('[data-span="hours"]');
  var $minutes = doc.querySelector('[data-span="minutes"]');
  var $seconds = doc.querySelector('[data-span="seconds"]');

  var counterSeconds = 0;
  var counterMinutes = 1;
  var counterHours = 1;
  var temporizador = 0;

  $buttonGreen.addEventListener(
    "click",
    function () {
      temporizador = setInterval(function () {
        $seconds.innerHTML =
          counterSeconds < 10 ? `0${++counterSeconds}` : `${++counterSeconds}`;
        if (counterSeconds > 59) {
          if(counterSeconds === 60) {
            $seconds.innerHTML = '00';
          }
          counterSeconds = 0;
          $minutes.innerHTML =
            counterMinutes < 9 ? `0${counterMinutes++}` : `${++counterMinutes}`;
        }

        if (counterMinutes > 59) {
          $hours.innerHTML =
            counterHours < 9 ? `0${counterHours++}` : `${++counterHours}`;
          if (counterMinutes === 60) {
            $minutes.innerHTML = `00`;
          }
          counterMinutes = 1;
        }

        if (counterHours > 23) {
          if (counterHours === 24) {
            $hours.innerHTML = `00`;
          }
          counterHours = 1;
        }
      }, 1000);
    },
    false
  );

  $buttonRed.addEventListener(
    "click",
    function () {
      clearInterval(temporizador);
    },
    false
  );

  $buttonBlue.addEventListener(
    "click",
    function () {
      $hours.innerHTML = "00";
      $minutes.innerHTML = "00";
      $seconds.innerHTML = "00";

      clearInterval(temporizador);
      console.log(temporizador)
      
    }
    ,
    false
  );
})(window, document);
