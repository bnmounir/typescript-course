import { ValidData } from "./ValidData";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { ConsoleReport } from "./reports/ConsoleReports";
import { HtmlReport } from "./reports/HtmlReport";

export interface Analyzer {
    run(matches: ValidData[]): string;
}

export interface OutputTarget {
    print(report: string): void;
}

export class Summary {
    static winsAnalysisWithHtml(team: string): Summary {
        return new Summary(new WinsAnalysis(team), new HtmlReport());
    }
    static winsAnalysisWithConsole(team: string): Summary {
        return new Summary(new WinsAnalysis(team), new ConsoleReport());
    }

    constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

    buildReportAndPrint(matches: ValidData[]): void {
        const output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    }
}
