let a = [1,2,3,4,5,6,7,8,9];

let ar=a.length

for (let i=0; i < ar ;i++ ){
    if(a[i]%2==0){
        a[i]=a[i]*2
    }else if(a[i]%2 !=0){
        a[i]=a[i]+10
    };
};
let z=[];
for (let s= 0; s<=ar ; s++){ //avelachnum enq nor zangvachi mej bolor zuyg tver@s
    if(a[s]%2==0){
        z.push(a[s]);
    }

    
}