// function delayedGreeting(name, delayedTime){

//     setTimeout(() => {
//        for(let name of names){
//        console.log(`Hello, ${name}!`);
//     }
//     }, delayedTime);
// }

// const names = ["Utpal" ,"Lucky" ,"Shariq" ,"Sourav", "Shubh"];

// // names.forEach(name => {
//      delayedGreeting(names , 3000);

// // });

// //delayedGreeting("Utpal", 2000);



// Question-3 

// function getWelcomeMessage(){
//     return new Promise((resolve, reject) => {

//         setTimeout(() => {
//             resolve("Welcome to JavaScript Async Learning!")
//         }, 1000);
//     });
// }

// getWelcomeMessage()
// .then((message) => {
//     console.log(message);

// })
// .catch((error) => {
//     console.log("Error: ", error);
// });
// //     let newPromise = promise((resolve, reject) => {
// //     setTimeout(() => {
// //     // console.log("Welcome to JavaScript Async Learning!");

// //     }, 2000);
// // }