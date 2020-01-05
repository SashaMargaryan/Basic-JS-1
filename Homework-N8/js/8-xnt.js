let a = [
    [1,2,3,4],
    [4,5,6,7],
    [8,9,1,2],
    [3,4,5,6]
];
let n = a.length
let x=0;
for(let i = 0 ; i < n ;i++){ 
    for(let j = i ; j < n ;j++){ //tpume glxavor ankyunagchov verev

             x=x+a[i][j]       //gumarum enq nra arjeqner@
            console.log(a[i][j]) 
        
        
    }
}
console.log(x) 