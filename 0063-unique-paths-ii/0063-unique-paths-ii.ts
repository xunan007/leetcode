function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
    // 极端情况，第一位就有障碍物，直接不能走
    if (obstacleGrid[0][0] === 1) {
        return 0;
    }
    
    let y = obstacleGrid.length;
    let x = obstacleGrid[0].length;
    let dp: number[][] = [];
    for (let i = 0; i < y; i++) {
        dp.push(new Array(x).fill(0));
    }
    dp[0][0] = 1;
    for (let i = 0; i < y; i++) {
        for (let j = 0; j < x; j++) {
            // 遍历的起始顺序要跳过0,0
            if (i === 0 && j === 0) {
                continue;
            }
            if (obstacleGrid[i][j] === 1) {
                // 不可达
                dp[i][j] = 0;
            } else {
                // 状态转移方程
                let a = 0;
                if (j - 1 >= 0) {
                    a = dp[i][j - 1];
                }
                let b = 0;
                if (i - 1 >= 0) {
                    b = dp[i - 1][j];
                }
                dp[i][j] = a + b;
            }
        }
    }
    return dp[y - 1][x - 1];
};