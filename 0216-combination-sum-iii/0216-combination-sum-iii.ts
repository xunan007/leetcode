function combinationSum3(k: number, n: number): number[][] {
    const path = [];
    const result = [];

    const dfs = (i: number) => {
        const sum = path.reduce((a, c) => a + c, 0);
        // 做减枝
        if (sum > n) {
            return;
        }
        if (path.length === k) {
            if (sum === n) {
                result.push(path.slice());
            }
            return;
        }

        for (let j = i; j < 9; j++) {
            path.push(j + 1);
            dfs(j + 1);
            path.pop();
        }
    };

    dfs(0);
    return result;
};
