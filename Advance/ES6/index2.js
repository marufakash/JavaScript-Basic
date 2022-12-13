// destructuring function parameters

const studentInfo = ({name,id,session,cgpa}) => {
    console.log(`Name: ${name}, ID: ${id}, Session: ${session}, CGPA: ${cgpa}`);
}

const student = {
    name: "Maruf Akash",
    id: "19EEE047",
    session: 2019,
    cgpa: 3.92
}
// studentInfo(student);

// Object destructuring
const {name, id, session, cgpa} = student;
// console.log(`Name: ${name}, ID: ${id}, Session: ${session}, CGPA: ${cgpa}`);

// Array destructuring
const numbers = [10,20,30,40,50,60];
const [num1,num2, ...num3] = numbers;
console.log(num3)