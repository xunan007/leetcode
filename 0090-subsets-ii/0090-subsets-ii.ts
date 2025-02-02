function subsetsWithDup(nums: number[]): number[][] {
    let result: number[][] = [];
    let path: number[] = [];
    // 先排序，方便去重
    nums.sort((a, b) => a - b);
    // INPUT角度
    const dfs = (i: number) => {
        if (i === nums.length) {
            result.push(path.slice());
            return;
        }
        // 不选
        let j = i+1;
        // 去重逻辑
        while(nums[j] === nums[i]) {
            j++;
        }
        dfs(j);
        // 选
        path.push(nums[i]);
        dfs(i+1);
        path.pop();
    }
    // ANSWER角度
    
    dfs(0);
    return result;
};