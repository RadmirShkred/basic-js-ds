const {NotImplementedError} = require('../extensions/index.js');

const {Node} = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
module.exports = class BinarySearchTree {
    treeRoot = null;

    root() {
        return this.treeRoot;
    }

    add(data) {
        const node = this.treeRoot;
        if (node === null) {
            this.treeRoot = new Node(data);
            return;
        } else {
            const searchTree = function (node) {
                if (data < node.data) {
                    if (node.left === null) {
                        node.left = new Node(data);
                        return;
                    } else if (node.left !== null) {
                        return searchTree(node.left);
                    }
                } else if (data > node.data) {
                    if (node.right === null) {
                        node.right = new Node(data);
                        return;
                    } else if (node.right !== null) {
                        return searchTree(node.right);
                    }
                } else {
                    return null;
                }
            };
            return searchTree(node);
        }
    }

    has(data) {
        let currentTreeRoot = this.treeRoot;
        while (currentTreeRoot.data !== data) {
            if (data < currentTreeRoot.data) {
                currentTreeRoot = currentTreeRoot.left;
            } else {
                currentTreeRoot = currentTreeRoot.right;
            }
            if (currentTreeRoot === null) {
                return false;
            }
        }
        return true;
    }

    find(data) {
        let currentTreeRoot = this.treeRoot;
        while (currentTreeRoot.data !== data) {
            if (data < currentTreeRoot.data) {
                currentTreeRoot = currentTreeRoot.left;
            } else {
                currentTreeRoot = currentTreeRoot.right;
            }
            if (currentTreeRoot === null) {
                return null;
            }
        }
        return currentTreeRoot;
    }

    remove(data) {
        return this.treeRoot = this.removeNode(this.treeRoot, data);
    }

    removeNode(node, data) {
        if (node === null) {
            return null;
        } else if (data < node.data) {
            node.left = this.removeNode(node.left, data);
            return node;
        } else if (data > node.data) {
            node.right = this.removeNode(node.right, data);
            return node;
        } else {
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }
            if (node.left === null) {
                node = node.right;
                return node;
            } else if (node.right === null) {
                node = node.left;
                return node;
            }
            let newNode = this.minNode(node.right);
            node.data = newNode.data;
            node.right = this.removeNode(node.right, newNode.data);
            return node;
        }
    }

    minNode(node) {
        if (node.left === null)
            return node;
        else
            return this.minNode(node.left);
    }

    min() {
        let currentTreeRoot = this.treeRoot;
        if (currentTreeRoot.left === null || this.treeRoot === null) {
            return null;
        }
        while (currentTreeRoot.left !== null) {
            currentTreeRoot = currentTreeRoot.left;
        }
        return currentTreeRoot.data;
    }

    max() {
        let currentTreeRoot = this.treeRoot;
        if (currentTreeRoot.right === null || this.treeRoot === null) {
            return null;
        }
        while (currentTreeRoot.right !== null) {
            currentTreeRoot = currentTreeRoot.right;
        }
        return currentTreeRoot.data;
    }
};