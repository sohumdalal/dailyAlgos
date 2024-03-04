class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.right = right;
        this.left = left;
    }
}

class BST {
    constructor() {
        this.root = null;
    }
    add(data) {
        const root = this.root;

        if (root === null) {
            this.root = new Node(data);
            return;
        }

        else {
            const searchTree = function (root) {
                if (data < root.data) {
                    if (root.left === null) {
                        root.left = new Node(data);
                        return
                    }
                    else if (root.left !== null) {
                        return searchTree(root.left);
                    }
                }
                else if (data > root.data) {
                    if (root.right === null) {
                        root.right = new Node(data);
                        return
                    }
                    else if (root.right !== null) {
                        return searchTree(root.right);
                    }
                }
                else {
                    return null;
                }
            }
            return searchTree(root);
        }
    }
    findMin() {
        let current = this.root;
        while (current.left !== null) {
            current = current.left;
        }
        return current.data;
    }

    findMax() {
        let current = this.root;
        while (current.right !== null) {
            current = current.right;
        }
        return current.data;
    }

    isPresent(data) {
        let current = this.root;
        while (current) {
            if (data === current.data) {
                return true;
            }
            if (data < current.data) {
                current = current.left;
            }
            else {
                current = current.right
            }
        }
        return false;
    }

    remove(data) {
        const removeNode = function (node, value) {
            if (node == null) {
                return null;
            }
            if (value === node.data) {
                //has no left or right children
                if (node.left === null && node.right === null) {
                    return null;
                }
                //has no left child
                if (node.left === null) {
                    return node.right;
                }
                //has no right child
                if (node.right === null) {
                    return node.left;
                }
                //has both left and right child
                let tempNode = node.right;
                while (tempNode.left !== null) {
                    tempNode = tempNode.left;
                }
                node.data = tempNode.data;
                node.right = removeNode(node.right, tempNode.data);
                return node;
            }
            else if (value < node.data) {
                node.left = removeNode(node.left, data);
                return node;
            }
            else {
                node.right = removeNode(node.right, data);
                return node;
            }
        }
        this.root = removeNode(this.root, data);
    }

    findMinHeight(node = this.root) {
        if (node == null) {
            return -1;
        }
        let left = this.findMinHeight(node.left);
        let right = this.findMinHeight(node.right);

        if (left < right) {
            return left + 1;
        }
        else {
            return right + 1;
        }
    }
    findMaxHeight(node = this.root) {
        if (node == null) {
            return -1;
        }
        let left = this.findMaxHeight(node.left);
        let right = this.findMaxHeight(node.right);

        if (left > right) {
            return left + 1;
        }
        else {
            return right + 1;
        }
    }
    isBalanced() {
        return (this.findMinHeight() >= this.findMaxHeight() - 1);
    }
    inOrder() {
        if (this.root === null) {
            return null;
        }
        const result = [];
        function traverseInOrder(node) {
            node.left && traverseInOrder(node.left);
            result.push(node.data)
            node.right && traverseInOrder(node.right);
        }
        traverseInOrder(this.root);
        return result;

    }
    preOrder() { //DFS
        if (this.root === null) {
            return null;
        }
        const result = [];
        function traversePreOrder(node) {
            result.push(node.data)
            node.left && traversePreOrder(node.left);
            node.right && traversePreOrder(node.right);
        }
        traversePreOrder(this.root);
        return result;
    }
    postOrder() {
        if (this.root === null) {
            return null;
        }
        const result = [];
        function traversePostOrder(node) {
            node.left && traversePostOrder(node.left);
            node.right && traversePostOrder(node.right);
            result.push(node.data)

        }
        traversePostOrder(this.root);
        return result;
    }

    levelOrder () { //BFS
        const result = [];
        const Q = [];

        if(this.root !== null) {
            Q.push(this.root);
            while(Q.length > 0) {
                const node = Q.shift();
                result.push(node.data);
                if(node.left !== null) {
                    Q.push(node.left);
                }
                if(node.right !== null) {
                    Q.push(node.right);
                }
            }
            return result;
        }
        return null;
    }
}

const sohumsTree = new BST();
sohumsTree.add(10);
sohumsTree.add(7);
sohumsTree.add(12);
sohumsTree.add(5);
sohumsTree.add(8);
sohumsTree.add(11);
sohumsTree.add(14);
console.log(sohumsTree.findMin());
console.log(sohumsTree.findMax());
console.log(sohumsTree.isPresent(14))
console.log(sohumsTree);
console.log(sohumsTree.remove(14));
console.log(sohumsTree);
