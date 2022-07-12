/**
 * Checks whether the second array is a squared version of the first array
 * @param  {number[]} arrayOne
 * @param  {number[]} arrayTwo
 */
const sameSquared = (arrayOne: number[], arrayTwo: number[]) => {
    if(arrayOne.length !== arrayTwo.length) return false

    const squaredFrequenc: {[key: number]: number} = {}
    for(let each of arrayTwo){
        squaredFrequenc[each] = (squaredFrequenc[each] || 0) + 1
    }

    let same = true
    for(const key of arrayOne){
        if(squaredFrequenc[key**2 ]){
            --squaredFrequenc[key**2 ]
        } else same = false
    }

    return same
}

// SMOKE TEST
// const arr1 = [1,2,3,4]
// const arr2 = [16, 9, 4, 1]
// console.log(sameSquared(arr1, arr2))

/**
 * Detects whether two strings are anagrams or not(contains same letters)
 * @param  {string} strOne
 * @param  {string} strTwo
 */
const anagramDetector = (strOne: string, strTwo: string) => {
    if(strOne.length !== strTwo.length) return false

    const frequency: {[key: string]: number} = {}
    for(const char of strOne){
        frequency[char] = (frequency[char] || 0) + 1
    }

    let isAnagram = true
    for(const char of strTwo){
        if(!frequency[char]){
            isAnagram = false
            break
        } else {
            --frequency[char]
        }
    }

    return isAnagram
}

// SMOKE TEST
// const str1 = 'iceman'
// const str2 = 'manice'
// console.log(anagramDetector(str1, str2))