/*
 * @lc app=leetcode id=225 lang=javascript
 *
 * [225] Implement Stack using Queues
 */

// @lc code=start

var MyStack = function () {
  this.queue = []; // only use: push + shift or unshift + pop
  this.temp = []; // second queue
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  return this.queue.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  while (this.queue.length > 1) {
    this.temp.push(this.queue.shift());
  }
  const poppedElement = this.queue.shift();
  this.queue = this.temp;
  this.temp = [];

  return poppedElement;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  const element = this.pop();
  this.queue.push(element);
  return element;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.queue.length === 0;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// @lc code=end
