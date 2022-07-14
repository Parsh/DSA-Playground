/*
 * @lc app=leetcode id=904 lang=javascript
 *
 * [904] Fruit Into Baskets
 */

// @lc code=start
/**
 * complexity: time O(2n) ~ O(n); space complexity: O(n)
 * concept: sliding window w/ frequency counter
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
  let totalFruits = 0;
  let bucketOne = 0;
  let bucketTwo = 0;
  let distinctFruits = 0;
  const distinctFruitsCapacity = 2; // as each individual bucket can hold fruit of a single type
  const fruitFrequency = {};

  while (bucketTwo < fruits.length) {
    const currentFruit = fruits[bucketTwo];
    if (!fruitFrequency[currentFruit]) {
      fruitFrequency[currentFruit] = 1;
      distinctFruits++;
    } else fruitFrequency[currentFruit]++;

    while (distinctFruits > distinctFruitsCapacity) {
      const fruitInBucketOne = fruits[bucketOne];
      fruitFrequency[fruitInBucketOne]--;

      if (fruitFrequency[fruitInBucketOne] === 0) distinctFruits--;
      bucketOne++;
    }

    totalFruits = Math.max(totalFruits, bucketTwo - bucketOne + 1);
    bucketTwo++;
  }
  return totalFruits;
};
// @lc code=end
