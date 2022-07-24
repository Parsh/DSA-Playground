/**
 * Problem Statement:
 * Given the head of a LinkedList and two positions ‘p’ and ‘q’, reverse the LinkedList from position ‘p’ to ‘q’.
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

const reverseSubList = (head, left, right) => {
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

  while (idx <= right && current) {
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

// SMOKE TEST
// let head = new Node(1);
// head.next = new Node(2);
// head.next.next = new Node(3);
// head.next.next.next = new Node(4);
// head.next.next.next.next = new Node(5);

// console.log("Nodes of original LinkedList are: ");
// traverseLinkedList(head);
// head = reverseSubList(head, 2, 4);
// console.log("Nodes of reversed LinkedList are: ");
// traverseLinkedList(head);

/**
 * 
 * Problem 1: Reverse the first ‘k’ elements of a given LinkedList.
 * 
 * Solution: This problem can be easily converted to our parent problem;
 * to reverse the first ‘k’ nodes of the list, we need to pass left=1 and right=k
 * 
 * 
 * Problem 2: Given a LinkedList with ‘n’ nodes, reverse it based on its size in the following way:
 * - If ‘n’ is even, reverse the list in a group of n/2 nodes.
 * - If n is odd, keep the middle node as it is, reverse the first ‘n/2’ nodes and reverse the last ‘n/2’ nodes.
 * 
 * Solution: 
 * When ‘n’ is even we can perform the following steps:
 * - Reverse first ‘n/2’ nodes: head = reverseSubList(head, 1, n/2)
 * - Reverse last ‘n/2’ nodes: head = reverseSubList(head, n/2 + 1, n)
 * 
 * When ‘n’ is odd, our algorithm will look like:
 * - head = reverseSubList(head, 1, n/2)
 * - head = reverseSubList(head, n/2 + 2, n)
Please note the function call in the second step. We’re skipping two elements as we will be skipping the middle element.
 */
