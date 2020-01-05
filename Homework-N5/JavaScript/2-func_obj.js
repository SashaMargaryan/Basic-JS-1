
function mes(){
    alert(`${this.name} ${this.age}`)
}

let obj1={
    name:"Mik",
    age:10
};

let obj2={
    name:'Bill',
    age:20
};

let obj3={
    name:'Gor',
    age:15
}

mes.call(obj2);