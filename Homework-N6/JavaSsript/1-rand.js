
function severalRandom(min, max, num) { //sarqume masiv 
    
        var i, arr = [], res = [],n=[];
    
        for (i = min; i <= max; i++ ) arr.push(i);
    
        for (i = 0; i < num; i++) res.push(arr.splice(Math.floor(Math.random() * (arr.length)), 1)[0]);

        console.log(res);

        for(let i=0;i< res.length ;i++){
            if(res[i] > 0 ){
                n.push(res[i]*2) //ev bazmapatkel 2 ov
            }
        }
    
        return n;
    };
    
console.log(severalRandom(-50, 40, 5));
   
    
