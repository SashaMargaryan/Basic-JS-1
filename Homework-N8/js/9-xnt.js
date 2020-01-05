let a = [
    [1,2,3,4],
    [4,5,6,7],
    [8,9,1,2],
    [3,4,5,6]
];
let n = a.length;
console.log(a)
let x=0;

for(let i = 0 ; i < n ;i++){  // glxavor ankyunagchi payman@
    x=x+a[i][i]
    // for(let j = 0 ; j < n ;j++){  //glxanor ankyunagchi paymanne
    //     if(i==j){
    //         x = x+ a[i][j]
    //         // console.log(x)
    //     }
    // }
};
console.log(x); //gumarme glxavor ankyunagchi arjeqner@ 

let z=0;

for(let i = 0 ; i < n ;i++){    //gumarum enq ojandak ankyunagchi vrayi tver@
    z = z + a[n-i-1][i]; // ojandak ankyunagchi paymanne
    
};
console.log(z);


let s = x + z;

console.log(s);

