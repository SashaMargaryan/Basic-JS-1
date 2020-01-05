let x =setInterval(() => {

    console.log(1);
    
},1000);

setTimeout(() => {
    clearInterval(x)  // 1 varkyan@ mek tpume 1 ev 5 varkyan heto kangnume
    
}, 5000);

// let x =[1,2,3,4,5,6,7,8,9,10,11,12];
// let z='f'
// for (let i=2;i<x.length;i=i+3){ //  2 ich sksach amen 3 sarqum e f
//     x[i]=z

// }
// console.log(x)