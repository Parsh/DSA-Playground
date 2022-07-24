/**
 * Problem Statement:
 * Given the head of a Singly LinkedList, reverse the LinkedList. Write a function to return the new head of the reversed LinkedList.
 *
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

const reverseLinkedList = (head) => {
  let prev = null;
  let current = head;

  while (current) {
    const next = current.next;
    current.next = prev;

    prev = current;
    current = next;
  }
  return prev;
};

// SMOKE TEST
// const head = new Node(2);
// head.next = new Node(4);
// head.next.next = new Node(6);
// head.next.next.next = new Node(8);
// head.next.next.next.next = new Node(10);

// console.log("Nodes of original LinkedList are: ");
// traverseLinkedList(head);
// const reversedLinkedList = reverseLinkedList(head);
// console.log("Nodes of reversed LinkedList are: ");
// traverseLinkedList(reversedLinkedList);
