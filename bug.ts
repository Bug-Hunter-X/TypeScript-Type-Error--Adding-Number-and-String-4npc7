function add(a: number, b: number): number {
  return a + b;
}

let result = add(10, "20"); // Type error here
console.log(result);