// class Employee {
//      id: number;
//      name: string;
//      basicSalary: number;
//      hra: number;
//      da: number;
//      ta: number;
//      pf: number;
//      grossSalary: number;
  
//     constructor(id: number, name: string, basicSalary: number) {
//       this.id = id;
//       this.name = name;
//       this.basicSalary = basicSalary;
//       this.calculateAllowances();
//       this.calculateGrossSalary();
//     }
  
//     calculateAllowances() {
//       this.hra = (20 / 100) * this.basicSalary;
//       this.da = (50 / 100) * this.basicSalary;
//       this.ta = (10 / 100) * this.basicSalary;
//       this.pf = (12 / 100) * this.basicSalary;
//     }
  
//      calculateGrossSalary() {
//       this.grossSalary = this.basicSalary + this.hra + this.da + this.ta - this.pf;
//     }
  
//     displayDetails() {
//       console.log(`Employee ID: ${this.id}`);
//       console.log(`Employee Name: ${this.name}`);
//       console.log(`Basic Salary: ${this.basicSalary}`);
//       console.log(`HRA: ${this.hra}`);
//       console.log(`DA: ${this.da}`);
//       console.log(`TA: ${this.ta}`);
//       console.log(`PF: ${this.pf}`);
//       console.log(`Gross Salary: ${this.grossSalary}`);
//     }
//   }
  
//   const employee1 = new Employee(101, 'Rushi', 45000);
//   employee1.displayDetails();
class Employee{
    id:Number;
    name:string;
    salary:number;
    hra:number;
    da:number;
    ta:number;
    pf:number;
    gross:number;
    constructor(id,name,salary){
        this.id=id;
        this.name=name;
        this.salary=salary;
    }
    calculate(){
        this.hra=this.salary*0.34;
        this.da=this.salary*0.31;
        this.ta=this.salary*0.56;
        this.pf=this.salary*0.5;
        this.gross=(this.hra+this.da+this.ta+this.salary)-this.pf;
    }
    print(){
        console.log(this.gross);
    }
}
const Emp = new Employee(24,"Rushi",45000)
Emp.calculate();
Emp.print();