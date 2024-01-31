console.log(" Hello world")
// Using console.log() to log to our console
console.log(" Extra")
//logs the exact string to console

// ---

const greetingOne = "Hello world";
let greetingTwo = "How are you?";

//let and var can be used similarly to create variables, const creates a constant

//different ways of manipulating strings include concatenation
 console.log(greetingOne + " " + greetingTwo);

 // and interpolation
 console.log(`${greetingOne} ${greetingTwo}`);

 //we can also use the comma when logging

 console.log(greetingOne, greetingTwo)

 //we can save concatenated or interpolated strings into a variable or constant

 const wholeGreeting = `${greetingOne} ${greetingTwo}`
 console.log(wholeGreeting)

// as wth other langages we have other data types than strings including Numbers (Integer and Float)
var rating = 8;
let temperature = 20.4
//when logging we don't need to bare in mind the types in our string. this is helpful as there is no need for conversion

console.log(`I give this class this rating ${rating}. Today's temperature is ${temperature} degrees`)

const prompt = require("prompt-sync")({ sigint: true }); //if you've got to using node you need to install this library before use
//ignore above if not using node and your machine


//we can use a prompt to take user input, operators as we have done to 
const gbp = prompt("Enter an amount in GBP", 100)
const rate = 1.5
const result = gbp * rate
console.log(`This amount: ${gbp} converted at a rate ${rate} gives you ${result}`)

//casting or parsing enables you to change the type of a variable. or uses the converted type of a const

//use typeof to check the type
const VAT = 20
let humidity = "34.7"
console.log(typeof rate)
console.log(rate.toString(), typeof rate.toString())
console.log(typeof VAT)
console.log(VAT.toString(), typeof VAT.toString())
console.log("This is humidity:", humidity,"and the type:", typeof humidity)
console.log("Using parseInt and humidity:", parseInt(humidity),"and the type:", typeof parseInt(humidity))
console.log("Using parseFloat and humidity:", parseFloat(humidity),"and the type:", typeof parseFloat(humidity))
console.log("Using Number() and humidity:",Number(humidity),"and the type:", typeof Number(humidity))