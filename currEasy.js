//QUESTION <----> 1

// function sayHelloLater(){
//     setTimeout(() => {
//     console.log("Utpal Kumar");
//     }, 2000);
// }
// // sayHelloLater();

// QUESTION <----> 2

// console.log("Start");
// setTimeout(() => {
//  console.log("Inside Timeout");
// }, 0);
// console.log("End");

// O/P :- start , end and Inside Timeout

//QUESTION <----> 3

// function add(num1, num2){
//     return num1+ num2;
// }

// function calculate(num1, num2, operationCallback) {
//     let result = operationCallback(num1, num2);

//     console.log(result);     
// }

// calculate(10, 20, add);

// QUESTION <-----> 4

// function sendNotification(message, delay, callback){

//     console.log("Sending message....");

//     setTimeout(() => {
//     console.log(message);
//     callback();
// }, delay);

// }

// sendNotification("Hello Utpal!", 2000, () => {
//     console.log("Notification sent successfully!");
// });

// QUESTION <----> 5

// function start() {
//     setTimeout(() => {
//         console.log("3");
//     }, 1000);

//     setTimeout(() => {
//         setTimeout(() => {
//             console.log("2");
//         }, 2000);

//     setTimeout(() => {
//         console.log("1");

//     }, 3000);
//     setTimeout(() => {
//         console.log("GO!!")
//     }, 4000);

//     })

// }
// start();

//QUESTION <-----> 6

// Promise.resolve("Data loaded Successfully!")
//     .then((value) => {
//         console.log(value);
// });

// QUESTION <-----> 7

// function flipCoin() {
//     return new Promise((resolve, reject) => {
//         const random = Math.random();

//         if (random >= 0.5) {
//             resolve("Heads! You win!");

//         }else {
//             reject("Tails! You lose!");
//         }


//     });

// }

// flipCoin()
//    .then((result) => {
//     console.log(result);
//    })
//    .catch((error) => {
//     console.log(error);
// });

// QUESTION <-----> 8 (((((THIS IS INCOMPLETE)))))

// function fetchNumber() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(5);
//         }, 1000);

//     });
// }
// fetchNumber()
// .then((num) => {

// })



//QUESTION <-----> 9

// function checkEven(num){
//     return new Promise((resolve, reject) => {

//         if(num % 2 === 0){
//             resolve(`${num} is an Even Number`);

//         } else {
//                 reject(`${num} is an Odd Number`);
//             }
//     })
// }

// checkEven(4)
//   .then((result) => {
//     console.log(result);
// })
//   .catch((error) => {
//     console.log(error);
//   });

// QUESTION <-----> 10

// function randomPromise(){
//     return ((resolve, reject) => {
//         setTimeout(() => {
//             const isSuccess = Math.random() > 0.5;

//             if(isSuccess) {
//                 resolve("Operation successful!");
//             }else{
//                 reject(new Error("Operation failed!"));
//             }

//         }, 1000); 
//     });
// }

// randomPromise()
// .then((result) => {
//     console.log(result);
// })

// .catch((error) => {
//         console.log(error);
//     })
// .finally(() => {
//   console.log("Cleanup complete: Promise state settled.");

// })

// QUESTION <----> 11

// function fetchNumber(){
//     return new Promise((resolve, reject) => {

//     })
// }


// QUESTION <-----> 12

// function getUserData() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve({
//                 name: "Utpal Kumar",
//                 age: 18
//             });

//         }, 1500);

//     });

// }

// async function getProfile() {
//     const user = await getUserData();

//     console.log(`User Profile: ${user.name}, Age:${user.age}`)
// }

// getProfile();

// QUESTION <-----> 13  ((((DONE))))

// QUESTION <------> 14

// function wait (ms) {
//     return new Promise((resolve) => {
//     setTimeout(() => {
//         resolve();
//     }, ms);
//     });
// }

// async function printSteps() {
//     console.log("Step: 1");

//     await wait(1000);
    
//     console.log("Step: 2");
    
//     await wait(1000);
    
//     console.log("Step: 3");

// }
// printSteps();

// QUESTION <-----> 15

// function wait(ms) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve();
//         }, ms);
//     });
// }

// (async () => {
//     console.log("Step 1");

//     await wait(1000);

//     console.log("Step 2");

//     await wait(1000);

//     console.log("Step 3");

//     await wait(1000);
// })();


