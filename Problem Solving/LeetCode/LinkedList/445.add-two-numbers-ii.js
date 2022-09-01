/*
 * @lc app=leetcode id=445 lang=javascript
 *
 * [445] Add Two Numbers II
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
  const stack1 = [];
  while (l1) {
    stack1.push(l1.val);
    l1 = l1.next;
  }

  const stack2 = [];
  while (l2) {
    stack2.push(l2.val);
    l2 = l2.next;
  }

  let carry = 0;
  const list = new LinkedList();
  while (stack1.length && stack2.length) {
    const sum = stack1.pop() + stack2.pop() + carry;
    list.push(sum % 10);
    carry = Math.floor(sum / 10);
  }

  while (stack1.length) {
    const sum = stack1.pop() + carry;
    list.push(sum % 10);
    carry = Math.floor(sum / 10);
  }

  while (stack2.length) {
    const sum = stack2.pop() + carry;
    list.push(sum % 10);
    carry = Math.floor(sum / 10);
  }

  if (carry) list.push(carry);

  list.reverse();
  return list.head;
};

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
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

  reverse() {
    let current = this.head;
    let prev = null;
    while (current) {
      const next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    return (this.head = prev);
  }
}
// @lc code=end
