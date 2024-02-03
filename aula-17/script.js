(function () {
  "use strict";
  var texto =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, provident modi officia repudiandae consequuntur tempore cumque, ullam reprehende 276 rit repellat dicta eligendi quo eaque quis nesciunt nostrum reiciendis pariatur aperiam et?Lorem ipsum dolor, sit amet consectetur adipisicing  1987 elit. Fugit temporibus optio atque quos laborum nesciunt accusamus quibusdam impedit natus vitae ea quis ad deleniti autem, quam amet. Deserunt, illum omnis.";
  var newTexto = texto.replace(/(di)/gi, "==$1=="); // O que tá em parênteses é a primeira captura, se tiver outros com parênteses vai contanto outras capturas; se usar o & ele vai pegar todas as capturas juntas
  // console.log(newTexto)

  var name = "joao breno";
    var newName = name.replace(/(\w)(\w)/g, function (capturaTotal, letra1, letra2) {
    return letra1.toUpperCase() + letra2.toLowerCase();
  });
  console.log(newName);
})();
