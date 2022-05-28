class NODE_SLL {
  public value: number;
  public next: NODE_SLL | null;

  constructor(val: number) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  public head: any;
  public tail: any;
  public length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

/**
 * adds a new node in the list(at the end)
 * @param  {number} val
 */
  public push = (val: number) => {
    const newNode: NODE_SLL = new NODE_SLL(val);
    if (this.head === null) {
      //case: empty linked list
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = this.tail.next;
    }
    this.length++;
    return this;
  };

  /**
   * traverses the link list(from head to tail)
   */
  public traverse = () => {
    if (!this.head) return;

    let current = this.head;
    while (current) {
      console.log({ val: current.value });
      current = current.next;
    }
  };

  /**
   * removes the last element from the linked list
   */
  public pop = () => {
    if (this.length === 0) return null; // linked list is already empty

    if(this.head === this.tail) {
        // case: only one element in the list
        const current = this.head
        this.head = null
        this.tail = null
        this.length--
        return current
    }

    // find the node previous to the tail, set it to null and update the tail
    let current = this.head; // current node
    let prev = current;      // previous node
    while (current.next) {   // at tail, current.next would be null
      prev = current;
      current = current.next;
    }
    prev.next = null;        
    this.tail = prev;       // set previous node to be the new tail
    this.length--;

    return current;
  };

  /**
   * removes the first element of the linked list 
   */
  public shift = () => {
    if (this.length === 0) return null; 
    const current = this.head
    this.head = this.head.next
    if(this.tail === current) this.tail = null // case: only 1 element in the linked list(head was equal to tail)
    this.length--
    return current
  }

  /**
   * adds an element at the beginning of the linked list
   * @param  {number} val
   */
  public unshift = (val: number) => {
      const newNode = new NODE_SLL(val)
      if(this.length === 0) {
          this.head = newNode
          this.tail = this.head
      } else {
        newNode.next = this.head
        this.head = newNode  
      }
      this.length++
      return this
  }

  /**
   * fetches node corresponding to supplied index
   * @param  {number} index
   */
  public get = (index: number) => {
    if(index < 0 || index >= this.length) return null

    let counter = 0
    let current = this.head
    while(counter !== index){
        current = current.next
        counter++
    }
    return current
  }

  /**
   * modified the data of the node corresponding to supplied index 
   * @param  {number} value
   * @param  {number} index
   */
  public set = (value: number, index: number) => {
    const foundNode: NODE_SLL = this.get(index)
    if(foundNode){
        foundNode.value = value
        return true
    }
    return false
  }

  /**
   * inserts a new node at the given index
   * @param  {number} value
   * @param  {number} index
   */
  public insert = (value: number, index: number) => {
      if(index < 0 || index > this.length) return false

      if(index == 0) this.unshift(value)
      else if(index === this.length) this.push(value)
      else {
        const newNode = new NODE_SLL(value)
        const previousNode = this.get(index - 1)
        newNode.next = previousNode.next
        previousNode.next = newNode 
        this.length++ 
      }
      return true
  }

  /**
   * removes node from the supplied index
   * @param  {number} index
   */
  public remove = (index: number) => {
    if(index < 0 || index >= this.length) return false
    
    if(index == 0) return this.shift()
    else if(index === this.length - 1) return this.pop()
    else {
        const previous = this.get(index - 1)
        const current = previous.next
        previous.next = current.next
        this.length--
        return current
    }
  }

  /**
   * reverses the linked list
   */
  public reverse = () => {
      let current = this.head

      // swapping head and tail
      this.head = this.tail
      this.tail = current

      let previous = null
      let next

      for(let i = 0; i < this.length; i++){
        next = current.next
        current.next = previous

        previous = current
        current = next
      }
      return this
  }
}

// SMOKE TEST
// const sll = new SinglyLinkedList();

// PUSH
// sll.push(2);
// sll.push(3);
// sll.push(4);
// sll.push(5);
// sll.traverse();

// POP
// console.log(sll.pop());
// console.log(sll.pop());
// console.log(sll.pop());
// console.log(sll.pop());
// console.log(sll.pop());
// sll.traverse();

// SHIFT
// console.log(sll.shift());
// console.log(sll.shift());
// console.log(sll.shift());
// console.log(sll.shift());
// console.log(sll.shift());
// sll.traverse();

// UNSHIFT
// sll.unshift(1);
// sll.traverse();

// SET
// sll.set(10,2)
// sll.traverse()

// INSERT & REMOVE
// sll.traverse()
// console.log('----')
// sll.insert(10, 2)
// sll.traverse()
// console.log('----')
// sll.remove(2)
// sll.traverse()

// REVERSE
// sll.traverse()
// console.log('----')
// console.log(sll.reverse())
// sll.traverse()

