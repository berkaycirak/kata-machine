export default class MinHeap {
    public length: number;
    private data: number[];

    constructor() {}

    insert(value: number): void {}
    delete(): number {}

    private heapifyDown(idx: number): void {
        const leftIndex = this.leftChild(idx);
        const rightIndex = this.rightChildren(idx);
        // Guard clause to stop heapifyDown early if we're at a leaf node(i.e., no children to compare and potentially swap with)
        // We assumed, we are filling from left to right. So, if there is no left children, there will be no right children at all
        if (idx >= this.length || leftIndex >= this.length) {
            return;
        }
    }

    private heapifyUp(idx: number): void {
        if (idx === 0) return;
        const parentIdx = this.parent(idx);
        const parentValue = this.data[parentIdx];
        const currentValue = this.data[idx];

        if (parentValue > currentValue) {
            // swap
            this.data[idx] = parentValue;
            this.data[parentIdx] = currentValue;
            // heapify Up
            this.heapifyUp(parentIdx);
        }
    }

    private parent(idx: number): number {
        return Math.floor((idx - 1) / 2);
    }

    private leftChild(idx: number): number {
        return idx * 2 + 1;
    }
    private rightChildren(idx: number): number {
        return idx * 2 + 2;
    }
}

