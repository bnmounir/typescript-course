import { stringToDate } from "./utils";
import { MatchResults } from "./MatchResults";
import { ValidData } from "./ValidData";

interface DataReader {
    read(): void;
    data: string[][];
}

export class Matcher {
    matches: ValidData[] = [];
    constructor(public reader: DataReader) {}

    load(): void {
        this.reader.read();
        this.matches = this.reader.data.map(
            (e: string[]): ValidData => [
                stringToDate(e[0]),
                e[1],
                e[2],
                parseInt(e[3]),
                parseInt(e[4]),
                e[5] as MatchResults,
                e[6],
            ]
        );
    }
}
