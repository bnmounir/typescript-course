import { Sorter } from "./Sorter";

export class CharCollection extends Sorter {
    constructor(public data: string) {
        super();
    }

    get length() {
        return this.data.length;
    }

    compare(idx: number, nextIdx: number): boolean {
        const d = this.data;
        return d[idx].toLowerCase() > d[nextIdx].toLowerCase();
    }

    swap(idx: number, nextIdx: number): void {
        const d = this.data.split("");
        [d[idx], d[nextIdx]] = [d[nextIdx], d[idx]];
        this.data = d.join("");
    }
}
