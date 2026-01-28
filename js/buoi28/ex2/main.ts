import { Employee } from './interface/Employee';
import { FullTimeEmployee } from './models/FullTimeEmployee';
import { PartTimeEmployee } from './models/PartTimeEmployee';
import { calculateTotalSalary } from './utils/calculateSalary';

const fullTimeEmp = new FullTimeEmployee(1, "Nguyen Van A", 10000000);
const partTimeEmp = new PartTimeEmployee(2, "Tran Thi B", 50000, 160);

const employees: Employee[] = [fullTimeEmp, partTimeEmp];

console.log(fullTimeEmp.name + ": " + fullTimeEmp.getSalary() + " VND");
console.log(partTimeEmp.name + ": " + partTimeEmp.getSalary() + " VND");

const total = calculateTotalSalary(employees);
console.log("Tổng: " + total + " VND");