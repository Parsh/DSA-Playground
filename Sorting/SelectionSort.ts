/**
 * Selection Sort
 * @param  {number[]} unsortedArray
 */
const selectionSort = (array: number[]): number[] => {
    for(let i = 0; i < array.length; i++){
        let minimumIndex: number = i
        for(let j = i + 1; j < array.length; j++){
            if(array[j] < array[minimumIndex]) {
                minimumIndex = j
            }
        }
        
        if(minimumIndex !== i) [array[i], array[minimumIndex]] = [array[minimumIndex], array[i]]
    }

    return array
}

// SMOKE TEST
// const unsortedArray = [3,20, 4, 8, 2, 0, -1]
// console.log(selectionSort(unsortedArray))