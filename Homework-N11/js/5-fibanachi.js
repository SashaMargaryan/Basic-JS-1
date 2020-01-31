let x = n => {
    return n <=1 ? n: x(n - 1) + x(n - 2);  //ES 6
};
console.log(x(7));

function foo(n){
    return n <= 1 ? n: foo(n - 1) + foo(n - 2);
};
console.log(foo(7));