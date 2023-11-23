var Product = /** @class */ (function () {
    function Product(pcode, name, price) {
        this.pcode = pcode;
        this.name = name;
        this.price = price;
    }
    Product.prototype.calculate = function () {
        this.disprice = (this.price * 10) - this.price;
    };
    Product.prototype.print = function () {
        console.log(this.disprice);
    };
    return Product;
}());
var p = new Product(2077, "Laptop", 45000);
p.calculate();
p.print();
