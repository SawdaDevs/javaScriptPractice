const binary_search_iter= (inputArray, value) => {

    let indexToGo = Math.round((inputArray.length) / 2);
    let startArray = 0;
    let endArray = inputArray.length;
    console.log('The array we are working with is:', inputArray)
    console.log('We are looking for the value: ', value )
    //should check for array being ordered...how?


    while (inputArray.slice(startArray, endArray).length > 1 && inputArray[indexToGo] != value) {
        if (value > inputArray[indexToGo]) {
            startArray = indexToGo
            indexToGo = Math.round((startArray + endArray) / 2)
            // console.log('New start: ', startArray, ' new end: ', endArray, ' new array', inputArray.slice(startArray, endArray), 'Index now is:', indexToGo)
        } else if (value < inputArray[indexToGo]) {
            endArray = indexToGo
            indexToGo = Math.round((startArray + endArray) / 2)
            // console.log('New start: ', startArray, ' new end: ', endArray,  ' new array', inputArray.slice(startArray, endArray), 'Index now is:', indexToGo)
        }
    }
    if (inputArray[indexToGo] == value) {
        return  `The number is found in the array at index : ${indexToGo}`
    };
    return `Unfortunately, the number is not found in the array`
}

const binary_search_recu = (inputArray, value)=>{
    console.log('The array we are working with is:', inputArray)
    console.log('We are looking for the value: ', value )
    const binarySearch =(inputArray, startArray, endArray)=>{

        let currentIndex = Math.round((startArray + endArray) / 2)

        if (inputArray[currentIndex] == value){
            console.log('yaay, found it!')
            return currentIndex
        } else if (inputArray.slice(startArray, endArray).length ==1 &&  inputArray[currentIndex] != value){
            return `Unfortunately this value cannot be found`
        } else {
            //if more than , if less than
            if(inputArray[currentIndex]>value){
                endArray = currentIndex
            }else{
                startArray = currentIndex
            }
            currentIndex = Math.round((startArray + endArray) / 2)
            // console.log('New start: ', startArray, ' new end: ', endArray, ' new array', inputArray.slice(startArray, endArray), 'Index now is:', currentIndex)
            return binarySearch(inputArray, startArray ,endArray)
        }

    }
    return `Result: ${binarySearch(inputArray, 0, inputArray.length)}`

}


const testList = [1, 3, 9, 11, 15, 19, 29]
const testVal1 = 29
const testVal2 = 19
const testVal3 = 3
const testVal4 = 0
console.log('1.')
console.log(binary_search_iter(testList, testVal1))
console.log('2.')
console.log(binary_search_iter(testList, testVal2))
console.log('3.')
console.log(binary_search_iter(testList, testVal3))
console.log('4.')
console.log(binary_search_iter(testList, testVal4))

console.log('Now working through this with in place recursion:')
console.log('1.')
console.log(binary_search_recu(testList,testVal1))
console.log('2.')
console.log(binary_search_recu(testList,testVal2))
console.log('3.')
console.log(binary_search_recu(testList,testVal3))
console.log('4.')
console.log(binary_search_recu(testList,testVal4))