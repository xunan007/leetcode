function numIslands(grid: string[][]): number {
    let m = grid.length;
    let n = grid[0].length;
    let isVisited: boolean[][] = [];
    for (let i = 0; i < m; i++) {
        let arr: boolean[] = new Array(n).fill(false);
        isVisited.push(arr);
    }
    const dfs = (y: number, x: number): void => {
        if (!(y >= 0 && y < m && x >= 0 && x < n)) {
            return;
        }
        if (isVisited[y][x]) {
            return;
        }
        isVisited[y][x] = true;
        if (grid[y][x] === '0') {
            return;
        }
        dfs(y - 1, x);
        dfs(y + 1, x);
        dfs(y, x - 1);
        dfs(y, x + 1);
    };
    let result = 0;
    // 外层套了一层遍历，因为起点可以有多个，这里要结合题目的意思来
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '1' && !isVisited[i][j]) {
                result++;
                dfs(i, j);
            }
        }
    }
    return result;
};