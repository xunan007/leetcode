function combine(n: number, k: number): number[][] {
    // 这道题如果用暴力法的话也没办法写，因为k对应的for循环是动态的
    // 抽象成一个多叉树
    let result: number[][] = [];
    let path: number[] = [];
    const dfs = (i: number): void => {
        // 剪枝1
        if (path.length === k) {
            result.push(path.slice());
            return;
        }
        // 剪枝2
        for (let j = i; j <= n && n - j + 1 >= k - path.length; j++) {
            path.push(j);
            dfs(j + 1);
            path.pop();
        }
    };
    dfs(1);
    return result;
};