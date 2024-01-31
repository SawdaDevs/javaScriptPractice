//Write a function called sumRange. It will take a number and return the sum of all numbers from 1 up to the number passed in.
const sumRange = (num) => {
    if (num ===1) return 1
    else{
        return num + sumRange(num-1);
    }
};

console.log("this is sumRange", sumRange(3));