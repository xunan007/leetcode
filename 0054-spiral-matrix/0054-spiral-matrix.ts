function spiralOrder(matrix: number[][]): number[] {
    let m = matrix[0].length;
    let n = matrix.length;

    let result = [];
    let loop = Math.floor(n / 2);
    let last;
    if (n % 2 === 1) {
        last = matrix[loop][loop];
    }

    let x = 0, y = 0;
    let ml = m - 1;
    let nl = n - 1;

    while (ml > 0 && nl > 0) {
        for (let i = 0; i < ml; i++) {
            result.push(matrix[y][x + i]);
        }
        x += ml;

        for (let i = 0; i < nl; i++) {
            result.push(matrix[y + i][x]);
        }
        y += nl;

        for (let i = 0; i < ml; i++) {
            result.push(matrix[y][x - i]);
        }
        x -= ml;

        for (let i = 0; i < nl; i++) {
            result.push(matrix[y - i][x]);
        }
        y -= nl;

        ml -= 2;
        nl -= 2;
        x++;
        y++;
    }

    // 处理最后的内容
    if (ml === 0 && nl === 0) {
        // 矩形，只有最后一个
        result.push(matrix[y][x]);
    } else if (ml === 0) {
        // x固定，y变化
        for (let i = 0; i <= nl; i++) {
            result.push(matrix[y + i][x]);
        }
    } else if (nl === 0) {
        // y固定，x变化
        for (let i = 0; i <= ml; i++) {
            result.push(matrix[y][x + i]);
        }
    }

    return result;

};