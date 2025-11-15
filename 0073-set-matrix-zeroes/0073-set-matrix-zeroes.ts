/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
    // 在遍历的时候动态的去置零，这是错误的做法，会导致判断出错，所以要引入额外标记数组
    // 做法：把第一行和第一列当成是标记数组，然后用额外的两个变量判断第一行和第一列是否含0

    // 1. 先判断第一行和第一列是否含 0
    let firstRowHasZero = false;
    let firstColHasZero = false;
    for (let i = 0; i < matrix[0].length; i++) {
        if (matrix[0][i] === 0) {
            firstRowHasZero = true;
            break;
        }
    }
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][0] === 0) {
            firstColHasZero = true;
            break;
        }
    }

    // 2. 从第二行第二列开始遍历
    // 为什么第一行第一列的项不用重置，因为它本身如果有零，那么对应的那一行和那一列同样会置零
    // 这里记录的是它为1的时候其他位置可能会导致整列整行都为零的情况
    for (let i = 1; i < matrix.length; i++) {
        for (let j = 1; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                matrix[0][j] = 0;
                matrix[i][0] = 0;
            }
        }
    }

    // 3. 开始处理数组
    for (let i = 1; i < matrix.length; i++) {
        for (let j = 1; j < matrix[0].length; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }
    if (firstRowHasZero) {
        for (let i = 0; i < matrix[0].length; i++) {
            matrix[0][i] = 0;
        }
    }
    if (firstColHasZero) {
        for (let i = 0; i < matrix.length; i++) {
            matrix[i][0] = 0;
        }
    }
};
