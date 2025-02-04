function permute(nums: number[]): number[][] {
    let result: number[][] = [];
    let path: number[] = [];
    const len = nums.length;
    const onPath: boolean[] = new Array(len).fill(false);

    const dfs = () => {
        if (path.length === len) {
            result.push(path.slice());
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            if (onPath[i]) {
                continue;
            }
            
            path.push(nums[i]);
            onPath[i] = true;
            dfs();
            path.pop();
            onPath[i] = false;
        }
    }

    dfs();
    return result;
};