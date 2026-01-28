import { Employee } from './Employee';

class Developer extends Employee {
    private overtimeHours: number;

    constructor(id: number, name: string, salary: number, overtimeHours: number) {
        super(id, name, salary);

        // Validate: overtimeHours must be >= 0
        if (overtimeHours >= 0) {
            this.overtimeHours = overtimeHours;
        } else {
            console.log("Error: Overtime hours cannot be negative. Set to 0.");
            this.overtimeHours = 0;
        }
    }

    getOvertimeHours(): number {
        return this.overtimeHours;
    }

    setOvertimeHours(hours: number): void {
        // Validate: hours must be >= 0
        if (hours >= 0) {
            this.overtimeHours = hours;
        } else {
            console.log("Error: Overtime hours cannot be negative. Not updated.");
        }
    }

    // Calculate salary: base salary + overtime hours * 50,000
    calculateSalary(): number {
        return this.salary + this.overtimeHours * 50000;
    }
}

export { Developer };