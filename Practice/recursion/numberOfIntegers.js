//Given a multi-dimensional integer array, return the total number of integers stored inside this array

const totalIntegers = (arr) => {
  if (arr.length === 0) return 0; //if there is nothing, return zero 
  let total = 0; //to count number of numbers
  let top = arr.shift() //take first element 

  if (Array.isArray(top)) { //if that element is array, then call function on this array
    total += totalIntegers(top);
  }
  if (typeof top === "number") { //if this is a number, increment total
    total += 1;
  }
  return total + totalIntegers(arr); //return the total, and what is for the rest
};

var seven = totalIntegers([[[5], 3], 0, 2, ["foo"], [], [4, [5, 6]]]); // 7
console.log(seven);
