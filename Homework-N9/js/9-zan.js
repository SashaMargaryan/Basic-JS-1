let a = [1,2,3,4,5,6];

for (let i = 0; i < a.length; i++){
    if(i%2 != 0){
        let x = a[i-1];
        a[i-1] = a[i];
        a[i] = x;
    };
};
console.log(a)