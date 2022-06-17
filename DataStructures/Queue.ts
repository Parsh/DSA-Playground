// Queue(FIFO): Array Implementation
// const queue: string[] = []

// --- push & pop ---
// queue.push('One')
// queue.push('Two')
// queue.push('Three')
// queue.shift()  'One'
// queue.shift()  'Two'
// queue.shift()  'Three'

// --- unshift & shift ---
// queue.unshift('One')
// queue.unshift('Two')
// queue.unshift('Three')
// queue.pop()  'Three'
// queue.pop()  'Two'
// queue.pop()  'One'

// Queue(FIFO): Linked List Implementation

class QueueNode {
    public value: string
    public next: QueueNode | null
    constructor(value: string){
        this.value = value
        this.next = null
    }
}

class Queue {
    public first: QueueNode | null
    public last: QueueNode | null
    public length: number

    constructor(){
        this.first = null
        this.last = null
        this.length = 0
    }

    /**
     * Queue enqueue: singly linked list's push operation(constant time insertion)
     * @param  {string} val
     */
    public enqueue = (val: string) => {  
        const newNode = new QueueNode(val)

        if(this.length === 0){
            this.first = newNode
            this.last = this.first
        } else {
            (this.last as QueueNode).next = newNode
            this.last = newNode
        }
        this.length++
        return this.length
    }

    /**
     * Queu dequeue: singly linked list's shift operation(constant time removal, unlike linked list's pop)
     */
    public dequeue = () => {  
        if(this.length === 0) return null

        let poppedNode: QueueNode 
        if(this.length === 1){
            poppedNode = (this.first as QueueNode)
            this.first = null
            this.last = null
        } else {
            poppedNode = (this.first as QueueNode)
            this.first = (this.first as QueueNode).next
            poppedNode.next = null
        }
        this.length--
        return poppedNode
    }
}

// SMOKE TEST
// const queue = new Queue()
// queue.enqueue('One')
// queue.enqueue('Two')
// queue.enqueue('Three')
// console.log(queue.dequeue())
// console.log(queue.dequeue())
// console.log(queue.dequeue())
