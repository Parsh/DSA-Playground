// Stack(LIFO): Array Implementation
// const stack: string[] = []

// --- push & pop --- (insertion and removal :: constant time)
// stack.push('One')
// stack.push('Two')
// stack.push('Three')
// stack.pop()  'Three'
// stack.pop()  'Two'
// stack.pop()  'One'

// --- unshift & shift ---  (insertion and removal :: linear time)
// stack.unshift('One')
// stack.unshift('Two')
// stack.unshift('Three')
// stack.shift()  'Three'
// stack.shift()  'Two'
// stack.shift()  'One'

// Stack(LIFO): Linked List Implementation

class StackNode {
    public value: string
    public next: StackNode | null
    constructor(value: string){
        this.value = value
        this.next = null
    }
}

class Stack {
    public first: StackNode | null
    public last: StackNode | null
    public length: number

    constructor(){
        this.first = null
        this.last = null
        this.length = 0
    }

    /**
     * Stack Push: singly linked list's unshift operation(constant time insertion)
     * @param  {string} val
     */
    public push = (val: string) => {  
        const newNode = new StackNode(val)

        if(this.length === 0){
            this.first = newNode
            this.last = this.first
        } else {
            newNode.next = this.first
            this.first = newNode
        }
        this.length++
        return this.length
    }

    /**
     * Stack Pop: singly linked list's shift operation(constant time removal, unlike linked list's pop)
     */
    public pop = () => {  

        if(this.length === 0) return null

        let poppedNode: StackNode 
        if(this.length === 1){
            poppedNode = (this.first as StackNode)
            this.first = null
            this.last = null
        } else {
            poppedNode = (this.first as StackNode)
            this.first = (this.first as StackNode).next
            poppedNode.next = null
        }
        this.length--
        return poppedNode
    }
}

// SMOKE TEST
// const stack = new Stack()
// stack.push('One')
// stack.push('Two')
// stack.push('Three')
// console.log(stack.pop())
// console.log(stack.pop())
// console.log(stack.pop())
