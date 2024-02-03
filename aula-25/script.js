(function () {
  "use strict";

  var $main = document.querySelector(".main"); // lembre-se isso é só um exemplo, em projetos utilize o data-js

  console.log($main.parentNode);
  console.log($main.childNodes);
  console.log($main.children);
  console.log($main.firstChild);
  console.log($main.firstElementChild);
  console.log($main.firstChild.nodeValue);
  console.log($main.lastChild);
  console.log($main.lastElementChild);
  console.log($main.children.length);
  console.log($main.nextSibling);
  console.log($main.nextElementSibling);
  console.log($main.previousSibling);
  console.log($main.previousElementSibling);
  console.log($main.hasAttribute('class'));
  console.log($main.hasAttribute('id'));
  console.log($main.firstElementChild.firstElementChild.hasAttributes);
  var $mainHeader = document.querySelector('.main-header');
  var $mainContent = document.querySelector(".main-content");
  $mainHeader.cloneNode(true);
  console.log($mainHeader)
  // $mainContent.appendChild(document.querySelector('.main-header').length);

  // $mainHeader.insertBefore('</p>hello</p>', $mainHeader)
  var $mainFooter = document.querySelector('.main-footer');

  $main.replaceChildren($mainHeader, $mainFooter);

  var newTextNode = document.createTextNode('opa!');
  $main.appendChild(newTextNode)

  var newP = document.createElement('p');
  newP.appendChild(newTextNode)
  $main.appendChild(newP);
  console.log( $main.className ); // posso pegar qualquer atributo dessaforma
  // os atributos são getter e setter
  console.log( $main.id = "arroz");
  console.log( $main.getAttribute('data-js'));
  console.log($main.setAttribute('data-js', 'main-dataJs'))
  console.log($main.setAttribute('data-js2', 'main-dataJs2'))

})();
