let a = ['a','a', 'c', 'c', 'b'];
let a1 = a.reduce(
    (d, c) => (d.indexOf(c) !== -1) ? 
    d : [...d, c],
    []
);
console.log(a1);