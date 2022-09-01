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
  const list = new LinkedList();

  let carry = 0;
  while (l1 && l2) {
    const sum = l1.val + l2.val + carry;
    list.push(sum % 10);
    carry = Math.floor(sum / 10);
    l1 = l1.next;
    l2 = l2.next;
  }

  while (l1) {
    const sum = l1.val + carry;
    list.push(sum % 10);
    carry = Math.floor(sum / 10);
    l1 = l1.next;
  }

  while (l2) {
    const sum = l2.val + carry;
    list.push(sum % 10);
    carry = Math.floor(sum / 10);
    l2 = l2.next;
  }

  if (carry) list.push(carry);

  return list.head;
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
