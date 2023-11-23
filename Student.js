var Student1 = /** @class */ (function () {
    function Student1(rollno, name, math, phy, chem) {
        this.rollno = rollno;
        this.name = name;
        this.math = math;
        this.phy = phy;
        this.chem = chem;
    }
    Student1.prototype.calculate = function () {
        this.sum = this.chem + this.math + this.phy;
        this.per = this.sum / 3;
    };
    Student1.prototype.print = function () {
        console.log(this.per);
    };
    return Student1;
}());
var stud = new Student(1, "Rushikesh", 50, 50, 50);
stud.calculate();
stud.print();
