/**
 * Insertion sort: constructs sorted array at the front and inserts upcoming elements at apt places in the sorted half  
 * @param  {number[]} array
 */
const insertionSort = (array: number[] ): number[] => {
    for(let i = 1; i < array.length; i++){
        let currentVal = array[i]
        let swapped = false
        for(var j = i - 1; j >= 0; j--){
            if(array[j] > currentVal){
                array[j+1] = array[j]
                swapped = true
            } else break
        }
        if(swapped) array[j + 1] = currentVal
    }
    return array
}

// SMOKE TEST
// const unsortedArray = [3,20, 4, 8, 2, 0, -1]
// console.log(insertionSort(unsortedArray))