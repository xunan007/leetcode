function subsets(nums: number[]): number[][] {
    let result: number[][] = [];
    let path: number[] = [];
    const backtracking = (startIdx: number) => {
        // 注意这里不用 return 了
        result.push(path.slice());
        for (let i = startIdx; i < nums.length; i++) {
            path.push(nums[i]);
            backtracking(i + 1);
            path.pop();
        }
    }
    backtracking(0);
    return result;
};