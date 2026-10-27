// QUESTION <-----> 1

// function processOrder(orderId, callback){
//     setTimeout(() => {
//         console.log(`${orderId} OrderId is received. Processing....`);

//         callback(orderId);

//     }, 500);
// }

// processOrder(12345,(orderId) => {
//     setTimeout(() => {

//     console.log(`Order ${orderId} completed and ready for shipping!`);

// }, 1000);

// });

// QUESTION <-----> 2

// function delayedGreeting(name, delayTime) {
//     setTimeout(() => {
//         console.log(`Hello, ${name}`);
//     }, delayTime);

// }

// delayedGreeting("Utpal", 1000);

// QUESTION <----> 3

// function getWelcomeMessage() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//         resolve("Welcome to JavaScript Async Learning!");
//         }, 1000);

//     });
// }
// getWelcomeMessage().then((result) => {
//     console.log(result);
// });

// QUESTION <------> 4

// async function calculateSquare(n) {
//     return n*n;
// }
// (async () => {
//     const result = await calculateSquare(result);
// })();

// QUESTION <------> 5

// function showLoading(callback) {
//     console.log("Loading...");


//     setTimeout(() => {
//         console.log("Data Loaded!");

//         callback();
//     }, 2000);

// }
// showLoading(() => {
//     console.log("Loading process completed!");
// });

// QUESTION <----> 6

// function failTask() {
//     return new Promise((resolve, reject) => {
//         reject("Task failed unexpectedly!");

//     });
// }

// failTask().catch((error) => {
//     console.log(error);
// });

// QUESTION <-----> 7

// function registerStep(stepName, delay) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log(`Completed: ${stepName}`);
//             resolve();

//         }, delay);
//     });

// }

// registerStep("Fill form", 1000)
//     .then(() => {
//         return registerStep("Verify Document", 1000);
//     })

//     .then(() => {
//         return registerStep("Issue ID Card", 1000);
//     })
//     .then(() => {
//         return registerStep("All Process Are Done", 1000);
//     });

//QUESTION <----> 8

// function checkedBalance(accountNumber, amount){
//     return new Promise((resolve, reject) => {

//     })
// }

// QUESTION <-----> 9

// function registerStep

// QUESTION <-----> 10

// async function executePayment() {

// }

// QUESTION <-----> 11

// async function authenticateUser(username) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("user ID 101");

//         }, 1000);

//     })

// }
// await authenticateUser(() => {



// })

// QUESTION <------> 12

// function serverA() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Response from Server A");

//         }, 2500);
//     });

// }

// function serverB() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Response from Server B");
//         }, 1000);
//     });

// }
// async function getFastestServer() {
//     const response = await Promise.race([
//         serverA(),
//         serverB()
//     ]);

// //     console.log(response);
// }

// getFastestServer();

// // QUESTION <-----> 13

// function unstableFetch() {
//     return new Promise((resolve, reject) => {
//         if( Math.random() < 0.5){
//             resolve("Success!!");
//         }
//         else{
//             reject("Failed");
//         }
//     });

// }

// async function fetchWithRetry(maxRetries) {
//     for(let attempt = 0; attempt <= maxRetries; attempt++){
//         try{
//             const result = await unstableFetch();
//             console.log(result);
//             return;

//         } catch(error){
//             if(attempt < maxRetries){
//                 console.log("Retryig...");
//             }else{
//                 throw new Error("Final fetch failed!");
//             }
//         }
//     }

// }

// fetchWithRetry(3)
// .catch((error) => {
//     console.log(error.message);
// });

// QUESTION <----> 14

// function fetchUserProfile() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Profile is fetched");
//         }, 2000);
//     });
// }
// function fetchPosts() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Post is fetched");
//         }, 1000);
//     });
// }

// function fetchNotifications() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Notifications is fetched");
//         }, 1500);
//     });
// }

// async function loadDashboard() {
//     const promiseAll = await Promise.all([
//         fetchUserProfile(),
//         fetchPosts(),
//         fetchNotifications()
//     ]);

//     console.log(results);

// }
// loadDashboard();