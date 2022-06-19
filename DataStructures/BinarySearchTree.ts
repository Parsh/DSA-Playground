enum DFSTraversalTypes {
    PRE_ORDER = 'PRE_ORDER',
    IN_ORDER = 'IN_ORDER',
    POST_ORDER = 'POST_ORDER'
}

class TreeNode {
    public value: number
    public left: any
    public right: any
    constructor(value: number){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    public root: any
    constructor(){
        this.root = null
    }

    /**
     * BST insert
     * @param  {number} value
     */
    public insert = (value: number) => {
        const node = new TreeNode(value)

        if(!this.root) this.root = node
        else {
            let current = this.root
            while(true){
                if(node.value === current.value) return null
                
                if(node.value < current.value){
                    if(!current.left){
                        current.left = node
                        break
                    } else current = current.left
                } else {
                    if(!current.right) {
                        current.right = node
                        break
                    } else current = current.right
                }
            }
        }
        return this
    }

    /**
     * finds the node correponding to the supplied value in the tree
     * @param  {number} value
     */
    public find = (value: number) => {
        if(!this.root) return null

        let current = this.root
        while(current){
            if(value === current.value ) return current
            
            if( value < current.value) current = current.left
            else current = current.right
        }
        return null
    }

    /**
     * BFS: Breadth First Search
     */
    public breadthFirstSearch = () => {
        if(!this.root) return null

        const queue: TreeNode[] = []  // FIFO(push + unshift)
        const visited: number[] = []

        // initiate the queue w/ the root
        queue.push(this.root)

        while(queue.length){
            const current = (queue.shift() as TreeNode)
            if(current.left) queue.push(current.left)
            if(current.right) queue.push(current.right)
            visited.push(current.value)
        }

        return visited
    }

    /**
     * BST: Depth First Search(variants)
     * @param  {DFSTraversalTypes} traversalType
     */
    public depthFirstSearch = (traversalType: DFSTraversalTypes) => {
        if(!this.root) return

        const visited: number[] = []
        const traverse = (visitingNode: TreeNode) => {
            switch(traversalType){
                case DFSTraversalTypes.PRE_ORDER:
                    visited.push(visitingNode.value)
                    if(visitingNode.left) traverse(visitingNode.left)
                    if(visitingNode.right) traverse(visitingNode.right)
                    break

                case DFSTraversalTypes.IN_ORDER:
                    if(visitingNode.left) traverse(visitingNode.left)
                    visited.push(visitingNode.value)
                    if(visitingNode.right) traverse(visitingNode.right)
                    break

                case DFSTraversalTypes.POST_ORDER:
                    if(visitingNode.left) traverse(visitingNode.left)
                    if(visitingNode.right) traverse(visitingNode.right)
                    visited.push(visitingNode.value)
                    break
                }
        }
        traverse(this.root)
        return visited
    }

}

// SMOKE TEST
// const tree = new BinarySearchTree()
// tree.insert(10)
// tree.insert(8)
// tree.insert(30)
// tree.insert(3)
// tree.insert(9)
// tree.insert(14)
// tree.insert(33)

//     10
//   8     30
// 3  9  14   33

// console.log({tree})
// console.log('bfs: ', tree.breadthFirstSearch())
// console.log('dfs-pre: ', tree.depthFirstSearch(DFSTraversalTypes.PRE_ORDER))
// console.log('dfs-in: ', tree.depthFirstSearch(DFSTraversalTypes.IN_ORDER))
// console.log('dfs-post: ', tree.depthFirstSearch(DFSTraversalTypes.POST_ORDER))

