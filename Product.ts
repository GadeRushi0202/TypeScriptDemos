class Product{
    pcode:number;
    name:string;
    price:number;
    disprice:number;
    constructor(pcode,name,price){
        this.pcode=pcode;
        this.name=name;
        this.price=price;
    }

    calculate(){
       
       this.disprice=(this.price*10)-this.price;
    }

    print(){
        console.log(this.disprice);
    }
}

const p = new Product(2077,"Laptop",45000);
p.calculate();
p.print();