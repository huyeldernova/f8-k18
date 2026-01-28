import {Employee} from '../interface/Employee'

class FullTimeEmployee implements Employee {
    id: number;
    name: string;
    salary: number;


    constructor(id: number, name: string, salary: number) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }


    getSalary(): number {
        return this.salary;
    }
}

export {FullTimeEmployee};
