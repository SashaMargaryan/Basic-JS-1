let num = [1,2,3];

let str = [4,5,6];
let result = [];

function sum(a,b) {
  

  for (let i = 0; i < Math.max(b.length, a.length); i++){
   result = result.concat(a[i]).concat(b[i])
  }

 console.log(result)
 return result;
} 

sum(num, str); 