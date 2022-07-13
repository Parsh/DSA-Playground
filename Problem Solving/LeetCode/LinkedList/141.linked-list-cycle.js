/*
 * @lc app=leetcode id=141 lang=javascript
 *
 * [141] Linked List Cycle
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * concept: slow and fast pointers, complext: time O(n)
 * reference: https://leetcode.com/problems/linked-list-cycle/discuss/1829768/JavaScript-Easy-to-understand-slow-and-fast-pointers-detailed-explanation
 * Floyd's tortoise and hare: https://www.youtube.com/watch?v=gBTe7lFR3vc
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let slow = head;
  let fast = head;

  // fast pointer reaches to null first(if there's no cycle)
  while (fast && fast.next) {
    slow = slow.next; // slow pointer
    fast = fast.next.next; // fast pointer
    if (slow === fast) return true;
  }

  return false;
};
// @lc code=end
