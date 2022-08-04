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

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

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
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  const linkedList = new LinkedList();
  while (list1 && list2) {
    if (list1.val < list2.val) {
      linkedList.push(list1.val);
      list1 = list1.next;
    } else {
      linkedList.push(list2.val);
      list2 = list2.next;
    }
  }

  while (list1) {
    linkedList.push(list1.val);
    list1 = list1.next;
  }

  while (list2) {
    linkedList.push(list2.val);
    list2 = list2.next;
  }

  return linkedList.head;
};
// @lc code=end
