/**
 * Problem Statement:
 * Given the head of a LinkedList and a number ‘k’, reverse every ‘k’ sized sub-list starting from the head.
 * If, in the end, you are left with a sub-list with less than ‘k’ elements, reverse it too.
 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const traverseLinkedList = (head) => {
  let current = head;
  while (current) {
    console.log(current.val);
    current = current.next;
  }
};

/**
 * complexity:
 * - time: O(n)
 * - space: O(1)
 * @param  {Node} head
 * @param  {number} k
 */
const reverseEveryKElements = (head, k) => {
  if (k <= 1 || head === null) return head;

  let prev = null;
  let current = head;

  while (current) {
    const nonReversingLastNode = prev; // last node of the intial non-reversing part of the linked list
    const reversedSubListLastNode = current; // going to be the last node of the sub-list post reversal
    let idx = 1;
    while (idx <= k && current) {
      // reverse the links for next k items
      const next = current.next;
      current.next = prev;

      prev = current;
      current = next;
      idx++;
    }

    // re-link the reversed part properly with the non-reversed parts
    if (nonReversingLastNode !== null) nonReversingLastNode.next = prev;
    else head = prev;
    reversedSubListLastNode.next = current;

    // reset the previous pointer to be the last element of the reversed part
    prev = reversedSubListLastNode;
  }

  return head;
};

// SMOKE TEST

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = new Node(7);
head.next.next.next.next.next.next.next = new Node(8);

console.log("Nodes of original LinkedList are: ");
traverseLinkedList(head);
const k = 3;
head = reverseEveryKElements(head, k);
console.log("Nodes of reversed LinkedList are: ");
traverseLinkedList(head);
