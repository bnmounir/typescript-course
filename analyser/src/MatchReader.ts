// import { CsvFileReader } from "./CsvFileReader";
// import { stringToDate } from "./utils";
// import { MatchResult } from "./index";

// type ValidData = [Date, string, string, number, number, MatchResult, string];

// export class MatchReader extends CsvFileReader<ValidData> {
//     // constructor(public filename: string) {
//     //     super(filename);
//     // }
//     mapRow(e: string[]): ValidData {
//         return [
//             stringToDate(e[0]),
//             e[1],
//             e[2],
//             parseInt(e[3]),
//             parseInt(e[4]),
//             e[5] as MatchResult,
//             e[6],
//         ];
//     }
// }
