/**
 * Problem Statement:
 * Given a set of numbers that might contain duplicates, find all of its distinct subsets.
 * Example:
 * Input: [1, 5, 3, 3]
 * Output: [], [1], [5], [3], [1,5], [1,3], [5,3], [1,5,3], [3,3], [1,3,3], [3,3,5], [1,5,3,3]
 */

const findSubsets = (nums) => {
  nums.sort((a, b) => a - b); // sort the array to get the duplicates next to each other
  const subsets = [[]];
  let start = 0;
  let end = 0;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    start = 0;
    if (i > 0 && nums[i] === nums[i - 1]) {
      // if current and the previous elements are same,
      // create new subsets only from the subsets added in the previous step
      start = end;
    }

    end = subsets.length;
    for (let j = start; j < end; j++) {
      const newSub = subsets[j].slice(0);
      newSub.push(num);
      subsets.push(newSub);
    }
  }
  return subsets;
};

// SMOKE TEST
// const nums = [1, 5, 3, 3];
// console.log(findSubsets(nums));
