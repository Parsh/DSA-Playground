/**
 * Returns the nth digit(10's place) for a given number
 * @param  {number} num
 * @param  {number} index
 */
const getDigit = (num: number, index: number): number => {
    return Math.floor(Math.abs(num) / (10 ** index)) % 10
}
/**
 * Returns the total number of digits of the given number
 * @param  {number} num
 */
const digitCount = (num: number): number => {
    if (num === 0) return 1
    return Math.floor(Math.log10(Math.abs(num))) + 1
}

/**
 * Returns the digit count of the number containing the most digits
 * @param  {number[]} nums
 */
const maxDigits = (nums: number[]): number => {
    let maxDigits: number = 0
    for(const num of nums){
        maxDigits = Math.max(maxDigits, digitCount(num)) 
    }
    return maxDigits
}

const radixSort = (array: number[]): number[] => {
    const maxDigitCount: number = maxDigits(array)
    for(let k = 0; k < maxDigitCount; k++){
        const digitBuckets: any = Array.from({length: 10}, () => [])
        for(let i = 0; i < array.length; i++){
            const digit = getDigit(array[i], k)
            digitBuckets[digit].push(array[i])
        }
        array = [].concat(...digitBuckets)
    }
    return array
}

// SMOKE TEST
// const unsortedArray = [23,347, 5467, 12, 2345, 9852]
// console.log(radixSort(unsortedArray))


