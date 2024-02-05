//Write a function that sums squares of numbers in list that may contain more lists

const sumSquares = (arr) => {
  if (arr.length === 0) return 0;

  let sum = 0;
  let current = arr.shift(); //take the first element
  if (Array.isArray(current)) { //if array, pass that array to a new call of the function
    sum += sumSquares(current);
  } else if (Number.isInteger(current)) {
    //otherwise, do the maths, add the square to the sum
    sum += current * current;
  }
  return sum + sumSquares(arr); //return the sum, with the results of the rest of the array
};

l = [10, [[10], 10], [10]];
console.log(sumSquares(l)); // 1 + 4 + 9 = 14
