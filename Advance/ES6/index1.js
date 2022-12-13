// forEach

// let numbers = [5,6,7,8,9,10];
// let squareNumbers = [];
// numbers.forEach((x) => {
//     squareNumbers.push(x*x);
// })

// console.log(squareNumbers);
// numbers.forEach((x,index,arr) => {
//     arr[index] = x+5;
// })
// console.log(numbers);

// map
let numbers = [5,6,7,8,9,10];
let squareNumbers = numbers.map((x) => {
    return x*x;
})

console.log(squareNumbers);