const power = (base, exp) =>{
if (exp===0) return 1 //anything to the power of 0 is 1

return base * power(base, exp-1)
}
console.log("power function", power(2,3))