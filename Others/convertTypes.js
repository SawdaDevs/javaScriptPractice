let myName = "Sawda"
let age = 25
let ageString = "25"
let heightString = "160"

// console.log(myName, age, ageString, heightString)
// we can see the types of variable, strings are wrapped in, whilst integers, floats etc arent


console.log("We can see my age is not a string anymore", parseInt(ageString))
let newageString = parseInt(ageString)
console.log("This is new", typeof newageString, "This is age string", typeof ageString)

let newNAgeString = Number(ageString)
console.log("Type of new age string", typeof newNAgeString, "Type of ageString:", typeof ageString)

// console.log("We can see my height is not a string anymore", parseInt(heightString))
// console.log("We can see my age is not a string anymore", parseFloat(ageString))

// console.log("We can see the age variable is now a string", age.toString())

