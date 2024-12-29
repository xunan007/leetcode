function permuteUnique(nums: number[]): number[][] {
    let result: number[][] = [];
    let path: number[] = [];
    nums.sort((a, b) => a - b);
    const backtracking = (list) => {
        if (path.length === nums.length) {
            result.push(path.slice());
            return;
        }
        for (let i = 0; i < list.length; i++) {
            if (list[i] === list[i-1]) {
                continue;
            }
            path.push(list[i]);
            let newList = list.slice();
            newList.splice(i, 1);
            backtracking(newList);
            path.pop();
        }
    }
    backtracking(nums);
    return result;
};