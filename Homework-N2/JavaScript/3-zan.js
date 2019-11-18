let a = [
    {
        name:'Jon'
    },
    {
        name:'Nik'
    },
    {
        name:'janet'
    },
];

for (let i=0; i<a.length; i++){ // avelachume indexsov
    a[0].age=25
    a[1].age=18
    a[2].age=38
};

for (let j=0; j<a.length;j++){ // jnjume indexsov
    delete a[0].age
    
};