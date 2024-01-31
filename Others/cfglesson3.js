// /* ARRAYS */

let fruits = ["mango", "grapes", "plum", "strawberry", "passionfruit"]
// console.log("This is our array fruits", fruits)
// console.log(fruit[0]);
// console.log(fruit[1]);
// console.log(fruit[2]);
// console.log(fruit[3]);
// console.log(fruit[4]);

// // Using push() and pop() 
// let newLength = fruits.push("avocado")
// console.log("This is fruits", fruits)
// console.log("The new length of the array is:", newLength)
// fruits.pop()
// console.log("This is what fruits looks like fruits.pop():", fruits)
// fruits.push("lime", "lemon")
// console.log(`This is what fruits looks like after fruits.push("lime", "lemon"): ${fruits}`)

// newLength = fruits.unshift("lime", "lemon");
// console.log(`This is what fruits looks like after fruits.unshift("lime", "lemon"):,${fruits}`);
// console.log("The new length of the array is:", newLength)
// let firstFruit = fruits.shift();
// console.log("This is what fruits looks like after fruits.shift()", fruits);
// console.log("This is what fruits.shift() returned:", firstFruit);


// /* OBJECTS */

// let book = {
//     title: "Invisible Women",
//     author: "Caroline Criado Perez",
//     year: 2019,
//     subtitle: "Discover the shocking gender bias that affects our everyday lives"
// }

// console.log("This is the title of the book we're reading", book.title)
// console.log(book)

// const person = {
//     name: "Ana",
//     age: 25,
//     friends: ["Billy","Carmen","Dillan","E"],
//     address: {
//         number: 64,
//         street: "Zoo lane",
//         postcode: "ABC EFG"
//     },
//     sayHello: function () {
//         // Method
//         console.log("Hola Amigas!");
//       }
// }
// console.log("This is the person's info", person)
// console.log(`This person's name is ${person.name}...


// and they live on ${person.address.street} at number ${person.address.number}`)

// console.log("This person lives at number", person["address"]["number"], person["address"]["street"] )

// // //How can you add an attribute to that object?

// person.cost = 20
// console.log("Now person looks like this", person)
// // //we can see the new key-value pair
// // //or we can:

// Object.assign(person, {rating: 5})
// console.log("Now our object looks like this:", person)


// /* FOR LOOPS*/

// // //intro to for loop
// for (let i = 1; i <=10; i++){
//     console.log("this is what i is:",i)
// }

// // //using for loop with array

// let lengthOfFruits = console.log(fruits.length)

// for(let i = 0;i<fruits.length;i++){
//     console.log(`This is i: ${i} and this is the fruit in that position ${fruits[i]}`)
// }
// // //removing one element from the fruit loop using pop()
// console.log("Before loop: " + fruits);
// for (i = fruits.length -1; i >=0 ; i--) { 
//   fruits.pop();
//   console.log("This is fruits", fruits);
// }
// // //starting from the end of the loop i = fruits.length -1, as long as i is more than or equal to 0, take 1 from i
// console.log("Now fruits looks like", fruits)
// if(fruits.length){
//     console.log("The length of fruits is ", fruits.length(), "Its not empty")
// }
// else{
//     console.log("Fruits is empty", fruits)
// }


// /* WHILE LOOP */
// let fruits = ["mango", "grapes", "plum", "strawberry", "passionfruit"]
// while(fruits.length){
//     console.log(fruits)
//     fruits.pop()
// }
// console.log("now empty", fruits)
// let counter = 3 
//  while (counter > 0){
//     console.log(counter)
//     counter --
//  }
// console.log("we're done!")

// // // infinite loop! Don't do this!

//  counter = 3
//  while (counter > 0){
//     console.log(counter)
//     counter ++
//  }
//  console.log("we're done again")
// // // see how we never get here!

 


