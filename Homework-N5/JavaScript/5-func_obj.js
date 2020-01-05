let a=[
    {
        name:'John',
        age:10
    },
    {
        name:'Mike',
        age:20
    },
    {
        name:'Janet',
        age:30
    },
];

function foo(){
    alert(`${this.name} ${this.age}`) //functian texadrum enq zangvachi mej
    
};

for (let i=0; i <a.length ;i++){  // functian texadrum enq zangvachi mej
    a[1].func=foo
}
for(let i=0; i<a.length ;i++){
    a[1].func()
    break; //vorpisi 1 angamich durs ga
};

foo.call(a[0]);
// foo.call(a[1]);
// foo.call(a[2]);