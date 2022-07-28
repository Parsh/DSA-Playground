/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let linkedList = new LinkedList();
  let carry = 0;
  while (l1 || l2) {
    const operand1 = l1 ? l1.val : 0;
    const operand2 = l2 ? l2.val : 0;
    const sum = operand1 + operand2 + carry;

    const digit = sum % 10;
    carry = sum > 9 ? 1 : 0;
    linkedList.push(digit);

    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }

  // add in the last carry(if exist)
  if (carry) linkedList.push(carry);
  return linkedList.head;
};

class LinkedList {
  constructor() {
    this.head = this.tail = null;
  }

  push(val) {
    const node = new ListNode(val);
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }
}
// @lc code=end
