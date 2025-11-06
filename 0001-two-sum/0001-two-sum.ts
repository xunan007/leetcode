function twoSum(nums: number[], target: number): number[] {
    const mp: Map<number, number> = new Map();
    // 注意当出现两个相同时，前一个会去覆盖后一个，就是要这么处理
    for (let i = 0; i < nums.length; i++) {
        mp.set(nums[i], i);
    }
    for (let i = 0; i < nums.length; i++) {
        let left = target - nums[i];
        if (mp.has(left) && mp.get(left) !== i) {
            return [i, mp.get(left)];
        }
    }
    return [];
};
