function searchMatrix(matrix: number[][], target: number): boolean {
    // 把数组当成拉平的逻辑来做二分法
    // 映射的时候转换一下坐标就好了
    let left = 0;
    const m = matrix.length; // 行
    const n = matrix[0].length; // 列
    let right = m * n - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        // 转换成对应的行和列
        let x = Math.floor(mid / n);
        let y = mid % n;
        if (target === matrix[x][y]) {
            return true;
        } else if (target < matrix[x][y]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return false;
};