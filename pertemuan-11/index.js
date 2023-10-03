// import helloWorld, { fullName as namaLengkap, angka, john } from "./utils.js";
// import sayGreetings from "./sayGreetings.js"

// console.log(namaLengkap);
// console.log(angka);
// console.log(john);
// helloWorld();
// sayGreetings();

// //ASYNCHRONOUS JS
// //synchronous -> single thread -> blocking
// console.log("Proses 1");
// console.log("Proses 2");
// console.log("Proses 3");
// console.log("Proses 4");

// //asynchronous -> multi thread -> non blocking
// //Ada 2 macam async
// //1. paralel
// setTimeout(() => {
//     console.log("Proses 1");
// },3000);
// console.log("Proses 2");
// setTimeout(()=>{
//     console.log("Proses 3");
// },4000);
// console.log("Proses 4");

// //2. Concurrent
// //2.A Callback
// setTimeout(() =>{
//     console.log("Proses 1");
//     setTimeout(() =>{
//         console.log("Proses 2");
//         setTimeout(() =>{
//             console.log("Proses 3");
//             setTimeout(() =>{
//                 console.log("Proses 4");
//             }, 3000); 
//         }, 3000);
//     }, 3000);
// }, 3000);

//2.B Promise
//Buat Promise
let condition = false;
const newPromise = new Promise((resolve, reject) =>{
    if (condition){
        resolve("Berhasil");
    } else {
        reject("Gagal");
    }
});

//Pakai Promise
//1. then - catch (ES6)
newPromise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => console.log(error));

//2. async - await (ES7)
const consumePromise = async () => {
    try {
      let result = await newPromise;
      console.log(result);
    } catch (error) {
      console.log(error);
    }
};
consumePromise();
