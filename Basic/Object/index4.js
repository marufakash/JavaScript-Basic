// Date object and date methods
let date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

let currentDate = day + "/" + month + "/" + year;
document.write("Date : " + currentDate);