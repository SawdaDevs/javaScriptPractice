class Node {
  constructor(value) {
    //new node with null as left and right pointers
    this.value = value;
    this.right = null;
    this.left = null;

    //could introduce counter, default being zero or null
  }
}
class BinaryTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    //what to do with same value?

    //first create the node to be inserted
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      this.insertRec(currentNode, newNode);
    }
  }
  
  insertRec(currentNode, newNode) {
    if (newNode.value > currentNode.value) {
      //insert when null
      if (currentNode.right == null) {
        currentNode.right == newNode;
      }
      //if not null go right + check again
      currentNode = currentNode.right;
      this.insertRec(currentNode, newNode);
      //check again
    }
    if (newNode.value < currentNode.value) {
      //insert to left of tree
      if (currentNode.left == null) {
        currentNode.left == newNode;
      } else {
        currentNode = currentNode.left;
        //check again
        this.insertRec(currentNode, newNode);
      }
    }
  }

  remove(value) {
    //first search
    //remove if found

    // need a currentNode

    this.root = this.removeRec(this.root, value);
    //need to reinitialise the tree with the root of the new tree once value is removed. Will continue to return at each step to return modified tree.
  }

  removeRec(currentNode, value) {
    if (currentNode === null || currentNode.value === null) {
      return null;
      //if there is no value return null, no removal
    } else if (currentNode.value < value) {
      //move right
      currentNode.right = this.removeRec(currentNode.right, value);
      return currentNode;
    } else if (currentNode.value > value) {
      //move left
      currentNode.left = this.removeRec(currentNode.left, value);
      return currentNode;
    } else {
      //value is the same as node, time to remove
      if (this.isLeaf(currentNode)) {
        //can remove as is leaf
        currentNode = null;
        //make current node null, hence removing
        return currentNode;
        //return modified tree
      } else if (currentNode.right === null) {
        //nothing greater than this node
        currentNode = currentNode.left;
        //make this node the left branch
        return currentNode;
        //return modified tree
      } else if (currentNode.left === null) {
        //if there is nothing on the left, nothing less than node
        currentNode = currentNode.right;
        //make node the node on the right
        return currentNode;
        //return modified tree
      } else {
        //node has two children
        let findMinRight = this.getMin(currentNode.right);
        currentNode.value = findMinRight.value;
        //replace with minimum value in right subtree and then rermove that value from tree
        currentNode.right = this.removeRec(
          currentNode.right,
          findMinRight.value
        );
        // with the right subtree, find that value we just replaced and remove it from subtree.
        //that node will be a leaf node
        return currentNode;
        //return this subtree we created from node
      }
    }
  }

  search(currentNode, value) {
    //how do I handle value not found? keep going until I find null where the value should be, if I hit null then return null or not found

    //start from root node currentNode =this.root

    if (currentNode === null) {
      //binary tree is empty
      return false;
    } else if (currentNode.value > value) {
      //go left
      currentNode = currentNode.left;
      return this.search(currentNode, value);
    } else if (currentNode.value < value) {
      //go left
      currentNode = currentNode.right;
      return this.search(currentNode, value);
    } else {
      //same value
      return true;
    }
  }

  isLeaf(currentNode) {
    return currentNode.left === null && currentNode.right === null;
  }

  getMin(currentNode) {
    if (currentNode.left === null) {
      return currentNode;
    } else {
      return this.getMin(currentNode.left);
    }
  }

  getMax(currentNode) {
    if (currentNode.right === null) {
      return currentNode;
    } else {
      return this.getMax(currentNode.right);
    }
  }

  getRoot() {
    return this.root;
  }
}

//could this be done with while loop?
