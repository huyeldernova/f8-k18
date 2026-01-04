//	You are managing a class list. Follow the steps below to see how JavaScript handles arrays in memory.
//		Step 1: Create an array named classA containing the names: "An", "Binh", "Chi".
//		Step 2: Create a variable named classB and assign it the value of classA (classB = classA).
//		Step 3: Change the first element of classB to "An Updated".
//		Step 4: Use console.log(classA) to check the original array.
//	Why was the name "An" in classA changed even though you only modified classB? Explain using the concept of Memory Addresses (e.g., 0x01).

const classA = ["An", "Binh", "Chi"];

const classB = classA;

classB[0] = "An Updated";


console.log(classA);

//When you assign classB = classA, JavaScript does NOT create a new array.
//Instead, classB references the same memory address as classA (for example: 0x01).
//
//When you modify classB[0], you are changing the data stored at memory address 0x01.
//Since classA also points to 0x01, classA is changed as well.


//	Follow the JS code
//		let x = "10";
//		let y = 2;
//		console.log(x + y);      // Result 1
//		console.log(x - y);      // Result 2
//		console.log(x * "3");    // Result 3
//		console.log("Hello" - y);// Result 4
//	Requirements: 1. Explain why the addition (+) results in "102" while the subtraction (-) results in 8. 2. What does the result NaN in the last calculation mean? Why did it happen?
let x = "10";
let y = 2;

console.log(x + y);
console.log(x - y);
console.log(x * "3");
console.log("Hello" - y);

//1. Why does + give "102" but - gives 8?
//
//The addition operator (+) in JavaScript has two functions:
//
//Numeric addition
//
//String concatenation
//
//When at least one operand is a string, JavaScript prioritizes string concatenation.
//
//"10" + 2 → JavaScript converts 2 to "2" → "10" + "2" = "102"
//
//The subtraction operator (-) works only with numbers.
//
//JavaScript automatically converts strings to numbers.
//
//"10" - 2 → 10 - 2 = 8
//
//2. What is NaN and why does it appear?
//
//NaN stands for "Not a Number".
//
//"Hello" - 2: JavaScript tries to convert "Hello" into a number but fails.
//The result of the operation is not a valid number → NaN

//	Task 3:
//		Write a code snippet to check if a student is eligible to join the Programming Club.
//			Entry Conditions:
//				The student must be 10 years or older AND have a Math score above 7.
//				OR, if they are a "VIP Member", they can enter regardless of age or score.
//			Coding Requirements:
//				Declare 3 variables: age, mathScore, isVIP.
//				Create a variable canEnter that uses logic operators (&&, ||) to calculate the result. Log the value to terminal screen
//			Test your code with these cases:
//				age = 9, mathScore = 10, isVIP = false -> (Result must be false)
//				age = 9, mathScore = 10, isVIP = true -> (Result must be true)
//			Logic Question: Is !(age < 10) mathematically the same as age >= 10?


let age = 9;
let mathScore = 10;
let isVIP = false;

const canEnter = (age >= 10 && mathScore > 7) || isVIP;

console.log("Kết quả:", canEnter);

// Test case 1
age = 9;
mathScore = 10;
isVIP = false;
console.log("Test 1:", (age >= 10 && mathScore > 7) || isVIP);

// Test case 2
age = 9;
mathScore = 10;
isVIP = true;
console.log("Test 2:", (age >= 10 && mathScore > 7) || isVIP);


const laptop = {
  brand: "Dell",
  price: 1000,
  spec: { ram: "8GB", ssd: "256GB" }
};

const myLaptop = laptop;
myLaptop.brand = "Apple";

const mySpec = laptop.spec;
mySpec.ram = "16GB";

console.log(laptop.brand);
console.log(laptop.spec.ram);


//
//┌─────────── Stack ───────────┐
//│ laptop   ───► 0x100         │
//│ myLaptop ───► 0x100 (cùng!) │
//│ mySpec   ───► 0x200 (cùng!) │
//└─────────────────────────────┘
//         │
//         ▼
//┌──── Heap 0x100 ───────┤
//│ {                     │
//│   brand: "Apple",     │ ← myLaptop.brand thay đổi
//│   price: 1000,        │
//│   spec: ───► 0x200    │
//│ }                     │
//└───────────────────────┘
//                 │
//                 ▼
//        ┌──── Heap 0x200 ─────┐
//        │ {                   │
//        │   ram: "16GB",      │ ← mySpec.ram thay đổi
//        │   ssd: "256GB"      │
//        │ }                   │
//        └─────────────────────┘

//myLaptop = laptop → myLaptop points to the same object as laptop (memory address 0x100)
//
//myLaptop.brand = "Apple" → Modifies the property at 0x100 → laptop.brand is also changed
//
//mySpec = laptop.spec → mySpec points to the same nested object (memory address 0x200)
//
//mySpec.ram = "16GB" → Modifies the data at 0x200 → laptop.spec.ram is also changed

