/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
    // 本质是个数学问题：转置+列对调=旋转
    const r = matrix.length;
    const c = matrix[0].length;
    // 先转置
    for (let i = 0; i < r; i++) {
        for (let j = i + 1; j < c; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    // 再进行列的对调
    for (let i = 0; i < Math.floor(c / 2); i++) {
        for (let j = 0; j < r; j++) {
            [matrix[j][i], matrix[j][c - i - 1]] = [matrix[j][c - i - 1], matrix[j][i]];
        }
    }
};
