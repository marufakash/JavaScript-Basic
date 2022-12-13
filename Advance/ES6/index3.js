// find(callback, value) return the value of the first element that pass certain condition

const numbers = [11,7,5,28,9, 19,0];
let firstEvenNumber = numbers.find((x) => x%2===0);
console.log(firstEvenNumber);

// findIndex(callback, value) return the index of the first element that pass certain condition
let firstEvenNumberIndex = numbers.findIndex((x) => x%2===0);
console.log(firstEvenNumberIndex);