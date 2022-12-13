// Web storage API - localStorage, sessionStorage, cookie

// localStorage - store, read, update & remove data
// localStorage store data as key value pair - string

// setItem(key, value)
console.log(localStorage);
// localStorage.setItem("userName", "Maruf Akash");
// localStorage.setItem("userId", "19EEE047");
// localStorage.setItem("userEmail", "marufakash392@gmail.com");

// getItem(key)
// const userName = localStorage.getItem("userName");
// const userEmail = localStorage.getItem("userEmail");
// console.log(`User-name: ${userName}, User-email: ${userEmail}`);

// removeItem(key)
// localStorage.removeItem("userName");
// localStorage.removeItem("userEmail");
// localStorage.removeItem("userId");

// const countries = ["Bangladesh","India","Pakistan","Japan","Sri Lanka"];
// localStorage.setItem("countries",JSON.stringify(countries));
// const countryList = JSON.parse(localStorage.getItem('countries'));
// console.log(countryList);

const studentInfo = {
    name: "Maruf Akash",
    email: "marufakash392@gmail.com",
    year: 2019,
    language: ["Bangla","English","Hindi"]
}

localStorage.setItem("studentInfo", JSON.stringify(studentInfo));
const info = JSON.parse(localStorage.getItem("studentInfo"));
console.log(info);