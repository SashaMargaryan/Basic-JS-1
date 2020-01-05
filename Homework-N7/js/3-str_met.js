let a =['a','b','a','c','a'];

let x = /a/gi;

a = a.join(' ').replace(x , 'Hello').split(' ');
//ete uzumenq a poxenq barov join ev split dnum enq 1 probelov 

console.log(a);

