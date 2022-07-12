/**
 * Returns the number pair which adds to zero, if not then undefined
 * @param  {number[]} sortedArray
 */
const sumZero = (sortedArray: number[]) => {
    let i: number = 0, j: number = sortedArray.length - 1

    while(i < j){
        const sum = sortedArray[i] + sortedArray[j]
        if(sum === 0) return [sortedArray[i], sortedArray[j]]
        else if(sum < 0) i++
        else if(sum > 0) j--
    }
    return
}

// SMOKE TEST
// const sortedArray = [-4, -3, -2, 0, 1, 2, 5, 8]
// console.log(sumZero(sortedArray))


/**
 * Counts unique values within a sorted array
 * @param  {number[]} sortedArray
 */
const countUniqueValues = (sortedArray: number[]) => {
    if(!sortedArray.length) return 0

    let i: number = 0, j:number = 1
    let uniqueNumbers = 1
    while(j < sortedArray.length){
        if(sortedArray[j] !== sortedArray[i]){
            uniqueNumbers++
            i = j
        }
        
        j++
    }
    return uniqueNumbers

    // alternate: in place count
    // while(j < sortedArray.length){
    //     if(sortedArray[j] !== sortedArray[i]){
    //         i++
    //         sortedArray[i] = sortedArray[j]
    //     }
        
    //     j++
    // }
    // console.log({sortedArray, uniqueNumbersCount: i+1})
}


// SMOKE TEST
// const sortedArray = [1, 2, 3, 4, 4, 12, 13, 15, 15 , 15, 20]
// console.log(countUniqueValues(sortedArray))



