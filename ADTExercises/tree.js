class Node{
    constructor(value){
        this.value = value
        this.right = null 
        this.left = null
        //new node with null as left and right pointers
    }
}
class BinaryTree{
    constructor(root){
        this.root = null
    }
    insert(value){
        //first create the node to be inserted
        let newNode = new Node(value)
        if(this.root === null){
            this.root = newNode
        }else{
            let currentNode = this.root
            this.insertNode(currentNode, newNode)
            }
        }
    insertRec(currentNode, newNode){
        if(newNode.value > currentNode.value){
            //insert when null
            if(currentNode.right == null){
                currentNode.right == newNode
            }
            //if not null go right + check again
            currentNode = currentNode.right
            this.insertRec(currentNode, newNode)
            //check again
        }
        if(newNode.value < currentNode.value){
            //insert to left of tree
            if(currentNode.left == null){
                currentNode.left == newNode
            }else{
                currentNode = currentNode.left 
                //check again
                this.insertRec(currentNode, newNode)
            }
        }
    }
    //what to do with same value?
    remove(value){
        //first search
        //remove if found 
    }
}