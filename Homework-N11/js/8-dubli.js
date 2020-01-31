let a = [1,1,1,2,3,4,5,5,6];

let x= a.filter((value, index) => a.indexOf(value) === index);
let y = a.filter((value, index) => a.indexOf(value) !== index);

console.log(x);
console.log(y);