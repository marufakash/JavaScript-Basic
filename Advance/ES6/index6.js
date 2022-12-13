// Promise chaining

const taskOne = () => {
    return new Promise((resolve,reject) => {
        resolve("Task 1 is completed.")
    })
}

const taskTwo = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Task 2 is completed.")
        },3000)
    })
}

const taskThree = () => {
    return new Promise((resolve,reject) => {
        reject("Task 3 is not completed.")
    })
}

const taskFour = () => {
    return new Promise((resolve,reject) => {
        resolve("Task 4 is completed.")
    })
}

const callAllTasks = async () => {
    try{
        const t1 = await taskOne()
        console.log(t1);
        const t2 = await taskTwo()
        console.log(t2);
        const t3 = await taskThree()
        console.log(t3);
        const t4 = await taskFour()
        console.log(t4);
    }catch(err){
        console.log(err);
    }
}

callAllTasks();