function walk(curr: BinaryNode<number> | null, path: number[]): void {
    // Base Case: If no more children in the node, we return and that function is popped out the stack
    if (!curr) {
        return;
    }
    //pre
    path.push(curr.value);
    // recurse
    walk(curr.left, path);
    walk(curr.right, path);
    // post
    return;
}

export default function pre_order_search(head: BinaryNode<number>): number[] {
    const path: number[] = [];
    walk(head, path);
    console.log(path);
    return path;
}
