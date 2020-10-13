export const stringToDate = (date: string) => {
    let numArr: number[] = date.split("/").map((e) => parseInt(e));
    if (numArr.length > 3) throw new Error("What the fuck are you doing!");
    return new Date(numArr[2], numArr[1] - 1, numArr[0]);
};
