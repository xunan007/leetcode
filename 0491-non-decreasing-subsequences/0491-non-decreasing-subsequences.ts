function findSubsequences(nums: number[]): number[][] {
    let result: number[][] = [];
    let path: number[] = [];
    // ANSWER角度
    const dfs = (i: number): void => {
        if (path.length >= 2) {
            result.push(path.slice());
        }
        let record: Set<number> = new Set();
        for (let j = i; j < nums.length; j++) {
            if (path.length > 0 && path[path.length - 1] > nums[j]) {
                continue;
            }
            if (record.has(nums[j])) {
                continue;
            }
            record.add(nums[j]);
            path.push(nums[j]);
            dfs(j + 1);
            path.pop();
        }
    }
    dfs(0);
    return result;
};