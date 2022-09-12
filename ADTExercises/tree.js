class Node{
    constructor(value){
        this.value = value
        this.right = null 
        this.left = null
        //new node with null as left and right pointers

        //could introduce counter, default being zero or null
    }
}
class BinaryTree{
    constructor(root){
        this.root = null
    }
    insert(value){

    //what to do with same value?

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
    remove(value){
        //first search
        //remove if found 
    }
    removeLeafNode(){

    }
    removeOneChild(){
        
    }
    removeTwoChild(){

    }
    search(currentNode, value){
        //how do I handle value not found? keep going until I find null where the value should be, if I hit null then return null or not found
        
        //start from root node currentNode =this.root

        if (currentNode === null){
            //binary tree is empty
            return null || `${value} not found`
        }else if (currentNode.value>value){
            //go left
            currentNode = currentNode.left
            return this.search(currentNode, value)
        }else if (currentNode.value<value){
            //go left
            currentNode = currentNode.right
            return this.search(currentNode, value)
        }
        else{
            //same value
            return 'Found value'
        }

    }
}