(function () {
  "use strict";

  var ajax = new XMLHttpRequest();

  ajax.open("POST", "http://localhost:3000/user");
  ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  ajax.send("username=souza&user=Souza&age=20");

  console.log("Cadastrando usuário...");
  ajax.onreadystatechange = function () {
    if (ajax.readyState === 4) {
      console.log("Usuário cadastrado!");
      console.log(JSON.parse(ajax.responseText))
    }
  };
//   var ajax2 = new XMLHttpRequest();

//   ajax2.open('GET', 'http://localhost:3000/user');
//   ajax2.send();
//   ajax2.onreadystatechange = () => {
//     if(ajax2.readyState === 4 && ajax2.status === 200) {
//         console.log(ajax.responseText)
//     }
//   }

  var get = new XMLHttpRequest();

  get.open('GET', 'http://localhost:3000/user/joao');
  get.send();

  get.onreadystatechange = function() {
    if(get.readyState === 4) {
        console.log(JSON.parse(get.responseText));
    }
  }
})();
