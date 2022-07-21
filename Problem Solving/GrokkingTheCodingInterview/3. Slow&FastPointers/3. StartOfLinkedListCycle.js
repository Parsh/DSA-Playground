/**
 * Problem Statement:
 * Given the head of a Singly LinkedList that contains a cycle,
 * write a function to find the starting node of the cycle.
 */

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

/**
 * approach: fast and slow pointers, complexity: time O(n); space O(1)
 * @param  {Node} head
 */
var findStart = function (head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      // cycle detected
      let entry = head;
      while (entry !== slow) {
        entry = entry.next;
        slow = slow.next;
      }
      return slow;
    }
  }

  return null;
};

// SMOKE TEST

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);

head.next.next.next.next.next.next = head.next.next;
console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`);
