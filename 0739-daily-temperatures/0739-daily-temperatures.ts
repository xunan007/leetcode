function dailyTemperatures(temperatures: number[]): number[] {
    // let record: number[] = [];
    // let result = [];
    // for (let i = temperatures.length - 1; i >= 0; i--) {
    //     while (record[record.length - 1] && temperatures[i] >= temperatures[record[record.length - 1]]) {
    //         record.pop();
    //     }
    //     if (record[record.length - 1]) {
    //         result.unshift(record[record.length - 1] - i);
    //     } else {
    //         result.unshift(0);
    //     }
    //     record.push(i);
    // }
    // return result;
    const len = temperatures.length;
    const res: number[] = new Array(len).fill(0);
    const stack: number[] = [];
    for (let i = len - 1; i >= 0; i--) {
        while(
            stack.length && 
            temperatures[i] >= temperatures[stack[stack.length - 1]]
        ) {
            stack.pop();
        }
        stack.length && (res[i] = stack[stack.length - 1] - i);
        stack.push(i);
    }
    return res;
};