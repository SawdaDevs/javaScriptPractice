function rotLeft(arr, d) {
    //for each of the elements, figure out where
    //insert where
    let newArray =[]
    let position
    // console.log('rotations:', d)
    for(let i=0; i<arr.length;i++){
        if(i>=d){
            position = i-d 
            // console.log('positionition of ', arr[i] , 'was', i, 'is now ', position )
        }
        else
        {
            position = i + arr.length -d
            // console.log(position)
            // console.log('positionition of ', arr[i] , 'was', i, 'is now ', position )
        }
        newArray[position] = arr[i]
    }
    return newArray
}
const main = ()=>{
    console.log(rotLeft([ 1, 2, 3, 4, 5 ], 2))
}
main()