      //It is a Question-1 of pdf JavaScript Async Mastery Worksheet
// Apna College JS — Lecture 12: Callbacks, Promises & Async/Await
// function processOrder(orderId, callback){
//     console.log(`Order ${orderId} received.`);

//     setTimeout(() => {
//         console.log("Processing....");


//     }, 1000);
    
    
//     setTimeout (() => {
//         callback(orderId);
        
//     }, 3000);

// }

// processOrder(241133, (orderId) => {
//     console.log(`Order ${orderId} completed and ready for shipping! `);

// });

// Question-2

// function registerStep(stepName , delay){
//       return new Promise(resolve =>
//             setTimeout(() => {
//                   console.log(`${stepName}`);
//                   resolve(stepName);
//             }, delay)
//             );
// }

//     registerStep("Form Submitted", 1000)
//     .then(() => registerStep("Document verified", 1500))
//     .then(() => registerStep("ID card issued", 900))
//     .then(() => console.log("Registration completed!"))
//     .catch(err => console.error("Error", err));

// Qestion-3

// function checkBalance(accountNumber, amount, delay){
//       return new Promise(resolve =>
//             setTimeout(() =>{
//                   console.log(`${accountNumber}`);
//                   resolve(amount);
//             }), delay)
      

//       checkBalance(`${accountNumber}, amount , 1500`)
//       .then(() => checkBalance())
//       console.log(`Transaction is approved for ${accountNumber}`);


// }


