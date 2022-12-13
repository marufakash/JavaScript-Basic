// JavaScript object

// how to create an object
// let student1 = {
//     name: "Maruf Akash",
//     age: 22,
//     cgpa: 3.87,
//     language: ["Bangla","English","Hindi"]
// }

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
student1.display();
student2.display();