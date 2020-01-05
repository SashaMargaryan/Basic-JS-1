
let obj={
    x:10,
    y:30
};

function func(){
    return this.x + this.y
};

let x =func.bind(obj);

console.log(x());