class Node {
    constructor(value = null) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.meta = { duplicate: 0 };
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
        this.size = 0
    }

    addNotBalanced(value) {
        console.log("adding:  ", value)
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            // insert(value, this.root);
            console.log("this is the root", this.root.value)
            // this.findNodeAndParent(value,this.root)
            const { found, parent } = this.findNodeAndParent(value)

            if (found) {
                found.meta.duplicate = found.meta.duplicate + 1;
            } else {
                if (value < parent.value) {
                    console.log("adding to the left", parent)
                    // parent.left = setNewNodeUdateParent(newNode);
                    parent.left = newNode;
                    console.log("added to the left", parent.left)
                } else {
                    console.log("adding to the right", parent)
                    parent.right = newNode;
                    console.log("added to the right", parent.right)

                }
            }
        }
        this.size += 1;

    }

    findNodeAndParent(value, currentNode = this.root, parent = null) {
        if (!currentNode || value === currentNode.value) {
            console.log("should be null", currentNode)
            return { found: currentNode, parent }
        }
        if (value < currentNode.value) {
            return this.findNodeAndParent(value, currentNode.left, currentNode)
        } else {
            return this.findNodeAndParent(value, currentNode.right, currentNode)
        }
    }

    find(value) {
        let { found, parent } = this.findNodeAndParent(value, this.root)
        return found;
    }


    remove(value) {
        let { found: nodeToRemove, parent } = this.findNodeAndParent(value, this.root)
        // parent with no child
        const removedNodeChildren = this.combineLeftIntoRightSubtree(nodeToRemove);
        if (!nodeToRemove) { return false }
        if (nodeToRemove.meta.duplicate > 0) {
            nodeToRemove.meta.duplicate = nodeToRemove.meta.duplicate - 1

        } else if (nodeToRemove === this.root) {
            this.root = removedNodeChildren;
            if (this.root) { this.root.parent = null; }
        } else if (nodeToRemove.isParentLeftChild) {
            parent.setLeftAndUpdateParent(removedNodeChildren);
        } else {
            parent.setRightAndUpdateParent(removedNodeChildren);
        }
        this.size -= 1;
        return true;

    }

    combineLeftIntoRightSubtree(node) {
        if (node.right) {
            const leftmost = this.getLeftmost(node.right)
            leftmost.setLeftAndUpdateParent(node.left);
            return node.right;
        }

        return node.left
    }

    getLeftmost(node) {
        let leftmost = node;
        while (node.left) {
            leftmost = node.left;
        }
        return leftmost;
    }
    getRightmost(node) {
        let leftmost = node;
        while (node.right) {
            leftmost = node.left;
        }
        return leftmost;
    }

    getMax() { /* ... */ }
    getMin() { /* ... */ }

    // with generators
    * breathFirstSearch() {
        const queue = new Queue();
        queue.add(this.root);
        while (!queue.isEmpty()) {
            const node = queue.remove();
            yield node;
            if (node.left) { queue.add(node.left); }
            if (node.right) { queue.add(node.right); }
        }
    }

    * depthFirstSearch() {
        const stack = new Stack();
        stack.add(this.root);
        while (!stack.isEmpty()) {
            const node = stack.remove();
            console.log("dfs node:", node);
            yield node;
            if (node.right) { stack.add(node.right); }
            if (node.left) { stack.add(node.left); }
        }
    }

    * inOrderTraversal(node = this.root) {
        if (node && node.left) {
            yield* this.inOrderTraversal(node.left);
        }
        yield node;
        if (node && node.right) {
            yield* this.inOrderTraversal(node.right);
        }
    }

    * preOrderTraversal(node = this.root) {
        yield node;
        if (node.left) {
            yield* this.preOrderTraversal(node.left);
        }
        if (node.right) {
            yield* this.preOrderTraversal(node.right);
        }
    }

    * postOrderTraversal(node = this.root) {
        if (node.left && node) {
            yield* this.postOrderTraversal(node.left)
        }
        if (node.right && node) {
            yield* this.postOrderTraversal(node.right)
        }
        yield node;

    }
    rightRotation(node) {
        const newParent = node.left;
        const grandparent = node.parent;
        const previousRight = newParent.right;

        swapParentChild(node, newParent, grandparent);
        newParent.setRightAndUpdateParent(node);
        node.setLeftAndUpdateParent(previousRight);
        
        return newParent;
    }


}

let arrtest = [1, 2, 5, 6, 8]

function addtotree(array) {


    let mytreeTestNOTBalanced = new BinarySearchTree();
    mytreeTestNOTBalanced.addNotBalanced(1);
    mytreeTestNOTBalanced.addNotBalanced(2);
    // mytreeTest.add(0);
    mytreeTest.addNotBalanced(5);
    //  array.forEach(element => {
    //      mytreeTest.add(element);

    //  });
    console.log(mytreeTest);
}

addtotree(arrtest)