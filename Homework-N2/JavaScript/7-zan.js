let a= ['a' ,'b' ,'c' ,'d','f','f','f'];

let ar=a.length;

for(let i=0;i <ar ;i++){ // jnjume bolor indexsov kent tarer@
    a.splice(i-1,1);
};
let j=0;
for(let i=0;i<ar;i++){
    if(a[i]=='f'){
         j=j+1
    }
}