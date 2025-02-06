function orangesRotting(grid: number[][]): number {
    let m = grid.length;
    let n = grid[0].length;
    let isVisited: boolean[][] = [];
    for (let i = 0; i < m; i++) {
        let arr = new Array(n).fill(false);
        isVisited.push(arr);
    }

    let count = 0;
    let broken = 0;
    let queue: number[][] = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 2) {
                broken++;
                queue.push([i, j]);
            }
            if (grid[i][j] === 1 || grid[i][j] === 2) {
                count++;
            }
        }
    }

    if (count === 0 || broken === count) {
        return 0;
    }

    if (broken === 0) {
        return -1;
    }

    let sum: number = broken;
    let path: number = -1;
    while (queue.length > 0) {
        path++;
        let len = queue.length;
        for (let i = 0; i < len; i++) {
            let [y, x] = queue.shift();
            // 先找到上下左右有效位置
            let finds = [[y - 1, x], [y + 1, x], [y, x - 1], [y, x + 1]].filter(([y, x]) => y >= 0 && y < m && x >= 0 && x < n && grid[y][x] === 1 && !isVisited[y][x]);
            for (let j = 0; j < finds.length; j++) {
                let [y, x] = finds[j];
                isVisited[y][x] = true;
                sum++;
            }
            queue.push(...finds);
        }
    }

    return sum === count ? path : -1;

};