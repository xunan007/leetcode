/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
    // // 1. 使用额外的标记数组
    // let m = matrix.length;
    // let n = matrix[0].length;
    // let row = new Array(m).fill(false);
    // let col = new Array(n).fill(false);
    // for (let i = 0; i < m; i++) {
    //     for (let j = 0; j < n; j++) {
    //         if (!matrix[i][j]) {
    //             row[i] = true;
    //             col[j] = true;
    //         }
    //     }
    // }
    // for (let i = 0; i < m; i++) {
    //     if (row[i] === true) {
    //         for (let j = 0; j < n; j++) {
    //             matrix[i][j] = 0;
    //         }
    //     }
    // }
    // for (let i = 0; i < n; i++) {
    //     if (col[i] === true) {
    //         for (let j = 0; j < m; j++) {
    //             matrix[j][i] = 0;
    //         }
    //     }
    // }
    // 2. 把第一行和第一列当做是标记数组
    let row0 = false;
    let col0 = false;
    let m = matrix.length;
    let n = matrix[0].length;
    for (let i = 0; i < n; i++) {
        if (!matrix[0][i]) {
            row0 = true;
            break;
        }
    }
    for (let i = 0; i < m; i++) {
        if (!matrix[i][0]) {
            col0 = true;
            break;
        }
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (!matrix[i][j]) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }
    for (let i = 1; i < m; i++) {
        if (!matrix[i][0]) {
            for (let j = 0; j < n; j++) {
                matrix[i][j] = 0;
            }
        }
    }
    for (let i = 1; i < n; i++) {
        if (!matrix[0][i]) {
            for (let j = 0; j < m; j++) {
                matrix[j][i] = 0;
            }
        }
    }
    if (row0) {
        for (let i = 0; i < n; i++) {
            matrix[0][i] = 0;
        }
    }
    if (col0) {
        for (let i = 0; i < m; i++) {
            matrix[i][0] = 0;
        }
    }
};