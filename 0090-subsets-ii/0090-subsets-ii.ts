function subsetsWithDup(nums: number[]): number[][] {
    let result: number[][] = [];
    let path: number[] = [];
    nums.sort((a, b) => a - b);
    const backtracking = (startIdx: number) => {
        result.push(path.slice());
        for (let i = startIdx; i < nums.length; i++) {
            // 去重逻辑
            if (i !== startIdx && nums[i] === nums[i - 1]) {
                continue;
            }
            path.push(nums[i]);
            backtracking(i + 1);
            path.pop();
        }
    }
    backtracking(0);
    return result;
};