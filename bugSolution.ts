function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number | string, b: number | string): number {
  const numA = typeof a === 'string' ? parseFloat(a) : a;
  const numB = typeof b === 'string' ? parseFloat(b) : b;
  if (isNaN(numA) || isNaN(numB)) {
    return 0; // or throw an error: throw new Error('Invalid input');
  }
  return numA + numB; 
}

let result1 = add(10, 20); // Correct usage
console.log(result1); // Output: 30

let result2 = addSafe(10, "20"); // Safe usage with type checking
console.log(result2); // Output: 30

let result3 = addSafe("abc", 20); //Handles string input
console.log(result3); // Output: 0 (or throws error in alternative solution) 
