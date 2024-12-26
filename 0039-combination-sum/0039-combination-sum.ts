function combinationSum(candidates: number[], target: number): number[][] {
    // 这道题特殊的点在于怎么取既不遗漏又不重复
    let result: number[][] = [];
    let path: number[] = [];
    let sum = 0;
    candidates.sort((a, b) => a - b);
    const backtracking = (startIdx: number) => {
        if (sum >= target) {
            if (sum === target) {
                // 注意这里要浅复制
                result.push(path.slice());
            }
            return;
        }
        // 注意这里是怎么控制数组的
        for (let i = startIdx, j = 0; i < candidates.length; i++, j++) {
            // 注意这里的剪枝优化
            if (sum + candidates[i] > target) {
                return;
            }
            sum += candidates[i];
            path.push(candidates[i]);
            backtracking(startIdx + j);
            sum -= candidates[i];
            path.pop();
        }
    }
    backtracking(0);
    return result;
};