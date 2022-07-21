/**
 * Problem Statement:
 * Given the head of a Singly LinkedList, write a method to return the middle node of the LinkedList.
 * If the total number of nodes in the LinkedList is even, return the second middle node.
 *
 * Example:
 * Input: 1 -> 2 -> 3 -> 4 -> 5 -> null
 * Output: 3
 */

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const firstMiddleOfLinkedList = () => {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};

// SMOKE TEST
// head = new Node(1);
// head.next = new Node(2);
// head.next.next = new Node(3);
// head.next.next.next = new Node(4);
// head.next.next.next.next = new Node(5);

// console.log(`Middle Node: ${firstMiddleOfLinkedList(head).value}`);

// head.next.next.next.next.next = new Node(6);
// console.log(`Middle Node: ${firstMiddleOfLinkedList(head).value}`);

// head.next.next.next.next.next.next = new Node(7);
// console.log(`Middle Node: ${firstMiddleOfLinkedList(head).value}`);
