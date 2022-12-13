// ES6 map, filter & Arrow function

const students = [
    {
        name: "Maruf Akash",
        id: 392,
        email: "marufakash392@gmail.com",
        cgpa: 3.55
    },
    {
        name: "Gazi Mahabuba",
        id: 288,
        email: "gazimahabuba54@yahoo.com",
        cgpa: 3.92
    },
    {
        name: "Ummay Sayma",
        id: 218,
        email: "saymaislam6621@gmail.com",
        cgpa: 2.71
    },
    {
        name: "Tanzila Monisha",
        id: 181,
        email: "tanzilamonisha52@gmail.com",
        cgpa: 1.98
    }
]

const studentNames = () => students.filter((student) =>  student.cgpa < 2.00).map((studentInfo) => studentInfo.name);


console.log(studentNames());