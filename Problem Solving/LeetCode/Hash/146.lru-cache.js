/*
 * @lc app=leetcode id=146 lang=javascript
 *
 * [146] LRU Cache
 */

// @lc code=start
class DLL_NODE {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  traverse() {
    if (!this.head) return;
    let current = this.head;
    while (current) {
      console.log(current.key + " - " + current.val);
      current = current.next;
    }
  }

  push(key, val) {
    const node = new DLL_NODE(key, val);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;

    return node;
  }

  shift() {
    let removedNode;
    if (this.length === 0) return null;
    else if (this.length === 1) {
      removedNode = this.head;
      this.head = null;
      this.tail = null;
    } else {
      removedNode = this.head;
      const newHead = this.head.next;
      newHead.prev = null;
      this.head.next = null;
      this.head = newHead;
    }

    this.length--;
    return removedNode;
  }

  update(node, newVal) {
    if (this.tail === node) {
      node.val = newVal;
      return node;
    } else {
      // step 1:  chop the node off from its present position
      // case: node is at the least used index(this.head) and is updated
      if (this.head === node) this.shift();
      else {
        // case: node is somewhere in the middle of the DLL
        const previousNode = node.prev;
        const nextNode = node.next;

        previousNode.next = nextNode;
        nextNode.prev = previousNode;

        node.next = null;
        node.prev = null;
        this.length--;
      }
      // step 2: add the node back to the most recently used index(tail)
      return this.push(node.key, newVal);
    }
  }
}

/**
 * We are using Doubly Linked List to implement the cache(as removal from singly linked list takes linear time),
 * where head represents the least recently used element and the tail represents the most recently used element
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.cache = new DoublyLinkedList();
  this.cacheMaxCapacity = capacity;
  this.hashMap = {};
};

/**
 * The functions get and put must each run in O(1) average time complexity.
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  //   console.log("get", { key });

  if (this.hashMap[key]) {
    const node = this.hashMap[key];
    // reusing the update mechanism(tho we don't reall want to update the present value w/ anything new),
    // however, we do need to chip off the node from present position and push it to most recently used index(tail)
    // as it has been accessed
    const updatedNode = this.cache.update(node, node.val);
    this.hashMap[key] = updatedNode;
    return node.val;
  }
  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  //   console.log("put", { key, value });
  if (!this.hashMap[key]) {
    const pushedNode = this.cache.push(key, value);
    this.hashMap[key] = pushedNode;
    if (this.cache.length > this.cacheMaxCapacity) {
      // reached max capacity: remove the leact recently used key
      const removedNode = this.cache.shift();
      delete this.hashMap[removedNode.key];
    }
  } else {
    // update the value for the node and push it at the most recently used index(tail)
    const node = this.hashMap[key];
    const updatedNode = this.cache.update(node, value);
    this.hashMap[key] = updatedNode;
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end
