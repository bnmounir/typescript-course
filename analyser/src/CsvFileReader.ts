// import fs from "fs";

// export abstract class CsvFileReader<T> {
//     data: T[] = [];

//     constructor(public filename: string) {}

//     abstract mapRow(e: string[]): T;

//     read(): void {
//         this.data = fs
//             .readFileSync(this.filename, {
//                 encoding: "utf-8",
//             })
//             .split("\n")
//             .map((e: string): string[] => e.split(","))
//             .map(this.mapRow);
//     }
// }

import fs from "fs";

export class CsvFileReader {
    data: string[][] = [];
    constructor(public filename: string) {}

    read(): void {
        this.data = fs
            .readFileSync(this.filename, {
                encoding: "utf-8",
            })
            .split("\n")
            .map((e: string): string[] => e.split(","));
    }
}
