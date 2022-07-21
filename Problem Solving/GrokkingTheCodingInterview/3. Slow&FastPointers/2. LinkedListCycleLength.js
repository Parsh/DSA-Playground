/**
 * Problem Statement:
 * Given the head of a LinkedList with a cycle, find the length of the cycle.
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
const calculateCycleLength = (slow) => {
  let current = slow;
  let len = 0;

  while (true) {
    current = current.next;
    len++;
    if (current === slow) break;
  }
  return len;
};

const lengthOfCycle = (head) => {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return calculateCycleLength(slow);
  }

  return 0;
};

// SMOKE TEST

// const head = new Node(1);
// head.next = new Node(2);
// head.next.next = new Node(3);
// head.next.next.next = new Node(4);
// head.next.next.next.next = new Node(5);
// head.next.next.next.next.next = new Node(6);
// head.next.next.next.next.next.next = head.next.next;
// console.log(`LinkedList cycle length: ${lengthOfCycle(head)}`);

// head.next.next.next.next.next.next = head.next.next.next;
// console.log(`LinkedList cycle length: ${lengthOfCycle(head)}`);
