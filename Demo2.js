var Student = /** @class */ (function () {
    function Student(rollno, name) {
        this.rollno = -rollno;
        this.name = name;
    }
    return Student;
}());
var s = new Student(1, "Rushi");
console.log("rollno:" + s.rollno + " name :" + s.name);
