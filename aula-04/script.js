var teste;
if(1) {teste = true;} else {teste = false};
console.log(teste);
if(0) {teste = true;} else {teste = false};
console.log(teste);

if('') {teste = true}else {teste = false};
console.log(teste);
if('0') {teste = true} else {teste=false};
console.log(teste); 

if(undefined) {teste = true} else {teste = false};
console.log(teste);

if(null) {teste=true} else {teste=false};
console.log(teste);

if( {} ) {teste = true} else {teste = false};
console.log(teste);

if(NaN) {teste=true} else {teste = false};
console.log(teste);

if( [] ) {teste=true} else {teste=false};
console.log(teste);

console.log(!1);
console.log(!!1);
console.log(!false);
console.log(!!false);

teste === true ? console.log("Valor igual a true") : console.log("Valor igaul a false");

