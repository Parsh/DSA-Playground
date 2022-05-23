/**
 * Pivoter(in place) for quick sort
 * @param  {} array
 * @param  {} start=0
 * @param  {} end=array.length-1
 */
const pivot = (array: number[], start: number = 0, end: number = array.length - 1): number => {
    const pivot: number = array[start] // assuming pivot to always be the first element(based on the selection of pivot(ideally median), the performance of quick sort vaires)
    let swapIndex: number = start

    for(let index = start + 1; index <= end; index++){
        if(array[index] < pivot){
            swapIndex++
            [array[index], array[swapIndex]] = [array[swapIndex], array[index]]
        }
    }

    [array[start], array[swapIndex]] = [array[swapIndex], array[start]]
    return swapIndex
}
/**
 * Quick Sort
 * @param  {} array
 * @param  {} left=0
 * @param  {} right=array.length-1
 */
const quickSort = (array: number[], left: number = 0, right: number = array.length - 1): number[] => {
    if(left < right) {
        const pivotIndex: number = pivot(array, left, right)
        quickSort(array, left, pivotIndex - 1) // first half
        quickSort(array, pivotIndex+1, right) // second half    
    }
    return array
}

// SMOKE TEST
// const unsortedArray = [3,20, 4, 8, 2, 0, -1]
// console.log(quickSort(unsortedArray))