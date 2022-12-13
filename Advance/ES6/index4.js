// Synchronous vs Asynchronous

const taskOne = () => {
    console.log("Task One is complete.");
}

const taskTwo = () => {
    setTimeout(() => {
        console.log("Data is loading,Task Two is complete.");
    },3000)
}

const taskThree = () => {
    console.log("Task Three is complete.");
}

const taskFour = () => {
    console.log("Task Four is complete.");
}

const taskFive = () => {
    console.log("Task Five is complete.");
}

taskOne();
taskTwo();
taskThree();
taskFour();
taskFive();