let a=[8,2,33,4,5,6,9]
let x=[0];
let z=[0];

for (let i=0;i<a.length;i++){ //gtnum enq mechagyn@
    if(a[i]>x){
        x=a[i]
    }
};

for(let i=0;i<a.length;i++){ // gtnumenq mechaguynich poqr@
    if(a[i]!=x && a[i]>z){
        z=a[i]
    }
}

console.log(x)
console.log(z)
