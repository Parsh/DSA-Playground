/*
 * @lc app=leetcode id=142 lang=javascript
 *
 * [142] Linked List Cycle II
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
 * approach: brute force, complexity: time O(n); space O(n)
 * @param {ListNode} head
 * @return {ListNode}
 */
// var detectCycle = function (head) {
//   let slow = head;
//   let visited = new Map();

//   while (slow) {
//     if (visited.has(slow)) return slow;
//     visited.set(slow);
//     slow = slow.next;
//   }

//   return null;
// };

/**
 * approach: fast and slow pointers, complexity: time O(n); space O(1)
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      // cycle detected
      let entry = head;
      while (entry !== slow) {
        entry = entry.next;
        slow = slow.next;
      }
      return slow;
    }
  }

  return null;
};
// @lc code=end
