var func = function () {
  return "hi";
};

console.log(func());
func.name; // porque ela é anônima ela retorna ''
var func1 = function func1() {
  return "hello";
};

console.log(func1());

console.log(func1.name);

function ola() {
  return "ola";
}

console.log(ola.name);

function person() {
  return {
    name: "João",
    lastname: "Breno",
  };
}

console.log(person());

function adder(x) {
  return function (y) {
    return x + y;
  };
}
console.log(adder(3)(5));

var add2 = adder(8);
console.log(add2(2));

function adder1(x ) {
    function addOther(y) {
        return x + y;
    }
    return addOther;
}
console.log(adder1(2)(4));

var car = {
    color: 'black'
};

function getCarColor(myCar) {
    return myCar.color;
}

console.log(getCarColor(car));

function showOtherFunction(func) {
    return func();
}

function returnedFunction() {
    return 'Returned Function';
}

console.log(showOtherFunction(returnedFunction));

console.log(showOtherFunction(function () {
    return 'Hello, world';
}));