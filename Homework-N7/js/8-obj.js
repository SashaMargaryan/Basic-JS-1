let a = [
    {
        name:"Doel",
        age:15,
        id:01
    },
    {
        name:"Mik",
        age:18,
        id:02 
    },
    {
        name:"Dik",
        age:20,
        id:03
    }
];

function func(a, id ,name,x){ // 
    for(let i in a){  // i anchnume key eri vrayov
        if(a[i].id == id){
            a[i].name = name;
            a[i].id =x;
            break;
        }
    }
};

func(a, 01 , 'James',10);
console.log(a);