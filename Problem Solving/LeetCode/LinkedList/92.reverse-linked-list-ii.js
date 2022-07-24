/*
 * @lc app=leetcode id=92 lang=javascript
 *
 * [92] Reverse Linked List II
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
 * complexity:
 * - time: O(n)
 * - space: O(1)
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  if (!head) return null;
  if (left === right) return head;

  let prev = null;
  let current = head;
  let idx = 1;
  while (idx < left) {
    prev = current;
    current = current.next;
    idx++;
  }
  const nonReversingLastNode = prev; // last node of the intial non-reversing part of the linked list
  const reversedSubListLastNode = current; // going to be the last node of the sub-list post reversal

  while (idx <= right) {
    // reverse the links of the nodes b/w left & right
    const next = current.next;
    current.next = prev;

    prev = current;
    current = next;
    idx++;
  }

  if (nonReversingLastNode !== null) nonReversingLastNode.next = prev;
  else head = prev; // nonReversingLastNode = null when left = 1

  reversedSubListLastNode.next = current;
  return head;
};
// @lc code=end
