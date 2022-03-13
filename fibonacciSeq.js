// # """Implement a function recursively to get the desired
// # Fibonacci sequence value.
// # Your code should have the same input/output as the 
// # iterative code in the instructions."""

const get_fib = (position) =>{
    if (position == 0){
        return 0
    }
    else{
        return position + get_fib(position-1)
    }
        
}
console.log (get_fib(9))
console.log (get_fib(11))
console.log (get_fib(0))