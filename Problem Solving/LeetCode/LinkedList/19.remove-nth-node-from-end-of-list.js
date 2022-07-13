/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
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
 * complexity: time: O(n); space O(1)
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let slow = head; // would point to the node to be removed
  let fast = head; // traverses form the head to the tail of the linked list

  // corner case: single element in linked list
  if (fast.next === null) return null;

  let i = 0;
  let prev;
  while (fast) {
    fast = fast.next;
    i++;
    if (i > n) {
      prev = slow; // points to the node prior to the slow node
      slow = slow.next; // slow node starts to move once the fast node has shifted n times
    }
  }

  // if prev is undefined => the first element itself is the nth element from the end
  if (!prev) head = head.next;
  else prev.next = slow.next;

  return head;
};
// @lc code=end
