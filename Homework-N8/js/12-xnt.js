let arr = [5,1,2,3,4,4,4,4,5,'a','a'];

let x = arr.filter((item, index) => arr.indexOf(item) === index);
let z = arr.filter((item, index) => arr.indexOf(item) !== index);

console.log(arr)
console.log(x)
console.log(z)


// let x =[];
// arr.forEach(function(z){
//     if(x.indexOf(z)===-1){
//         x.push(z)
//     }
// });
// console.log(x)

// let x=[...new Set(arr)]; //krknvox tver@ hanume

// console.log(arr)
// console.log(x);

