let a = [
    [1,'a',3,4],
    [4,5,6,7],
    [8,9,1,2],
    [3,4,5,6]
];
console.log(a);

let z=[];
let x=[];
let y=[];
let f=[];
let h=[];

x=a[0]
y=a[1]
f=a[2]
h=a[3]

x=x.join().replace(/1/g,5).split(',').map(str=>+str)    
y=y.join('').replace(/4/g,5).split('').map(str=>+str)
f=f.join('').replace(/8/g,5).split('').map(str=>+str)
h=h.join('').replace(/3/g,5).split('').map(str=>+str)

z.push(x)
z.push(y)
z.push(f)
z.push(h)
console.log(z)



