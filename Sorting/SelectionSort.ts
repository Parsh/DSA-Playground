/**
 * Selection Sort
 * @param  {number[]} unsortedArray
 */
const selectionSort = (unsortedArray: number[]): number[] => {
    for(let i = 0; i < unsortedArray.length; i++){
        let minimumIndex: number = i
        for(let j = i + 1; j < unsortedArray.length; j++){
            if(unsortedArray[j] < unsortedArray[minimumIndex]) {
                minimumIndex = j
            }
        }
        
        if(minimumIndex !== i) [unsortedArray[i], unsortedArray[minimumIndex]] = [unsortedArray[minimumIndex], unsortedArray[i]]
    }

    return unsortedArray
}

// SMOKE TEST
// const array = [3,20, 4, 8, 2, 0, -1]
// console.log(selectionSort(array))