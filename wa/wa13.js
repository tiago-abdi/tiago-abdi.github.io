// 1
const employees = [
    { firstName: 'Sam', department: 'Tech', designation: 'Manager', salary: 40000, raiseEligible: true },
    { firstName: 'Mary', department: 'Finance', designation: 'Trainee', salary: 18500, raiseEligible: true },
    { firstName: 'Bill', department: 'HR', designation: 'Executive', salary: 21200, raiseEligible: false }
];

// 2
const company = {
    companyName: 'Tech Stars',
    website: 'www.techstars.site',
    employees: employees
};

// 3
const newEmployee = { firstName: 'Anna', department: 'Tech', designation: 'Executive', salary: 25600, raiseEligible: false };
company.employees.push(newEmployee);

console.log('Problem 3:', company);

// 4
const totalSalary = company.employees.reduce((total, employee) => total + employee.salary, 0);

console.log('Problem 4: Total Salary for all employees is', totalSalary);

// 5
function giveRaiseAndUpdateEligibility() {
    company.employees.forEach(employee => {
        if (employee.raiseEligible) {
            employee.salary *= 1.1; 
            employee.raiseEligible = false; 
        }
    });
}

giveRaiseAndUpdateEligibility();
console.log('Problem 5:', company);

// 6
const employeesWorkingFromHome = ['Anna', 'Sam'];
company.employees.forEach(employee => {
    employee.wfh = employeesWorkingFromHome.includes(employee.firstName);
});

console.log('Problem 6:', company);
