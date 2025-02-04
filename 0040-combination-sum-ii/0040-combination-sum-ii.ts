function combinationSum2(candidates: number[], target: number): number[][] {
    let result: number[][] = [];
    let path: number[] = [];
    let sum: number = 0;

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
            if (j !== i && candidates[j] === candidates[j - 1]) {
                continue;
            }
            path.push(candidates[j]);
            sum += candidates[j];
            dfs(j + 1);
            path.pop();
            sum -= candidates[j];
        }
    }

    dfs(0);
    return result;
};