let a = [
    [1,2,3,4],
    [4,5,6,7],
    [8,9,1,2],
    [3,4,5,6]
];
let n = a.length

for(let i = 0 ; i < n ;i++){ 
    for(let j = 0 ; j < i ;j++){ // tpume glxavor ankynagchich verev inkach tver@
        let x = a[j][i]
        console.log(x)
    }
}