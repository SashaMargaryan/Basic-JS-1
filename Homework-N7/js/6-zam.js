function fo(){
    let n=0;
    return function (){
        n++;
        return n

    }   
};

let a =fo();
console.log(a());
console.log(a());
console.log(a());