function minSubArrayLen(target: number, nums: number[]): number {
    let start = 0;
    let end = 0;

    let sum = 0;
    let subLength = 0;
    let result = Infinity;

    for (; end < nums.length; end++) {
        sum += nums[end];
        // 代码的精髓在这里
        while (sum >= target) {
            subLength = end - start + 1;
            if (subLength < result) {
                result = subLength;
            }
            sum -= nums[start++];
        }
    }

    return result === Infinity ? 0 : result;
};