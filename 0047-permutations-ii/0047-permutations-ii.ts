function permuteUnique(nums: number[]): number[][] {
    let result: number[][] = [];
    let path: number[] = [];
    const len = nums.length;
    nums.sort((a, b) => a - b);
    let onPath = new Array(len).fill(false);

    const dfs = (): void => {
        if (path.length === len) {
            result.push(path.slice());
            return;
        }
        let prev = null;
        for (let i = 0; i < nums.length; i++) {
            if (onPath[i]) {
                continue;
            }
            if (nums[i] === prev) {
                continue;
            }
            prev = nums[i];

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