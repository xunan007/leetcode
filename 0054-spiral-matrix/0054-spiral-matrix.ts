function spiralOrder(matrix: number[][]): number[] {
    // 每次遍历都是右下左上，访问过后标记当前位置
    // 一旦越界或者遇到访问过的就开始调换方向
    const r = matrix.length;
    const c = matrix[0].length;
    const sum = r * c;
    const result = [];

    let x = 0; // 列
    let y = 0; // 行
    let change = 0;

    const move = (x: number, y: number, change: number): { x: number, y: number } => {
        let _x = x;
        let _y = y;
        const _change = change % 4;
        if (_change === 0) {
            _x++;
        }
        if (_change === 1) {
            _y++;
        }
        if (_change === 2) {
            _x--;
        }
        if (_change === 3) {
            _y--;
        }
        return { x: _x, y: _y };
    }

    for (let i = 0; i < sum; i++) {
        result.push(matrix[y][x]);
        matrix[y][x] = null;
        let { x: moveX, y: moveY } = move(x, y, change);
        if (moveX < 0 || moveY < 0 || moveX >= c || moveY >= r || matrix[moveY][moveX] === null) {
            // 转向
            change++;
            let p = move(x, y, change);
            x = p.x;
            y = p.y
        } else {
            x = moveX;
            y = moveY;
        }
    }

    return result;
};
