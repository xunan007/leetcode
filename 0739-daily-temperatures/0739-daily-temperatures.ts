function dailyTemperatures(temperatures: number[]): number[] {
    const len = temperatures.length;
    let record: number[] = [];
    let result = new Array(len).fill(0);
    for (let i = len - 1; i >= 0; i--) {
        while (record[record.length - 1] && temperatures[i] >= temperatures[record[record.length - 1]]) {
            record.pop();
        }
        if (record[record.length - 1]) {
            // 注意这里不要用 unshift，不然执行会超时
            // 直接按位写就好了
            result[i] = record[record.length - 1] - i
        }
        // 如果没有就是空的呗
        
        // 然后再把记录写进去
        record.push(i);
    }
    return result;
};