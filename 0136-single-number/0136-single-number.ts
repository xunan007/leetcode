function singleNumber(nums: number[]): number {
    // 用位运算
    let result = 0;
    for (const x of nums) {
        result ^= x;
    }
    return result;
};