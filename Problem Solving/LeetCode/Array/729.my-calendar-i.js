/*
 * @lc app=leetcode id=729 lang=javascript
 *
 * [729] My Calendar I
 */

// @lc code=start

// var MyCalendar = function () {
//   this.intervals = []; // hosts intervals in sorted order
// };

// /**
//  * @param {number} start
//  * @param {number} end
//  * @return {boolean}
//  */
// MyCalendar.prototype.book = function (start, end) {
//   const newInterval = [start, end];

//   let startIndex = 0;
//   let endIndex = 1;
//   let insertionIndex = this.intervals.length;
//   for (let idx = 0; idx < this.intervals.length; idx++) {
//     const interval = this.intervals[idx];

//     // case: if the new interval ends prior to the next exisiting interval, break
//     if (newInterval[endIndex] <= interval[startIndex]) {
//       insertionIndex = idx;
//       break;
//     }

//     // case: check for overlap with the exisitng interval
//     const newOverlapsExisiting =
//       interval[startIndex] <= newInterval[startIndex] &&
//       newInterval[startIndex] < interval[endIndex];

//     const existingOverlapsNew =
//       newInterval[startIndex] <= interval[startIndex] &&
//       interval[startIndex] < newInterval[endIndex];

//     if (newOverlapsExisiting || existingOverlapsNew) {
//       insertionIndex = -1;
//       break;
//     }
//   }
//   if (insertionIndex === -1) return false;
//   else this.intervals.splice(insertionIndex, 0, newInterval);
//   return true;
// };

var MyCalendar = function () {
  this.root = null;
};

class TreeNode {
  constructor(interval) {
    this.interval = interval;
    this.left = this.right = null;
  }
}

/**
 * approach: BST
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function (start, end) {
  const newNode = new TreeNode([start, end]);

  if (this.root === null) {
    this.root = newNode;
    return true;
  }

  let current = this.root;
  const startIndex = 0;
  const endIndex = 1;
  while (current) {
    // overlaps with current?
    const newOverlapsCurrent =
      current.interval[startIndex] <= newNode.interval[startIndex] &&
      newNode.interval[startIndex] < current.interval[endIndex];

    const currentOverlapsNew =
      newNode.interval[startIndex] <= current.interval[startIndex] &&
      current.interval[startIndex] < newNode.interval[endIndex];

    if (newOverlapsCurrent || currentOverlapsNew) return false;

    if (newNode.interval[startIndex] < current.interval[startIndex]) {
      if (current.left === null) {
        current.left = newNode;
        return true;
      } else current = current.left;
    } else {
      if (current.right === null) {
        current.right = newNode;
        return true;
      } else current = current.right;
    }
  }
};

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */
// @lc code=end
