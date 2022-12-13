// Array methods

let names = ["Maruf", "Sumaya", "Oishi", "Mahabuba", "Urmi"];
console.log(names);

// Push() - add a new element in the end of array
names.push("Tanzim","Sayma");
console.log(names);

// pop() - remove an element in the end of array
names.pop();
console.log(names);

// shift() -remove an element in the front of array
names.shift();
console.log(names);

// unshift() - add a new element in the front of array
names.unshift("Akash");
console.log(names);

// splice(start, delete, add)
names.splice(2,0,"Monisha","Riya");
console.log(names);

// sort()
console.log(names.sort());

// reverse()
console.log(names.reverse());

// numbers sorting
let numbers = [6,9,0,72,1,-2];
numbers = numbers.sort((a,b) => a-b);
console.log(numbers);