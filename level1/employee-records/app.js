const readLine = require("readline-sync")

const employees = []

function Employee(name, job, salary, status = "Fulltime"){
    this.name = name;
    this.job = job;
    this.salary = salary;
    this.status = status
    this.printEmployeeForm = function (){
        return this.name + " is employed at " + this.job
    }
}
var newEm  = new Employee( "mike", "CO", 75000, "Part Time")
newEm.status= "Full time"
var newEm1 = new Employee( "ruben", "electrician", 135000, "Full Time")
var newEm2 = new Employee( "daryl", "manager", 90000, "Contract")

// console.log(printEmployeeForm)
// console.log(printEmployeeForm1)
// console.log(printEmployeeForm2)

employees.push(newEm, newEm1, newEm2)

console.log(employees)