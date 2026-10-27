// Question <----> 1

// function processOrder(orderId, callBack) {
//     console.log(`Order ${orderId} received.`);

//     setTimeout(() => {
//         console.log(`Processing...`);
//         setTimeout(() => {

//             callBack(orderId);

//         }, 1200);

//     }, 1500);
// }

//     processOrder(12345, (orderId) => {
//         console.log(`Order ${orderId} completed and ready for shipping!`);


// });

//QUestion <---> 2 

// function delayedGreeting( name , delayTime){
//     setTimeout(() => {
//     console.log("Hello , Utpal");

//     }, 1500);

// }

// delayedGreeting();

//Question <------> 3

// function delayedGreeting( names , delayTime){

//     names.forEach((name, index) => {

//     setTimeout(() => {

//     console.log(`Hello ${name}`);
//     }, delayTime * ( index + 1));

//     });   



// }

// const names = ["Utpal" , "Saurav" , "Arnav" , "Ayush" , "Ansh" , "Prince"];
// delayedGreeting(names , 1000);

//Question <-----> 3


// function getWelcomeMessage() {
//     return new Promise((resolve, reject) => {
//          setTimeout(() => {
//             resolve("Welcome to JavaScript Async Learning!");

//     }, 2000);
// });
// }

//     getWelcomeMessage() 
//     .then((message) => {
//         console.log(message);
//     })

//     .catch((error) => {
//         console.log("Error: ", error);
//     });

// // Question <----> 4

// async function calculateSquare(n) {
//     //  return new Promise((resolve, reject) => {

//         return n*n;
// }

// async function execute() {
//     const result = await calculateSquare(10);
//     console.log(`Square of 10 is: ${result}`);
// }

// execute();



//  })

// }

// // Question <-----> 5

// function showLoading(callback) {

//     console.log("Loading....");

//     setTimeout(() => {
//         console.log("Data Loaded!");

//         callback();

//     }, 2000);

// }
// showLoading(() => {
//     console.log("Callback executed!");
// });

// // Queston <----> 6

// function failTask() {
//     return new Promise((resolve, reject) => {
//         reject("Task failed unexpectedly!!");

//     });
// }

// failTask().catch((error) => {
//     console.log(error);
// });

// //QUESTION <-----> 7
// // : Refactoring Callback Hell to Promise Chaining

// function registerStep(stepName, delay) {
//     return new Promise((resolve, reject) => {

//         setTimeout(() => {
//             console.log("Completed: "+ stepName);
//             resolve(stepName);

//         }, delay);

//     });

// }

// registerStep("Form Submitted", 1000)
//             .then(() => {
//                 return registerStep("Documents Verified", 1500);
//             })
//             .then(() => {
//                 return registerStep("ID Card Generated", 1000)

// });

// QUESTION <-----> 8


        


