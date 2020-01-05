

let a = ['aabbaa' ,'asd','ssss','hello'];


a.forEach(function(str){
    let rev = '';

    for(let i = str.length - 1 ;i >=0 ;i--){
        rev +=  str[i];
    };
    
    if (rev === str){
        console.log(`${str} polindrome`);
    }
});
