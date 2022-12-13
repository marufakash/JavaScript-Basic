# JavaScript documentation

## 1.1 Introduction to Javascript

- A programming language for web.
- it can be used in front-end and back-end

## 1.2 Output and comment

- Writing into an HTML element, using `innerHTML`
- Writing into the HTML output using `document.write()`
- Writing into the browser console, using `console.log()`

```JavaScript
// single line comment
document.write("Welcome to JavaScript");
document.write("<h1>Welcome to JavaScript</h1>");
console.log("Hello programmer");

/*
This is a multiple line comment.
In this section nothing to be executed in main file.
To readable, this is good practice to use coment.
*/
alert("welcome to js program");
```

## 1.3 Tokens

- Keywords: javascript reserved words for specific reasons.

  - Example - abstract, break, char, double, export, import, try, catch, finally, throw, throws, if, else, switch, case, break, default, continue,for, while, do, var, let, const, class, extends, implements, public, private, protected, new, static, this, true, false, boolean, string, number, function, instanceof

- puncuators

  - () round brackets / parentheses
  - {} curly brackets / braces
  - [] square brackets / brackets
  - <> angle brackets / chevrons

- Data types
  
  - JavaScript Datatypes (String, Number, Boolean, Null, Symbol)
  - The Object Datatype (An object, An array, A date)

    ```JavaScript
    // Numbers:
    let length = 16;
    let weight = 7.5;

    // Strings:
    let color = "Yellow";
    let lastName = "Johnson";

    // Booleans
    let x = true;
    let y = false;

    // Object:
    const person = {firstName:"John", lastName:"Doe"};

    // Array object:
    const cars = ["Saab", "Volvo", "BMW"];

    // Date object:
    const date = new Date("2022-03-25");
    ```

- Variables

  - Varibale is a placeholder for storing data.   

    ```JavaScript
    let name = "Maruf Akash";
    var price = 129.66
    const title = "Learning Point"
    ```

  - variables naming rules (collected from w3school)
    - The general rules for constructing names for variables (unique identifiers) are:
    - Names can contain letters, digits, underscores, and dollar signs.
    - Names must begin with a letter
    - Names can also begin with $ and _ (but we will not use it in this tutorial)
    - Names are case sensitive (y and Y are different variables)
    - Reserved words (like JavaScript keywords) cannot be used as names

  - 3 most popular variable naming style
    - Underscore: first_name, last_name
    - Upper Camel Case (Pascal Case): FirstName, LastName
    - Lower Camel Case: firstName, lastName
 
  - var vs let vs const
    - 2 important things: reassign, scope - block, function, global
    - var variable can be reassigned and function scoped.
      ```JavaScript
      var name = "alex";
      name = "robin"; // reassign allowed for var variables

      if (true) {
        var age = 32;
      }

      console.log(name);
      console.log(age); //  allowed as var variable is function scoped
      ```
    - let variable can be reassigned but blocked (a set of curly braces) scoped.
        
        ```JavaScript
        let name = "alex";
        name = "robin"; // reassign allowed for let variables

        if (true) {
            let age = 32;
        }

        console.log(name);
        console.log(age); // not allowed as let variable is block scoped
        ```
    
    - const variable can not be reassigned but blocked (a set of curly braces) scoped.

      ```JavaScript
      const name = "alex";
      name = "robin"; // reassign is not allowed for const variables

      if (true) {
        const age = 32;
      }

      console.log(name);
      console.log(age); //  not allowed as const variable is blocked scoped
      ```

- Operators

  - Arithmetic operators : +, -, *, /, %
  - Assignment operators: +=, -=, *=, /=, %=
  - Unary operators: ++, --
  - Comparision / Relational operators: >, >=, <, <=, ==, !=, ===, !==
  - Logical operators: &&, ||, !
  - Ternary Operator: `condition ? expression1 : expression2;`
  - Bitwise operators: &, |, ^, ~, >>, <<

## 1.4 Prompt & Data Type conversion

- prompt() can help us to take user input. Though it is not recommended but for testing purpose we can use it instead of a form.
- Number(), toString(), pasreInt(), parseFloat(), parseDouble()

## 1.5 Math methods

- max(), min(), sqrt(), pow(), ceil(), floor(), round(), random()

    ```JavaScript
    console.log(Math.max(20, 30));
    console.log(Math.min(20, 30));
    console.log(Math.floor(3.4));
    console.log(Math.ceil(3.4));
    console.log(Math.round(3.4));
    console.log(Math.random());

    const randomNumber = Math.floor(Math.random() * 5) + 1;
    ```

- Traditional function vs Arrow function
  ```JavaScript
  // demo1 - must use parenthesis for no parameters, but for one parameter its optional
  function display1() {
    console.log("I am display 1");
  }

  const display2 = () => {
    console.log("I am display 2");
  };

  display1();
  display2();

  // demo2 - no need to use curly braces if returning or dealing with single statement
  function display3() {
    console.log("I am display 3");
  }

  const display4 = () => console.log("I am display 4");

  display3();
  display4();

  // returning value in arrow function - no need to use curly braces if returning or dealing with single statement
  function display5() {
    return "I am display 5";
  }

  const display6 = () => "I am display 6";

  console.log(display5());
  console.log(display6());

  // parameters in arrow function
  function add1(x, y) {
    return x + y;
  }

  const add2 = (x, y) => x + y;

  console.log(add1(10, 20));
  console.log(add2(20, 30));
  ```

## 1.6 Control statement

- Conditional control statement: if, else if, else, switch

  - if, else if, else related programss
    - positive / negative / zero program
      ```JavaScript
      let num1 = parseInt(prompt("Enter first numebr : "));
      let num2 = parseInt(prompt("Enter second numebr : "));

      if(num1 > num2){
        console.log("Large Number is : " + num1);
      } else if(num2 > num1){
        console.log("Large Number is : " + num2);
      } else{
        console.log("Equal numbers");
      }
      ```

    - Vowel / consonant program
      ```JavaScript
      let letter = prompt("Enter a letter : ");

      // convert any uppercase input into lower cause we set only lowercase letter in condition
      letter = letter.toLowerCase();

      // Now check the condition
      if(letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter =='u'){
        console.log('Vowel');
      } else{
        console.log('Consonant');
      }
      ```

  - switch
    - 4 keywords: switch, case, break, default
      ```JavaScript
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

- Loop control statement: for, while, do while loop

  - for loop
    ```JavaScript
    // sum of numbers 1+2+..+10
    let sum = 0;

    for(let i=1; i<10; i++){
        sum = sum + i;
    }

    console.log("Summation is : " + sum);
    ```

  - while loop
    ```Javascript
    // sum of numbers 1+2+..+10
    let sum = 0;

    let i = 1;
    while(i<10){
        sum = sum + i;
        i++;
    }

    console.log("Summation is : " + sum);
    ```
  - do while loop
    ```Javascript
    // sum of numbers 1+2+..+10
    let sum = 0;

    let i = 1;
    do{
        sum = sum + i;
        i++;
    }while(i<10)

    console.log("Summation is : " + sum);
    ```

## 1.7 Object 
- object is one type of variable that can store differnt types of variables

  ```JavaScript
  // declaring objects 
  const student1 = {
    name: "Maruf Akash",
    age: 22,
    cgpa: 3.92,
    language: ["Bangla","English"]
  }

  const student2 = {
    name: "Gazi Mahabuba",
    age: 23,
    cgpa: 3.36,
    language: ["Hindi","Arbi","English"]
  }

  // printing object
  console.log(student1);

  // printing object property's value
  console.log(student1.name);

  // adding a constructor
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

  console.log(student1);
  console.log(student2);

  student1.display();
  student2.display();
  ```

