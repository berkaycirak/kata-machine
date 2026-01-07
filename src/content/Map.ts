export default class Map<T extends string | number, V> {
    private items: [T, V][] = [];

    constructor() {}

    get(key: T): V | undefined {
        for (const [k, v] of this.items) {
            if (k === key) {
                return v;
            }
        }
        return undefined;
    }
    set(key: T, value: V): void {
        for (const item of this.items) {
            if (item[0] === key) {
                item[1] = value;
                return;
            }
        }

        this.items.push([key, value]);
    }
    delete(key: T): V | undefined {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i][0] === key) {
                const value = this.items[i][1];
                this.items.splice(i, 1);
                return value;
            }
        }

        return undefined;
    }
    size(): number {
        return this.items.length;
    }
}

