let a=[1,2,3,4,5,6];
let a1=[];
let a2=[];
let a3=[];

for (let i=0;i<a.length;i++){
    if(i%2 !=0 && i!=0){
        a1.push(a[i]);
    }else{
        a2.push(a[i]);
    };
};

let s = Math.max(a1.length, a2.length)*2;
a3.push(a1);
a3.push(a2);
let r = [];

for(i=0;i<s;i++){
    let v =  a3[i%2][Math.floor(i/2)];
    if(v != undefined) r.push(v);    
};
console.log(r)