let a = '1234';
let x = '';
let s = '1234';
let r = '';

for(let i = 0; i < a.length; i++){ // texerov poxume
    if(i % 2 != 0){
        x += a[i] + a[i-1] 
    };
};

for(var i = 0; i < s.length; i+=2){ // nuyn@
    r += s[i+1] + s[i];
  };

console.log(x);
console.log(r);
