//Menggunakan IIFE
(function(number) {
    var result = number %2===0 ? "Genap" : "Ganjil";
    console.log(`Angka ${number} adalah bilangan ${result}.`);
})(8);


//Menggunakan Callback function
function CekAngka(number, callback) {
    var result = number %2===0 ? "Genap" : "Ganjil";
    callback(result);
}
function printResult(result) {
    console.log(`Angka ${inputNumber} adalah bilangan ${result}.`);
}
var inputNumber = 7; 
CekAngka(inputNumber, printResult);
  
  