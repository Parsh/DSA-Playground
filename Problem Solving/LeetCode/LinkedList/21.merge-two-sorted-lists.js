/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let head;
  let tail;

  while (list1 || list2) {
    let current;

    if (list1 && list2) {
      if (list1.val <= list2.val) {
        current = list1;
        list1 = list1.next;
      } else {
        current = list2;
        list2 = list2.next;
      }
    } else if (list1) {
      current = list1;
      list1 = list1.next;
    } else if (list2) {
      current = list2;
      list2 = list2.next;
    }

    if (!head) {
      head = current;
      tail = current;
    } else {
      tail.next = current;
      tail = current;
    }
  }

  return head ? head : list1;
};
// @lc code=end
