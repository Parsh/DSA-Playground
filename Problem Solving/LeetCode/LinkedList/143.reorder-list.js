/*
 * @lc app=leetcode id=143 lang=javascript
 *
 * [143] Reorder List
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
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  if (head == null) return;

  /**
   * The goal is to reverse the second half of the list and merge it into
   * the first half of the list. The first half will have at most one(in case
   * of linked list of odd length) more element than the second half.
   */
  let secondHalf = split(head);
  secondHalf = reverse(secondHalf);
  return merge(head, secondHalf);
};

const split = (head) => {
  let slow = head;
  let fast = head.next; // fast starts at a step ahead

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  const secondHead = slow.next; // slow is currently half way through the list
  return secondHead;
};

const reverse = (head) => {
  let current = head;
  let prev = null;
  while (current) {
    const next = current.next;
    current.next = prev;

    prev = current;
    current = next;
  }
  return prev;
};

const merge = (list1, list2) => {
  while (list2 !== null) {
    const list1Next = list1.next;
    const list2Next = list2.next;

    list1.next = list2;
    list2.next = list1Next;

    list1 = list1Next;
    list2 = list2Next;
  }

  // last node of first half is set to null (which otherwise creates a cycle
  //  by pointing to the last node of the reversed second half)
  list1.next = null;
};
// @lc code=end
