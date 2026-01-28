import {Employee} from '../interface/Employee';

class PartTimeEmployee implements Employee {
    id: number;
    name: string;
    salary: number;
    hoursWorked: number;

    constructor(id: number, name: string, salary: number, hoursWorked: number) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.hoursWorked = hoursWorked;
    }

    getSalary(): number {
        return this.salary * this.hoursWorked;
    }
}

export {PartTimeEmployee};