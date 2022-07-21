/*
 * @lc app=leetcode id=234 lang=javascript
 *
 * [234] Palindrome Linked List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const reverseLinkedList = (current) => {
  let prev = null;
  while (current) {
    const next = current.next;
    current.next = prev;

    prev = current;
    current = next;
  }
  return prev;
};

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  // step 1: split the linked list into two halves(using slow and fast pointers)
  let slow = head;
  let fast = head.next; // in case of even number of elements, slow ends up being the lower middle as fast starts at a step ahead(head.next)

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // step 2: reverse the second half
  const middle = slow.next;
  let reversed = reverseLinkedList(middle);

  // step 3: compare the two halves
  while (reversed) {
    if (head.val !== reversed.val) return false;
    head = head.next;
    reversed = reversed.next;
  }

  return true;
};
// @lc code=end
