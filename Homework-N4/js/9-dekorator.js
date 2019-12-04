function foo_m(foo_n ,age ,ret){
    if(ret == foo_n(age)){
        return true
    }else{
        return false
    }
   
};

function def_1(a){
    var x=0;
    for (let i=0; i< a.length ;i++){
        var x =x+ a[i]
    }
    console.log(x);
};

a=[1,2,3]
console.log(foo_m(def_1,a,6));
