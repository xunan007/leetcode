function subarraySum(nums: number[], k: number): number {
    let mp: Map<number, number> = new Map();
    let sum = 0;
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (sum === k) {
            count++;
        }
        if (mp.has(sum - k)) {
            count += mp.get(sum - k);
        }
        if (mp.has(sum)) {
            mp.set(sum, mp.get(sum) + 1);
        } else {
            mp.set(sum, 1);
        }
    }
    return count;
};