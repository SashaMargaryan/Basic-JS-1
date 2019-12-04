function foo(a,b){
    console.log(a); //callback function
    return  b()
};
foo(2,function(){
    console.log(10*3)
})