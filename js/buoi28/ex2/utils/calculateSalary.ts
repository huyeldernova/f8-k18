import{Employee} from "../interface/Employee";

export function calculateTotalSalary(employees: Employee[]): number {
    let total = 0;
    for (let i = 0; i < employees.length; i++) {
        total += employees[i].getSalary();
    }
    return total;
}



