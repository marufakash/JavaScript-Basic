// Area of triangle - (base * height * 0.5)

let base = parseFloat(prompt("Enter the base of triangle : "));
let height = parseFloat(prompt("Enter the height of triangle : "));

let area = (0.5 * base * height).toFixed(3);

console.log("Area of the triangle : " + area);