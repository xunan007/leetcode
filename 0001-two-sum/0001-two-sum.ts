function twoSum(nums: number[], target: number): number[] {
    const mp: Map<number, number> = new Map();
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