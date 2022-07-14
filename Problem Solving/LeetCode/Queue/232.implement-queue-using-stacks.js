/*
 * @lc app=leetcode id=232 lang=javascript
 *
 * [232] Implement Queue using Stacks
 */

// @lc code=start

var MyQueue = function () {
  this.stack = []; // only use stack operations: push & pop or unshift & shift
  this.temp = []; // second stack
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.stack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  while (this.stack.length > 1) {
    this.temp.push(this.stack.pop());
  }
  const dequeuedElement = this.stack.pop();
  while (this.temp.length) {
    this.stack.push(this.temp.pop());
  }
  return dequeuedElement;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  while (this.stack.length > 1) {
    this.temp.push(this.stack.pop());
  }
  const frontElement = this.stack.pop();
  this.stack.push(frontElement);
  while (this.temp.length) {
    this.stack.push(this.temp.pop());
  }
  return frontElement;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.stack.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end
