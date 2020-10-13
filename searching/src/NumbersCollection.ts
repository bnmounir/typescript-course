import { Sorter } from "./Sorter";

export class NumbersCollection extends Sorter {
    constructor(public data: number[]) {
        super();
    }

    get length(): number {
        return this.data.length;
    }

    compare(idx: number, nextIdx: number): boolean {
        const d = this.data;
        return d[idx] > d[nextIdx];
    }

    swap(idx: number, nextIdx: number): void {
        const d = this.data;
        [d[idx], d[nextIdx]] = [d[nextIdx], d[idx]];
    }
}
