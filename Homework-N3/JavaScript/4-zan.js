function zang(a){
    
    ar2=[];
    ar3=[];
    ar4=[];

    for (let i = 0 ;i < a.length ;i++){
        if( i%2 !=0 && i != 0){
            ar2.push(a[i]);
        }else{
            ar3.push(a[i]);
        };
    };

    for (let i=0 ;i< Math.max(ar3.length , ar2.length);i++ ){
        ar4 = ar4.concat(ar2[i]).concat(ar3[i]);
    };
    console.log(ar4);
    return ar4
};
ar1=[
    {
        name:'mik'
    },
    {
        age:15
    },
    {
        lastname:'dik'
    },
    {
        id:01
    }
];
zang(ar1)