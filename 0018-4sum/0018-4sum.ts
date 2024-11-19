function fourSum(nums: number[], target: number): number[][] {
    nums = nums.sort((a, b) => a - b);
    // 极端情况
    if (target > 0 && nums[nums.length - 1] <= 0) {
        return [];
    }
    if (target < 0 && nums[0] >= 0) {
        return [];
    }
    if (target === 0 && nums.length >= 4 && nums[0] === 0 && nums[nums.length - 1] === 0) {
        return [[0, 0, 0, 0]];
    }
    if (nums.length < 4) {
        return [];
    }
    let result = [];
    // [-2, -1, 0, 0, 1, 2]
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i - 1]) {
            continue;
        }
        for (let j = i + 1; j < nums.length - 1; j++) {
            if (nums[j] === nums[j - 1] && j - 1 !== i) {
                continue;
            }
            let left = j + 1;
            let right = nums.length - 1;
            while (left < right) {
                const sum = nums[i] + nums[j] + nums[left] + nums[right];
                if (sum === target) {
                    result.push([nums[i], nums[j], nums[left], nums[right]]);
                    left++;
                    right--;
                    // 去重逻辑
                    while (left < right && nums[left] === nums[left - 1]) {
                        left++;
                    }
                    while (left < right && nums[right] === nums[right + 1]) {
                        right--;
                    }
                } else if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }
    return result;
};