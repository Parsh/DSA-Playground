/**
 * Bubble sort
 * @param  {number[]} array
 */
const bubbleSort = (array: number[]): number[] => {
    for(let i = array.length - 1; i >= 0; i--){
        let swap = false
        for(let j = 0; j <= i; j++){
            if(array[j] > array[j+1]){
                [array[j], array[j+1]] = [array[j+1], array[j]]
                swap = true
            }
        }
        if(!swap) break
    }

    return array
}

// SMOKE TEST
// const unsortedArray = [ 4, 2, -1, 9, 12, 3, 8, -2 ]
// console.log(bubbleSort(unsortedArray))