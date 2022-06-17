class NODE_DLL {
    public value: number
    public next: NODE_DLL | null
    public prev: NODE_DLL | null
    constructor(value: number){
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    public head: any
    public tail: any
    public length: number

    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    /**
     * adds a new node in the list(at the end)
     * @param  {number} val
     */    
    public push = (val: number) => {
        const newNode = new NODE_DLL(val)
        if(this.length === 0){
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode  
        }

        this.length++
        return this
    }

    /**
     * traverses the link list(from head to tail)
     */
    public traverse = () => {
        if(!this.head) return 

        let current = this.head
        while(current){
            console.log({ val: current.value });
            current = current.next
        }
    }
 
    /**
    * removes the last element from the linked list
    */
    public pop = () => {
        if(!this.tail) return

        let poppedNode
        if(this.head === this.tail){
            poppedNode = this.tail
            this.head = null
            this.tail = null
        }
        else {
            poppedNode = this.tail
            const newTail = this.tail.prev
            this.tail.prev = null
            newTail.next = null
            this.tail = newTail
        }
        this.length--
        return poppedNode
    }

    /**
     * removes the first element of the linked list 
     */
    public shift = () => {
        if(this.head === null) return 

        let poppedNode
        if(this.head === this.tail){
            poppedNode = this.head
            this.head = null
            this.tail = null
        }else {
            poppedNode = this.head
            const newHead = this.head.next
            newHead.prev = null
            this.head.next = null
            this.head = newHead
        }

        this.length--
        return poppedNode
    }

    /**
     * adds an element at the beginning of the linked list
     * @param  {number} val
     */
    public unshift = (val: number) => {
        const newNode = new NODE_DLL(val)
        
        if(this.length === 0){
            this.head = newNode
            this.tail = this.head
        } else {
            this.head.prev = newNode
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
        if(index < 0 || index >= this.length) return

        let counter, current
        if(index <= this.length/2){
            counter = 0
            current = this.head
            while(counter !== index){
                current = current.next
                counter++
            }
        } else {
            counter = this.length - 1
            current = this.tail
            while(counter !== index){
                current = current.prev
                counter--
            }
        }
        return current
    }

    /**
     * modified the data of the node corresponding to supplied index 
     * @param  {number} value
     * @param  {number} index
     */    
    public set = (index: number, val: number): boolean => {
        const foundNode: NODE_DLL = this.get(index)
        if(foundNode){
            foundNode.value = val
            return true
        }
        return false
    }

    /**
     * inserts a new node at the given index
     * @param  {number} value
     * @param  {number} index
     */
    public insert = (index: number, val: number) => {
        if(index < 0 || index > this.length) return false

        if(index === 0) this.unshift(val)
        else if(index === this.length) this.push(val)
        else {
            const newNode = new NODE_DLL(val)
            const nextNode = this.get(index)
            const prevNode = nextNode.prev

            newNode.next = nextNode
            newNode.prev = prevNode

            nextNode.prev = newNode
            prevNode.next = newNode

            this.length++
        }
        return true
    }

    /**
     * removes node from the supplied index
     * @param  {number} index
     */
    public remove = (index: number) => {
        if(index < 0 || index > this.length) return false

        if(index === 0) this.shift()
        else if(index === this.length) this.pop()
        else {
            const nodeToRemove = this.get(index)
            const previous = nodeToRemove.prev
            const next = nodeToRemove.next
            
            previous.next = next
            next.prev = previous

            nodeToRemove.prev = null
            nodeToRemove.next = null

            this.length--
        }
        return true
    }

    /**
     * reverses the linked list
     */
    public reverse = () => {
        let prev = null
        let current = this.head;
        [this.head, this.tail] = [this.tail, this.head]

        while(current){
            const next = current.next
            current.next = prev
            current.prev = next

            prev = current
            current = next
        }
        return this
    }
}

// SMOKE TEST
// const dll = new DoublyLinkedList()
// dll.push(10)
// dll.push(20)
// dll.push(30)
// dll.push(40)
// dll.push(50)
// dll.push(60)
// dll.push(70)

// dll.traverse()
// console.log(dll.pop())
// dll.traverse()
// console.log(dll.shift())
// dll.traverse()
// console.log('-----')
// console.log(dll.unshift(5))
// dll.traverse()
// console.log(dll.get(0))
// dll.set(2, 200)
// console.log('-----')
// dll.traverse()
// console.log('-----')
// dll.insert(2,400)
// dll.traverse()
// console.log('-----')
// dll.remove(2)
// dll.traverse()
// console.log('-----')
// console.log(dll.reverse())
// dll.traverse()
