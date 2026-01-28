abstract class Employee {
    protected id: number;
    protected name: string;
    protected salary: number;

    constructor(id: number, name: string, salary: number) {
        this.id = id;
        this.name = name;

        // Validate: salary must be > 0
        if (salary > 0) {
            this.salary = salary;
        } else {
            console.log("Error: Salary must be greater than 0. Set to default 1.");
            this.salary = 1;
        }
    }

    // Getter methods
    getId(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    getSalary(): number {
        return this.salary;
    }

    // Setter methods
    setName(name: string): void {
        this.name = name;
    }

    setSalary(salary: number): void {
        // Validate: salary must be > 0
        if (salary > 0) {
            this.salary = salary;
        } else {
            console.log("Error: Salary must be greater than 0. Not updated.");
        }
    }

    // Abstract method - child classes must implement
    abstract calculateSalary(): number;
}

export { Employee };