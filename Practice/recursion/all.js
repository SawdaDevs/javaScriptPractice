const all = (arr, callB)=>{
    if (arr.length === 0) return true;
    if(callB(arr[0])){
        arr.shift()
        return (all(arr,callB));
    }else{
        return false;
    }
}

const allAreLessThanSeven = all([1,2,9], function(num){
    return num <7;
})

console.log(allAreLessThanSeven);