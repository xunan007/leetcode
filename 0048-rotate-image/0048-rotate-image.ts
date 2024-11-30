/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
    let len = matrix.length;
    if (len === 0 || len === 1) {
        return;
    }
    // 对角线先翻转一遍
    for (let i = 0; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            let tmp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = tmp;
        }
    }
    // 中线对称两侧再翻转一遍
    let mid = Math.floor(len / 2);
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < mid; j++) {
            let tmp = matrix[i][j];
            matrix[i][j] = matrix[i][len - 1 - j];
            matrix[i][len - 1 - j] = tmp;
        }
    }
};