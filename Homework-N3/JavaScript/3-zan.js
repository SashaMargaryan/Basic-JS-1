function zan(a){
    
    for (let i=0;i<a.length;i++){
        if(i%2 !=0 && i!=0){
            a1.push(a[i]);
        }else{
            a2.push(a[i]);
        };
    };

    for (let i = 0; i < Math.max(a2.length, a1.length); i++){
        x = x.concat(a1[i]).concat(a2[i])
    };
    console.log(x);
    return x
};
let ar=[1,2,3,4];
let a1=[];
let a2=[];
let x=[];

zan(ar);