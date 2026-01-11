/**
 * 1- If the tree is empty, create a new node and make it the root.
 * 2- While the current node is not null, compare the value to be inserted with the current node value
 * 3- If the value is less, then to same things for left subtree
 * 4- If the value is more, do the same things for the right subtree till finding a leaf to insert.
 */
interface BinarySearchTreeProps<T> {
    insert(value: T): void;
    remove(value: T): void;
}
class TestNode<T> {
    constructor(
        public data: T,
        public left: TestNode<T> | null = null,
        public right: TestNode<T> | null = null,
    ) {}
}

class BinarySearchTree<T> implements BinarySearchTreeProps<T> {
    public root: TestNode<T> | null;
    constructor() {
        this.root = null;
    }

    insert(value: T): void {
        // Create a new node with the given value
        const newNode = new TestNode(value);
        // If the tree is empty, the new node becomes the root.
        if (this.root === null) {
            this.root = newNode;
            return;
        }

        // Traverse the tree to find the correct position for insertion
        let currentNode = this.root;
        while (currentNode !== null) {
            // If the value already exits in the tree, return and log a message!
            if (currentNode.data === value) {
                console.warn("That node already exists!");
                return;
            }
            // If the value is larger than the currentNode, traverse right subtree by assigning new currentNode value
            if (value > currentNode.data) {
                // If the right subtree is empty, then insert new node to there.
                if (currentNode.right === null) {
                    currentNode.right = newNode;
                    return;
                }
                // If there are children, recurse
                currentNode = currentNode.right;
            } else if (value < currentNode.data) {
                if (currentNode.left === null) {
                    currentNode.left = newNode;
                    return;
                }
                currentNode = currentNode.left;
            }
        }
    }
    remove(value: T): void {}
}
