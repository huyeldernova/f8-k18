import { Employee } from './Employee';
import { Developer } from './Developer';
import { Manager } from './Manager';

console.log("=== EMPLOYEE MANAGEMENT SYSTEM ===\n");

// ===== TEST DEVELOPER =====
console.log("--- DEVELOPER ---");

const dev = new Developer(1, "Nguyen Van A", 10000000, 20);

console.log("ID: " + dev.getId());
console.log("Name: " + dev.getName());
console.log("Base Salary: " + dev.getSalary());
console.log("Overtime Hours: " + dev.getOvertimeHours());

const devSalary = dev.calculateSalary();
console.log("Total Salary: " + devSalary);
console.log("(10,000,000 + 20 * 50,000 = " + devSalary + ")");

dev.setOvertimeHours(30);
console.log("\nAfter update overtime to 30 hours:");
console.log("Total Salary: " + dev.calculateSalary());

console.log("\n");

// ===== TEST MANAGER =====
console.log("--- MANAGER ---");

const manager = new Manager(2, "Tran Thi B", 15000000, 5);

console.log("ID: " + manager.getId());
console.log("Name: " + manager.getName());
console.log("Base Salary: " + manager.getSalary());
console.log("Team Size: " + manager.getTeamSize());

const managerSalary = manager.calculateSalary();
console.log("Total Salary: " + managerSalary);
console.log("(15,000,000 + 5 * 200,000 = " + managerSalary + ")");

manager.setTeamSize(10);
console.log("\nAfter update team size to 10:");
console.log("Total Salary: " + manager.calculateSalary());

console.log("\n");


console.log("--- TOTAL SALARY ---");

const employees: Employee[] = [dev, manager];

let totalSalary = 0;
for (let i = 0; i < employees.length; i++) {
    const emp = employees[i];
    const salary = emp.calculateSalary();
    totalSalary += salary;
    console.log(emp.getName() + ": " + salary + " VND");
}

console.log("\nTotal Salary: " + totalSalary + " VND");

console.log("\n");

// ===== TEST VALIDATION =====
console.log("--- TEST VALIDATION ---");

// Test 1: Create developer with negative salary
console.log("Test 1: Create developer with negative salary (-1000):");
const invalidDev1 = new Developer(3, "Invalid Dev 1", -1000, 10);
console.log("Salary: " + invalidDev1.getSalary());
console.log("Total Salary: " + invalidDev1.calculateSalary());
console.log();

// Test 2: Create developer with negative overtime
console.log("Test 2: Create developer with negative overtime (-10):");
const invalidDev2 = new Developer(4, "Invalid Dev 2", 8000000, -10);
console.log("Overtime Hours: " + invalidDev2.getOvertimeHours());
console.log("Total Salary: " + invalidDev2.calculateSalary());
console.log();

// Test 3: Try to set negative overtime
console.log("Test 3: Try to set negative overtime (-20):");
dev.setOvertimeHours(-20);
console.log("Overtime Hours: " + dev.getOvertimeHours());
console.log();

// Test 4: Try to set negative salary
console.log("Test 4: Try to set negative salary (-5000):");
dev.setSalary(-5000);
console.log("Salary: " + dev.getSalary());
console.log();

// Test 5: Create manager with negative team size
console.log("Test 5: Create manager with negative team size (-5):");
const invalidMgr = new Manager(5, "Invalid Manager", 15000000, -5);
console.log("Team Size: " + invalidMgr.getTeamSize());
console.log("Total Salary: " + invalidMgr.calculateSalary());
