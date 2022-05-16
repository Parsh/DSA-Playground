/**
 * Find maximum sum of n consecutive numbers
 * @param  {number[]} array
 * @param  {number} consecutives
 */
const maxSubArraySum = (array: number[], consecutives: number) => {
    if(!array.length || array.length < consecutives) return null
    
    // initial window sum
    let current: number = 0
    for(let i = 0; i < consecutives; i++){
        current += array[i]
    }

    let max: number = current
    // sliding window: one bit at a time
    for(let i = 1; i < array.length - consecutives; i++){
        current = current - array[i - 1] + array[i + consecutives - 1];
        max = Math.max(max, current)
    }

   return max
}

// SMOKE TEST
// const array = [2, 6, 9, 2, 1, 8, 5, 6, 3]
// const consecutives  = 3
// console.log(maxSubArraySum(array, consecutives))