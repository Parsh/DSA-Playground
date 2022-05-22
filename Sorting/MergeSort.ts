/**
 * Merges two sorted arrays
 * @param  {Number[]} arrayOne
 * @param  {Number[]} arrayTwo
 */
 const mergeArrays = (arrayOne: Number[], arrayTwo: Number[]): Number[] => {
    const mergedArray = []
    let i = 0
    let j = 0

    while(i < arrayOne.length && j < arrayTwo.length){
        if(arrayOne[i] <= arrayTwo[j]) {
            mergedArray.push(arrayOne[i])
            i++
        } else {
            mergedArray.push(arrayTwo[j])
            j++
        }
    }

    while(i < arrayOne.length) {
        mergedArray.push(arrayOne[i])
        i++
    }

    while(j < arrayTwo.length) {
        mergedArray.push(arrayTwo[j])
        j++
    }

    return mergedArray
}

/** 
 * Performs merge sort on an unsorted array
 * @param  {Number[]} array
 */
const mergeSort = (array: Number[]): Number[] => {
    if(array.length <= 1) return array
    const mid = Math.floor(array.length/2)
    const left = mergeSort(array.slice(0, mid))
    const right = mergeSort(array.slice(mid, array.length))

    return mergeArrays(left, right)
}

// SMOKE TEST
// const unsortedArray = [3,20, 4, 8, 2, 0, -1]
// console.log(mergeSort(unsortedArray))