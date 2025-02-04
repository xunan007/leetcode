function combinationSum(candidates: number[], target: number): number[][] {
    let result: number[][] = [];
    let path: number[] = [];
    let sum = 0;
    // 先排序，好判断sum
    candidates.sort((a, b) => a - b);

    const dfs = (i: number): void => {
        if (sum > target) {
            return;
        }
        if (sum === target) {
            result.push(path.slice());
            return;
        }
        for (let j = i; j < candidates.length; j++) {
            path.push(candidates[j]);
            sum += candidates[j];
            
            dfs(j);

            path.pop();
            sum -= candidates[j];
        }
    }

    dfs(0);
    return result;
};