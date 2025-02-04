function permuteUnique(nums: number[]): number[][] {
    let result: number[][] = [];
    let path: number[] = [];
    const len = nums.length;
    nums.sort((a, b) => a - b);

    const dfs = (nums: number[]): void => {
        if (path.length === len) {
            result.push(path.slice());
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === nums[i-1]) {
                continue;
            }
            
            path.push(nums[i]);

            let copyNums = nums.slice();
            copyNums.splice(i, 1);
            dfs(copyNums);

            path.pop();
        }
    }

    dfs(nums);
    return result;
};