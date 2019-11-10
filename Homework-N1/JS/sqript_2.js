var x=prompt("hellos");

while (true){


try { 
    if(x == "") throw " datarke" ;
    if(isNaN(x))throw "tiv" ;
    x = Number(x);
    if(x <1) throw "0 ich barchr" ;
    if(x > 31) throw " minchev 30" ;
    
}catch(err){
    x=prompt("nermuchel  "  +err) ;
    continue;
  
}

if (x==1 || x==8 ||x==15 ||x==22 || x==29){
    alert("Երկուշաբթի");
    
        
}else if(x==2 || x==9 || x==16 || x==23 || x==30){
    alert(" Երեքշաբթի");

}else if(x==3 || x==10 || x==17 || x==14){
    alert(" Չորեքշաբթի");

}else if(x==4 || x==11 || x==18 || x==25){
    alert("Հինգշաբթի")

}else if(x==5 || x==12 || x==19 || x==26){
    alert(" Ուրբաթ");

}else if(x==6 || x==13 || x==20 || x==27){
    alert(' Շաբաթ');

}else if(x==7 || x==14 || x==21 || x==21){
    alert("Կիրակի")
}
 break;
}