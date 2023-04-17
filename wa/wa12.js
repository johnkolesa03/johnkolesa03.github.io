// Problem 1

let employees = [
  {"firstName":"Sam", 
    "department":"Tech",
    "designation":"Manager",
    "salary": 40000,
    "raiseEligible":"true"
    },
  { "firstName":"Mary" , 
    "department":"Finance",
    "designation":"Trainee",
    "salary": 18500,
    "raiseEligible":"true"
    },
  {"firstName":"Bill" , 
    "department":"HR",
    "designation":"Executive",
    "salary": 21200,
    "raiseEligible":"false"
  }
]

console.log("Employees");
console.log(employees);

// Problem 2

let company = {
  "companyName":"Tech Stars",
  "website":"www.techstars.site",
  "employees": employees
}

console.log("Company");
console.log(company);

// Problem 3

let newHire = {
  "firstName":"Anna" ,
  "department":"Tech",
  "designation":"Executive",
  "salary": 25600,
  "raiseEligible":"false"
}

employees.push(newHire);
console.log("New Hire");
console.log(employees);

// Problem 4

let totalSalary = 0;
const employed = company.employees;

for (const staff of employed) {
  totalSalary += staff.salary;
}

console.log("Company Total Salary: "+totalSalary);

// Problem 5

function raise(employed){
  for (const employee of employed){
    if (employee.raiseEligible === "true"){
      //console.log(employee.salary);
      employee.salary = employee.salary * 1.1;
      //console.log(employee.salary);
      employee.raiseEligible = "false";
    }
  }
}

raise(employed);
for (const employee of employed){
  console.log(employee.firstName + " salary: " + employee.salary);
}

// Problem 6

let wfh = ['Anna', 'Sam'];

function workFromHome(employed){
  for (const employee of employed){
    if (wfh.includes(employee.firstName)){
      employee.wfh = "true";
    } else {
      employee.wfh = "false";
    }
  }
}

workFromHome(employed);
for (const employee of employed){
  console.log(employee.firstName + " is working from home: " + employee.wfh);

}