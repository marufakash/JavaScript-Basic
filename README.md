# JavaScript basic

### 1.1 Number methods

```JavaScript
// number to string - tostring()

let num1 = 25;
num1 = toString(num1);
console.log(typeof(num1));

// string to number - Number(), parseInt(), parseFloat()
let num2 = "88";
num2 = Number(num2);
console.log(typeof(num2));

// toFixed()
let num3 = 22.83729;
console.log(num3.toFixed(2));

// toPrecision
console.log(num3.toPrecision(4));
```

### 1.2 how to add or concatenate strings

```JavaScript
// how to add or concatenate strings

let firstName = "Maruf";
let lastName = "Akash";
let age = 22;
let fullName = firstName + " " + lastName;

console.log("My name is " + fullName + "." + "I am " + age + " " + "years old.");
```

### 1.3 Library functions for string

```JavaScript
// Library functions for string - .length, .charAt(), .toUpperCase(), .toLowerCase(), .concat(), .slice()

let myName = "Maruf Akash";
let text1 = "Bangladesh";
let text2 = " is a beautiful country."

console.log('Number of character : ' + myName.length);
console.log(text1.charAt(3));
console.log(text1.toUpperCase());
console.log(text1.toLowerCase());
console.log(text1.concat(text2));
console.log(text1.slice(2,7));
```

### 1.4 Arithmetic operator
```JavaScript
let num1 = Number(prompt('Enter the first number : '));
let num2 = Number(prompt('Enter the second number : '));

let result

// Addition
result = num1 + num2;
document.write(num1 + ' + ' + num2 + " : " + result + '<br>');

// Subtraction
result = num1 - num2;
document.write(num1 + ' - ' + num2 + " : " + result + '<br>');

// Multipication
result = num1 * num2;
document.write(num1 + ' * ' + num2 + " : " + result + '<br>');

// Division
result = num1 / num2;
document.write(num1 + ' / ' + num2 + " : " + result + '<br>');

// Modulus
result = num1 % num2;
document.write(num1 + ' % ' + num2 + " : " + result + '<br>');
```

### 1.5 Area of triangle
```JavaScript
// Area of triangle - (base * height * 0.5)

let base = parseFloat(prompt("Enter the base of triangle : "));
let height = parseFloat(prompt("Enter the height of triangle : "));

let area = (0.5 * base * height).toFixed(3);

console.log("Area of the triangle : " + area);
```

### 1.6 Conditional control statement - if, else if, else, switch

- switch

```Javascript
// Vowel Consonent using switch

let letter = prompt("Enter any letter : ");

letter = letter.toLowerCase();

switch(letter) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log("Vowel");
        break;
    default:
        console.log("Consonent");
}
```

- if else

```JavaScript
// letter grade using if else

var marks = Number(prompt("Enter your marks : "));

if(marks > 100 || marks < 0){
    console.log("Unvalid marks");
}else if(marks >= 80 && marks <= 100){
    console.log("A+");
}else if(marks >= 70 && marks <= 79){
    console.log("A");
}else if(marks >= 60 && marks <= 69){
    console.log("A-");
}else if(marks >= 50 && marks <= 59){
    console.log("B");
}else if(marks >= 40 && marks <= 49){
    console.log("C");
}else if(marks >= 33 && marks <= 39){
    console.log("D");
}else if(marks >= 0 && marks < 33){
    console.log("Fail");
}else{
    console.log("Wrong input");
}
```

### 1.7 Tranditional function

```JavaScript
function square(num) {
    var result = num * num;
    document.write("Result : " + result + "<br>");
}

var num = Number(prompt("Enter any number : "));
square(num);
```

### 2.1 Array 

- Array Methods

```JavaScript
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
```

- One Diementional Array
```JavaScript
// 1D Array - Create a function called highestScore that will receive a 1D array called scores & return the highest score

function highestScore(scores) {
    let max = scores[0];
    for(let i=1; i<scores.length; i++){
        if(max < scores[i]){
            max = scores[i];
        }
    }
    return max;
}

// Getting input from the user
let scores = [];
for(let i=0; i<5; i++){
    scores[i] = Number(prompt("Enter the scores : "));
}
console.log(scores);

console.log("Highest score : " + highestScore(scores));
```

- Two Diementional Array
```JavaScript
// 2D Array - create a function called highestRunScorer that will receive a 2D array called playersInfo. Based on highest score, return the name of player.

function highestRunScorer(playersInfo) {
    let highestScorer = playersInfo[0][0];
    let highestScore = playersInfo[0][1];

    for(let i=0; i<playersInfo.length; i++){
        if(highestScore < playersInfo[i][1]){
            highestScore = playersInfo[i][1];
            highestScorer = playersInfo[i][0];
        }
    }

    return highestScorer;
}

let playersInfo =[
    ["Maruf Akash", 78],
    ["Gazi Mahabuba", 91],
    ["Sumaya Islam", 54],
    ["Urmi Akter", 99],
    ["Mariya Khan", 88]
]

console.log("Highest Scorer : " + highestRunScorer(playersInfo));
```

### 2.2 Object

```JavaScript
// how to create an object
let student1 = {
    name: "Maruf Akash",
    age: 22,
    cgpa: 3.87,
    language: ["Bangla","English","Hindi"]
}

// printing object
console.log(student1.name);
```

- Adding a constructor
```JavaScript
function student(name, age, cgpa, language){
    this.name = name;
    this.age = age;
    this.cgpa = cgpa;
    this.language = language;

    // adding function inside a constructor
    this.display = function(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.cgpa);
        console.log(this.language);
    }
}

let student1 = new student("Maruf Akash",22,3.87,["Bangla","English","Hindi"]);
let student2 = new student("Gazi Mahabuba",23,3.99,["Arbi","English","Hindi"]);
student1.display();
student2.display();
```

- Math objects - sqrt(), pow(), floor(), ceil(), round(), max(), random()

```JavaScript
console.log(Math.sqrt(4));
console.log(Math.pow(2,4));
console.log(Math.floor(6.988));
console.log(Math.ceil(8.22));
console.log(Math.round(3.99));
console.log(Math.max(-2,7,0));
console.log(Math.floor(Math.random()*5)+1);
```

- Guessing Game
```JavaScript
let numberOfWon = 0;
let numberOfLost = 0;

for(let i=0; i<5; i++){
    let randomNumber = (Math.floor(Math.random()*5)) + 1;
    let guessNumber = Number(prompt("Enter a number from 1 to 5 : "));

    if(guessNumber == randomNumber){
        console.log("You have won.");
        numberOfWon++;
    }else{
        console.log("You have lost.Random number is : " + randomNumber);
        numberOfLost++;
    }
}

console.log("Number of win : " + numberOfWon);
console.log("Number of lost : " + numberOfLost);
```

- Date object and date methods

```JavaScript
let date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

let currentDate = day + "/" + month + "/" + year;
document.write("Date : " + currentDate);
```