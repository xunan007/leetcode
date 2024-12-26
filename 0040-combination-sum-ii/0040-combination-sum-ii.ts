function combinationSum2(candidates: number[], target: number): number[][] {
    candidates.sort((a, b) => a - b);
    let result: number[][] = [];
    let path: number[] = [];
    let sum = 0;
    const backtracking = (startIdx: number) => {
        if (sum >= target) {
            if (sum === target) {
                result.push(path.slice());
            }
            return;
        }
        for (let i = startIdx; i < candidates.length; i++) {
            if (i !== startIdx && candidates[i] === candidates[i - 1]) {
                continue;
            }
            if (sum + candidates[i] > target) {
                return;
            }
            sum += candidates[i];
            path.push(candidates[i]);
            backtracking(i + 1);
            sum -= candidates[i];
            path.pop();
        }
    }
    backtracking(0);
    return result;
};