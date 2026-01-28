interface PartTimeEmployee {
    id: number;
    name: string;
    salary: number;
    hoursWorked: number;
}

const partTime = {
    id: 2,
    name: "Binh",
    salary: 20,
    hoursWorked: 40
}

const newPartTime: PartTimeEmployee = {
    ...partTime,
    hoursWorked: 45
};

console.log(partTime);

console.log(newPartTime);

// { id: 2, name: 'Binh', salary: 20, hoursWorked: 40 }
// { id: 2, name: 'Binh', salary: 20, hoursWorked: 45 }

