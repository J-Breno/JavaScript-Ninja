var a, b = 2, c;

function myFunction() {
    var x =0;
    return (x +=1, x); // return ++x;
}

function myFunc() {
    var a = 1, b = 2, c = 3;
    return [ a, b, c];
}

function myFunc2(x) {
    switch(x){
        case 1:
            console.log('x é 1');
            break;
        case 2:
            console.log('x é 2');
            break;
        default:
            console.log('x não é nem 1 e nem 2');
            break;
    }
}
var counter = 0;
while(counter < 10) {
    console.log(counter);
    counter++;
}

