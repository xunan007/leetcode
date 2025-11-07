function threeSum(nums: number[]): number[][] {
    // 核心：
    // 1. 双指针，先固定头，然后再两个指针扫描
    // 2. 去重逻辑，头去重，两个指针去重（首次不去重）
    let result = [];
    let left = 0;
    let right = nums.length - 1;
    nums = nums.sort((a, b) => a - b);
    // 极端值处理
    if (nums[0] === 0 && nums[0] === nums[nums.length - 1]) {
        return [[0, 0, 0]];
    }
    if (nums[0] > 0 || nums[nums.length - 1] < 0) {
        return [];
    }
    for (let i = 0; i < nums.length; i++) {
        let left = i + 1;
        let right = nums.length - 1;
        // 去重逻辑1，二次出现的数直接跳过
        if (nums[i] === nums[i - 1]) {
            continue;
        }
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;
                // 去重逻辑2
                while (left < right && nums[left - 1] === nums[left]) {
                    left++;
                }
                while (left < right && nums[right] === nums[right + 1]) {
                    right--;
                }
            } else if (sum > 0) {
                right--;
            } else {
                left++;
            }
        }
    }
    return result;
};
