function findSubsequences(nums: number[]): number[][] {
    let result: number[][] = [];
    let path: number[] = [];
    const backtracking = (startIdx: number) => {
        if (path.length >= 2) {
            result.push(path.slice());
        }
        let s: Set<number> = new Set();
        for (let i = startIdx; i < nums.length; i++) {
            // 注意这里的判定条件和去重逻辑
            if (nums[i] < path[path.length - 1] || s.has(nums[i])) {
                continue;
            }
            s.add(nums[i]);
            path.push(nums[i]);
            backtracking(i + 1);
            path.pop();
        }
    }
    backtracking(0);
    return result;
};