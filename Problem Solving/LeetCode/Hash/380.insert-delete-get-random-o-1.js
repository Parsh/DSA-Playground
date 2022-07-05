/*
 * @lc app=leetcode id=380 lang=javascript
 *
 * [380] Insert Delete GetRandom O(1)
 */

// @lc code=start

var RandomizedSet = function () {
  this.set = [];
  this.hashMap = {};
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.hashMap[val] !== undefined) return false;
  this.set.push(val);
  this.hashMap[val] = this.set.length - 1;
  return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (this.hashMap[val] === undefined) return false;
  const idx = this.hashMap[val];

  // swap the element at idx w/ last element and pop
  let lastElement = this.set[this.set.length - 1];
  [this.set[idx], lastElement] = [lastElement, this.set[idx]];
  this.set.pop();
  this.hashMap[this.set[idx]] = idx;
  delete this.hashMap[val];
  return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  const random = Math.floor(Math.random() * this.set.length);
  return this.set[random];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
// @lc code=end
