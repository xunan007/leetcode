function searchMatrix(matrix: number[][], target: number): boolean {
    // 这道题如果一个个找那太慢了，从矩阵右上角开始排除
    const row = matrix.length;
    const col = matrix[0].length;
    let i = 0;
    let j = col - 1;
    while (i >= 0 && i < row && j >= 0 && j < col) {
        if (matrix[i][j] === target) {
            return true;
        } else if (matrix[i][j] < target) {
            i++;
        } else if (matrix[i][j] > target) {
            j--;
        }
    }
    return false;
};
