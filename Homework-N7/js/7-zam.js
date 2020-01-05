let foo = (function(){
    let x = 0;
    return function(){
        x++;
        return x
    }
}())

console.log(foo());
console.log(foo());
console.log(foo());


