/**
 * Problem Statement:
 * Given the head of a Singly LinkedList, write a function to determine
 * if the LinkedList has a cycle in it or not.
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/**
 * time-complexity: O(n); space-complexity: O(1)
 * @param  {Node} head
 */
const hasCycle = (head) => {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }

  return false;
};

// SMOKE TEST
// const head = new Node(1);
// head.next = new Node(2);
// head.next.next = new Node(3);
// head.next.next.next = new Node(4);
// head.next.next.next.next = new Node(5);
// head.next.next.next.next.next = new Node(6);
// console.log(`LinkedList has cycle: ${hasCycle(head)}`);
// head.next.next.next.next.next.next = head.next.next;
// console.log(`LinkedList has cycle: ${hasCycle(head)}`);
