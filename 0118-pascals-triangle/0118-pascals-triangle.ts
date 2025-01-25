function generate(numRows: number): number[][] {
    let result: number[][] = [];
    if (numRows === 1) {
        return [[1]];
    }
    if (numRows === 2) {
        return [[1], [1, 1]];
    }
    result = [[1], [1, 1]];
    for (let i = 3; i <= numRows; i++) {
        let arr = new Array(i);
        arr[0] = 1;
        arr[i - 1] = 1;
        for (let j = 1; j < i - 1; j++) {
            arr[j] = result[i - 2][j - 1] + result[i - 2][j];
        }
        result.push(arr);
    }
    return result;
};