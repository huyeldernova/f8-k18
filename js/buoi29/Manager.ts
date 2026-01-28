import { Employee } from './Employee';

class Manager extends Employee {
    private teamSize: number;

    constructor(id: number, name: string, salary: number, teamSize: number) {
        super(id, name, salary);

        // Validate: teamSize must be >= 0
        if (teamSize >= 0) {
            this.teamSize = teamSize;
        } else {
            console.log("Error: Team size cannot be negative. Set to 0.");
            this.teamSize = 0;
        }
    }

    getTeamSize(): number {
        return this.teamSize;
    }

    setTeamSize(size: number): void {
        // Validate: size must be >= 0
        if (size >= 0) {
            this.teamSize = size;
        } else {
            console.log("Error: Team size cannot be negative. Not updated.");
        }
    }

    // Calculate salary: base salary + team size * 200,000
    calculateSalary(): number {
        return this.salary + this.teamSize * 200000;
    }
}

export { Manager };