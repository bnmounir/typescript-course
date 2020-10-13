import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharCollection } from "./CharCollection";
import { LinkedList } from "./LinkedList";

const numCollection = new NumbersCollection([10, -3, 9, 0]);
const chars = new CharCollection("helloabyE");
const linkedNums = new LinkedList();
linkedNums.add([12, -34, 54, 65, 11, 0, -1]);

numCollection.sort();
chars.sort();
linkedNums.sort();
console.log(numCollection.data);
console.log(chars.data);
linkedNums.print();
