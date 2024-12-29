function permute(nums: number[]): number[][] {
    let result: number[][] = [];
    let path: number[] = [];
    const backtracking = (list: number[]) => {
        if (path.length === nums.length) {
            result.push(path.slice());
            return;
        }
        for (let i = 0; i < list.length; i++) {
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