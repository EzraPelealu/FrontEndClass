//JavaScript Function

// function greetings() {
//   return "Hello";
// }

// const age = 17; //Global

// const greetings = function (name) {
//   //Parameter
//   console.log(age);
//   const job = "teacher"; //Local
//   if (job === "teacher") {
//     const address = "manado"; //Blok
//   }
//   console.log(address);
//   return "Hello";
// };
// // console.log(job);
// console.log(greetings("John")); //Argument

//IIFE (Immediately Invoked Function Expression)
//Anonymous Function
const output = (function () {
    return "Hello IIFE";
  })();
  
  console.log(output);
  
  //Callback Function
  
  function createGreetings(name, callback) {
    const greetings = "Hello " + name;
    callback(greetings);
  }
  
  createGreetings("John", function (greetings) {
    console.log(greetings);
  });