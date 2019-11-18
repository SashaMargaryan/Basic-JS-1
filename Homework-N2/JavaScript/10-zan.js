let a=[1,2,3,4];

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

for(let j=0;j<a1.length;j++){
    a3.push(a1[j]);
}
for(let j=0;j<a1.length;j++){
    a3.push(a2[j]);
}





