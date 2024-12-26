function combinationSum3(k: number, n: number): number[][] {
    let path: number[] = [];
    let result: number[][] = [];
    let sum: number = 0;
    const backtracking = (startIdx: number, depth: number) => {
        if (depth === k) {
            if (sum === n) {
                result.push(path.slice());
            }
            return;
        }
        // 剪枝优化
        for (let i = startIdx; i <= 9 - (k - path.length) + 1; i++) { // 数字不够的剪枝
            sum += i;
            path.push(i);
            // 纵向剪枝
            if (sum > n) { // 超出了，深度和广度都直接结束
                sum -= i;
                path.pop();
                return;
            }
            backtracking(i + 1, depth + 1);
            sum -= i;
            path.pop();
        }
    }
    backtracking(1, 0);
    return result;
};