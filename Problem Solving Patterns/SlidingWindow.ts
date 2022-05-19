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

/**
 * returns the minimal length of the contiguous subarray
 * of which sum is greater than or equal to the sum passed
 * @param  {} nums
 * @param  {} sum
 */
const minSubArrayLen = (nums: number[], sum: number) => {
    let total: number = 0;
    let start: number = 0;
    let end: number = 0;
    let minLen: number = Infinity;
   
    while (start < nums.length) {
      // if current window doesn't add up to the given sum then  move the window to right
      if(total < sum && end < nums.length){
        total += nums[end];
        end++;
      }
      // if current window adds up to at least the sum given then we can shrink the window 
      else if(total >= sum){
        minLen = Math.min(minLen, end-start);
        total -= nums[start];
        start++;
      } 
      // current total less than required total but we reach the end 
      else {
        break;
      }
    }
   
    return minLen === Infinity ? 0 : minLen;
  }

  /**
   * Finds the longest substring w/ distinct characters
   * @param  {string} str
   */
  const findLongestSubstring = (str: string) => {
    let longest: number = 0;
    let seen: {[char: string]: number} = {};
    let start: number = 0;
   
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (seen[char]) start = Math.max(start, seen[char]);
      longest = Math.max(longest, i - start + 1);
      seen[char] = i + 1;
    }
    return longest;
  }