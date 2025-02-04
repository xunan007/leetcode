function permute(nums: number[]): number[][] {
    let result: number[][] = [];
    let path: number[] = [];
    const len = nums.length;
    const dfs = (nums: number[]) => {
        if (path.length === len) {
            result.push(path.slice());
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            path.push(nums[i]);
            const copyNums = nums.slice();
            copyNums.splice(i, 1);
            dfs(copyNums);
            path.pop();
        }
    }

    dfs(nums);
    return result;
};