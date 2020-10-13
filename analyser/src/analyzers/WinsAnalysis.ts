import { Analyzer } from "../Summary";
import { ValidData } from "../ValidData";
import { MatchResults } from "../MatchResults";

export class WinsAnalysis implements Analyzer {
    constructor(public team: string) {}

    run(matches: ValidData[]): string {
        let wins = 0;

        for (let match of matches) {
            if (match[1] === this.team && match[5] === MatchResults.HomeWin) {
                wins++;
            } else if (
                match[2] === this.team &&
                match[5] === MatchResults.AwayWin
            ) {
                wins++;
            }
        }
        return `${this.team} won: ${wins} times this season`;
    }
}
