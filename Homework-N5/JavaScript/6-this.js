function printArgs() {
    arguments.join = [].join; 
  
    var argStr = arguments.join(';'); 
  
    alert( argStr ); 
  }
  
  printArgs(1, 2, 3);