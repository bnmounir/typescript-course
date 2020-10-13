import { NumbersCollection } from "./NumbersCollection";

interface Sortable {
    compare(index: number, nextIndex: number): boolean;
    swap(index: number, nextIndex: number): void;
    length: number;
}

export abstract class Sorter {
    abstract length: number;
    abstract compare(i: number, j: number): boolean;
    abstract swap(i: number, j: number): void;

    sort(): void {
        const col = this;
        for (let i = 0; i < col.length; i++) {
            for (let j = 0; j < col.length - i - 1; j++) {
                if (col.compare(j, j + 1)) {
                    col.swap(j, j + 1);
                }
            }
        }
    }
}
