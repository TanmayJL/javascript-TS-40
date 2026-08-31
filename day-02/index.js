console.log("Day 02");

// Variables: Variables are used to store data in JavaScript

// - `var`: Function-scoped, can be redeclared (not recommended)
// - `let`: Block-scoped, can be reassigned
// - `const`: Block-scoped, **cannot** be reassigned

const address = "Bangalore";

console.log(address);

// address = "USA";

// console.log(address);

let age = 12;

age = 52;

let name, salary, department;

salary = null;

/*
- **Primitive Data Types:**
    - `String` - Text values ("Hello")
    - `Number` - Numeric values (25, 3.14)
    - `Boolean` - True/False (true, false)
    - `Undefined` - A variable declared but not assigned (let x;)
    - `Null` - Represents "nothing" (let y = null;)
    - `BigInt` - Large numbers (BigInt(12345678901234567890))
    - `Symbol` - Unique identifiers (Symbol("id"))
- **Non-Primitive (Reference) Data Types:**
    - `Object` - Collection of key-value pairs
    - `Array` - Ordered list of values
    - `Function` - Code that can be executed
  */

    let student = {
      name: "Alice",
      age: 22,
      isEnrolled: true
    };
    console.log(student.name); // Output: Alice   

    let arr = [1,2,4,5]
    
    
let a = 10;
let b = a; // 10
b = 20; // 20
console.log(a); // 10 (original remains unchanged)

let student2 = {
  name: "Tanmay",
  age: 33,
  favoriteLanguage: "JavaScript",
  isEnrolled: true
}

student2.age = 24; // Modifying the age property of the student2 object
console.log(student2.age); // Output: 24

const student3 = {
  name: "John",
  age: 30,
  favoriteLanguage: "Python",
  isEnrolled: false
};

if (student2.isEnrolled) {
  try {
    student3.favoriteLanguage = "Java"; // Modifying the favoriteLanguage property of the student3 object
    console.log(student3.favoriteLanguage); // Output: Java
    student3 = { name: "Jane", age: 28, favoriteLanguage: "C++", isEnrolled: true }; // Attempting to reassign the student3 object
  } catch (error) {
    console.error("Error:", error.message);
  } finally {
    console.log(student3); // Output: { name: "John", age: 30, favoriteLanguage: "Java", isEnrolled: false }
  }
}