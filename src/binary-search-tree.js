const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
// A binary tree is a hierarchical data structure in which each node has a value (in this case, it is also a key) and links to the left and right children. The node that is at the topmost level (which is not someone else's child) is called the root. Nodes that have no children are called leaves.

// A binary search tree is a binary tree with additional properties: the value of the left child is less than the value of the parent, and the value of the right child is greater than the value of the parent for each tree node. That is, the data in the binary search tree is stored sorted. Each time you add a new or remove an existing node, the sorted order of the tree is preserved. When searching for an element, the search value is compared with the root. If the desired is greater than the root, then the search continues in the right child of the root, if less, then in the left, if equal, then the value is found and the search stops.

// Your task is to implement the class BinarySearchTree. Each instance of BinarySearchTree must have following methods:

// root — return root node of the tree
// add(data) — add node with data to the tree
// has(data) — returns true if node with the data exists in the tree and false otherwise
// find(data) — returns node with the data if node with the data exists in the tree and null otherwise
// remove(data) — removes node with the data from the tree if node with the data exists
// min — returns minimal value stored in the tree (or null if tree has no nodes)
// max — returns maximal value stored in the tree (or null if tree has no nodes)
// For example:

// const tree = new BinarySearchTree();

// tree.add(1);

// tree.add(2);

// tree.add(3);

// tree.add(4);

// tree.add(5);

// tree.root().data => 1;

// tree.min() => 1

// tree.max() => 5

// tree.remove(5);

// tree.has(5) => false

// tree.max() => 4

class BinarySearchTree {
	constructor() {
		this.myList = null;
	}
  root() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
	return this.myList;
  }

  add(data) {
    const node = this.myList;

    if(!node){
      return this.myList = new Node(data);
    } else {
      let searchNode = function(node) {
        if(data > node.data){
          if(!node.right){
          return node.right = new Node(data);
          } else {
            return searchNode(node.right);
            }
        } else if (data < node.data) {
            if(!node.left ){
              return node.left =  new Node(data);
            } else {
              return searchNode(node.left);
            }
        } else {
          return null;
        };
    };
      return searchNode(node);

    };
  }

  has(data) {
   let val = this.myList;
    while(val) {
      if(data === val.data) {
        return true;
      }
      if(data < val.data) {
        val = val.left;
      } else {
        val = val.right;
      }
    }
    return false;
  }

  find(data) {
    let n = this.myList;
    while (n) {
      if (n.data === data) {
        return n;
      } else if (data < n.data) {
        n = n.left;
      } else {
        n = n.right;
      }
    }
    return null;
  }

  remove(data) {

    const removeData = (node, data) => {

      if(!node){
        return null;
      } else if(data === node.data){
        if(!node.left && !node.right) { 
          return null;
        } 
        if(!node.left) {
          return node.right;
        };
        if(!node.right){
          return node.left;
        };

        let tmp = node.right;
        while(tmp.left){

          tmp = tmp.left;
        }

        node.data = tmp.data;

        node.right = removeData(node.right, tmp.data);

        return node;
      }

      else if(data < node.data){
        node.left = removeData(node.left, data);

        return node;
      } else {
        node.right = removeData(node.right, data);

        return node;
      }
    }

    removeData(this.myList, data);
  }

  min() {
    let curr = this.myList;

    while(curr.left){
      curr = curr.left;
    }
    return curr.data;
  }

  max() {
    let curr = this.myList;

    while(curr.right){
      curr = curr.right;
    }
    return curr.data;
  }
}

module.exports = {
  BinarySearchTree
};