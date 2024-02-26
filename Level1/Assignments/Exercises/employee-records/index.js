var employees = []

function Employee (name, title, salary, status = "Full Time"){
    this.name = name;
    this.Jobtitle = title;
    this.Salary = salary;
    this.Status = status;
    this.printEmployeeForm = function (){
        console.log("Name: " + name + ", " + "Job Title: " + title + ", " + "Salary: " + salary + ", " + "Status: " + status)
    }
    employees.push(name + ", " + title + ", " +  salary +  ", " + status)
}


var employee1 = new Employee("Dakota", "Web Developer", "$40/hour", "Contract")
var employee2 = new Employee("Tom", "Sales Manager", "$45/hour", "Full Time")
var employee3 = new Employee("Stephen", "Project assistant", "$20/hour","Part Time" )

console.log(employees)
employee1.printEmployeeForm()
employee2.printEmployeeForm()
employee3.printEmployeeForm()
