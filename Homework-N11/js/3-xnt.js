console.log("1234".match(/(..?)/g).reduce((p, c) => {
    p += c[1] + c[0];
    return p;
}, ''));