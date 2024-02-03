const productOfArray = (arrayP) => {
  if (arrayP.length === 0) return 1;
  else {
    num = arrayP.shift();
    return num * productOfArray(arrayP);
  }
};

console.log(productOfArray([1, 2, 3, 10]));
