function m(a,a1,a2){
    
    let b = `<p class="${a1}">${a}</p>`;
    document.querySelector(a2).innerHTML=b;
};
m('hya','red' ,'.d');
m('hyaa','orange' ,'.d2');


class A{
    constructor(a , c ,d){
        this.a=a;
        this.c=c;
        this.d=d;
    }
    met(){
        document.querySelector(this.d).innerHTML = `<p class="${this.c}">${this.a}</p>`;
    }
};
class A2 extends A{
    constructor(a,c,d,ic){
        super(a,c,d,ic);
        this.ic=ic;
    }
    met2(){
        document.querySelector(this.d).innerHTML = `<p class="${this.c}">${this.ic} ${this.a}</p>`;
        
    }
    met3(){
        if( document.querySelector(this.d).innerHTML == `<p class="${this.c}">${this.ic} ${this.a}</p>`){
            document.querySelector(this.d).innerHTML = `<p class="${this.c}"> ${this.a}</p>`
        }else{
            document.querySelector(this.d).innerHTML = `<p class="${this.c}">${this.ic} ${this.a}</p>`;
        }
    }
}

let j = '<i class="fas fa-air-freshener"></i>'
let my = new A('Ay','s', '.d');

my.met()

let my2 = new A2('Ay','red', '.d', j );

my2.met2()

