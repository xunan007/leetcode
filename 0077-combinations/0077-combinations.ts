function combine(n: number, k: number): number[][] {
    // 这道题如果用暴力法的话也没办法写，因为k对应的for循环是动态的
    // 抽象成一个多叉树
    let result: number[][] = [];
    let path: number[] = [];
    const backTracking = (startIdx: number, n: number, k: number) => {
        if (k === 0) {
            result.push(path.slice());
            return;
        }
        // 这里的 startIdx 是有讲究的
        // 剪枝优化加一个判断条件
        for (let i = startIdx; i <= n && n - i + 1 >= k; i++) {
            startIdx++;
            path.push(i);
            backTracking(startIdx, n, k - 1);
            path.pop();
        }
    }
    backTracking(1, n, k);
    return result;
};