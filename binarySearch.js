// """You're going to write a binary search function.
// You should use an iterative approach - meaning
// using loops.
// Your function should take two inputs:
// a Python list to search through, and the value
// you're searching for.
// Assume the list only has distinct elements,
// meaning there are no repeated values, and 
// elements are in a strictly increasing order.
// Return the index of value, or -1 if the value
// doesn't exist in the list."""

const binary_search = (input_array, value) => {

    let index_to_go = Math.round((input_array.length) / 2); //can I do this recursively
    let start_array = input_array.length;
    let end_array = input_array.length;

    while (input_array.slice(start_array, end_array).length > 1 && input_array[index_to_go] != value) {
        if (value > input_array[index_to_go]) {
            start_array = index_to_go
            index_to_go = Math.round(start_array + end_array) / 2
            console.log('New start: ', start_array, ' new end: ', end_array, ' new array', input_array.slice(start_array, end_array))
        } else if (value < input_array[index_to_go]) {
            end_array = index_to_go
            index_to_go = Math.round(start_array + end_array) / 2
            console.log('New start: ', start_array, ' new end: ', end_array, ' new array', input_array.slice(start_array, end_array))
        }
    }
    if (input_array[index_to_go] == value) {
        return index_to_go
    };
    return -1
}


const test_list = [1, 3, 9, 11, 15, 19, 29]
const test_val1 = 25
const test_val2 = 15
console.log(binary_search(test_list, test_val1))
console.log(binary_search(test_list, test_val2))