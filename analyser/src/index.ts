import { CsvFileReader } from "./CsvFileReader";
import { Matcher } from "./Matcher";
import { Summary } from "./Summary";

const file = new CsvFileReader("football.csv");
const transformedData = new Matcher(file);
transformedData.load();
const matches = transformedData.matches;

const htmlSummary = Summary.winsAnalysisWithHtml("Man City");
const consoleSummary = Summary.winsAnalysisWithConsole("Man City");
htmlSummary.buildReportAndPrint(matches);
consoleSummary.buildReportAndPrint(matches);
