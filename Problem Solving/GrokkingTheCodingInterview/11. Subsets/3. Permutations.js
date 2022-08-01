/**
 * Problem Statement:
 * Given a set of distinct numbers, find all of its permutations.
 * Note: if a set has ‘n’ distinct elements it will have n! permutations.
 *
 * Example:
 * Input: [1,3,5]
 * Output: [1,3,5], [1,5,3], [3,1,5], [3,5,1], [5,1,3], [5,3,1]
 */

/**
 * complexity: T:O(N*N!), S:O(N*N!)
 * complexity explanation: https://designgurus.org/path-player?courseid=grokking-the-coding-interview&unit=grokking-the-coding-interview_1628744061506_69Unit
 * @param  {} nums
 */
const permute = (nums) => {
  const permutations = [];
  const candidates = [[]];
  const permutationSize = nums.length;
  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];

    // we will take all existing candidates and
    // add the current number to create new candidates
    const numberOfCandidates = candidates.length;
    for (let j = 0; j < numberOfCandidates; j++) {
      const oldCandidate = candidates.pop();

      // create a new permutation by adding the current number at every position
      for (let k = 0; k <= oldCandidate.length; k++) {
        const newCandidate = oldCandidate.slice(0);
        newCandidate.splice(k, 0, currentNum);
        if (newCandidate.length === permutationSize)
          permutations.push(newCandidate);
        else candidates.push(newCandidate);
      }
    }
  }
  return permutations;
};

// SMOKE TEST
// const nums = [1, 3, 5];
// console.log(permute(nums));
