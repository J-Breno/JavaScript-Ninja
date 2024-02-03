var url1 = 'http://www.google.com.br';
var url2 = 'htp://www.chinelo.com';
var url3 = 'https://www.google.com';
var url4 = 'https://www.globo.org';

var obj = [
    url1,
    url2,
    url3,
    url4
]
var arr = []
obj.forEach(function(item, index, array) {
    arr.push(item.match(/https?:\/\/[^.]w+[.\w]+/));
})

console.log(arr)

var em1 = 'joao.ola@hotmail.com';
var em2 = 'breno@gmail.com';
var em3 = 'maria@casadajoana.com.br';

var obj2 = [
    em1,
    em2,
    em3
]
var arr2 = []
obj2.forEach(function(item, index, array) {
    arr2.push(item.match(/[\w]+?\.?[\w+]+@\w+\.[.\w]+/));
})

console.log(arr2)

var queryString = '?s=lala&b=bebe&c=cce';

queryString.replace(/[?&](\w+)=(\w+)/g, function(regex, key, value) {
    console.log(`${key} = ${value}`);
})

