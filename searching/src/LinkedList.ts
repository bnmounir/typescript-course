import { Sorter } from "./Sorter";

class Node {
    next: Node | null = null;
    constructor(public data: number) {}
}

export class LinkedList extends Sorter {
    root: Node | null = null;

    constructor() {
        super();
    }

    get length(): number {
        if (!this.root) return 0;
        let node = this.root;
        let counter = 1;
        while (node.next) {
            node = node.next;
            counter++;
        }
        return counter;
    }

    add(num: number | number[]): void {
        if (num instanceof Array) {
            for (let n of num) {
                this.add(n);
            }
        } else {
            const node = new Node(num);
            if (!this.root) {
                this.root = node;
                return;
            }
            let tail = this.root;
            while (tail.next) {
                tail = tail.next;
            }
            tail.next = node;
        }
    }

    at(idx: number): Node {
        let node: Node | null = this.root;
        if (!node && idx >= this.length) {
            throw new Error("index out of bounds!");
        } else {
            let counter = 0;
            while (node) {
                if (counter === idx) return node;
                else {
                    node = node.next;
                    counter++;
                }
            }
        }
        throw new Error("Something went wrong!");
    }

    compare(idx: number, nextIdx: number): boolean {
        if (!this.root) throw new Error("Can not compare null");
        const currNode = this.at(idx).data;
        const nextNode = this.at(nextIdx).data;

        return currNode > nextNode;
    }

    swap(idx: number, nextIdx: number): void {
        if (!this.root) throw new Error("Can not swap null");
        const currNode = this.at(idx);
        const nextNode = this.at(nextIdx);

        let temp = currNode.data;
        currNode.data = nextNode.data;
        nextNode.data = temp;
    }

    print(): void {
        if (!this.root) return;
        let node: Node | null = this.root;

        while (node) {
            console.log(node.data);
            node = node.next;
        }
    }
}
