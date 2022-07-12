/**
 * Helper Method Recursion :: collecting odd values using outer scoped array
 * @param  {number[]} array
 */
const collectOddValuesHelper = (array: number[]) => {
    let result: number[] = []

    const helper = (array: number[]) => {
        if(!array.length) return
        if(array[0] % 2 !== 0) result.push(array[0])

        helper(array.slice(1))
    }
    helper(array)
    return result
}

// SMOKE TEST
// const numbers = [1,2,3,4,5,6]
// console.log(collectOddValuesHelper(numbers))

/**
 * Pure Recursion :: collecting odd values
 * @param  {number[]} array
 */
 const collectOddValuesPure = (array: number[]) => {
    let oddArray: number[] = []
    if(!array.length) return oddArray

    if(array[0] % 2 !== 0) oddArray.push(array[0])
    oddArray = oddArray.concat(collectOddValuesPure(array.slice(1)))
    
    return oddArray
}

// SMOKE TEST
// const numbers = [1,2,3,4,5,6]
// console.log(collectOddValuesPure(numbers))