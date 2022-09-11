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
        }
        else{
            //insert Node to right place in the tree
        }
        

    }
    remove(value){
        //first search
        //remove if found 
    }
}