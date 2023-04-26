//What is an array?
//type of object
//Allows one to store many things in one variable, rather than several

// 
// let age1=12
// let age2=34
// let age3=89
// let age4=56

// console.log(`Ages: ${age1}, ${age2}, ${age3}, ${age4}`)
//what's wrong with this?
// maybe is for you..but its not very efficient. Esp considering they're related data, probably to be accessed/processed at the same, same way

let ages = [12, 34, 56, 78]

console.log(`Ages: ${ages}`)
// console.log(`Age: ${ages[0]}`)

// let sawdaArray = ['Sawda', 24, '24']
// console.log(sawdaArray)


// //some methods
//forEach
// const printAge = () => {
//     ages.forEach( age =>{
//     console.log("This is the age:", age*2)
// })
//     console.log(ages)
// }

//pop and push
// const popAge = () =>{
//     console.log(ages.pop())
//     console.log(ages)
// }

// const pushAge = newAge =>{
//     ages.push(newAge)
//     console.log(ages)
// }
// //filter
// const filterAge =()=>{
    
//     let over40 = ages.filter(age=>age>40)
//     console.log(`These people are older than 40: ${over40}`)
//     console.log(`These are all the people ${ages}`)
// }


// //some
const someAge=()=>{
    console.log(ages.some(age=> age>90))
}

// printAge()
// popAge()
// pushAge(90)
// filterAge()
someAge()

