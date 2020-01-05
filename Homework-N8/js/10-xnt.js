// let arr = new Array();
// for (let i=0; i < 5; i++) {
//   arr[i] = new Array();
//   for (let j=0; j < 5; j++){
//     arr[i][j]=Math.floor(Math.random() * 10 + 1);
     
//   }
// }
// console.log(arr)

let arr = [],
            min = -10,
            max = 99;
        for (let i = 0; i < 4; i++) {
            arr[i] = [];
            for (let j = 0; j < 4; j++) {
                arr[i][j] = Math.floor(Math.random() * (max - min + 1) + min);
            }
        }
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                document.write(arr[i][j] + " ");
                console.log(arr[i][j]); 
            }
            document.write("<br>");
        };
       