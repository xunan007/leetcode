function searchRange(nums: number[], target: number): number[] {
    // 找到第一个>=X的数
    const search = (nums: number[], target: number): number => {
        let left = 0;
        let right = nums.length - 1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return left;
    }
    const left = search(nums, target);
    // 存在两种情况，一是所有的数都比target小，那么left溢出
    // 要么所有的数比left大或者left压根就不存在
    if (left === nums.length || nums[left] !== target) {
        return [-1, -1];
    }
    // 找到最后一个<=X等价于找到第一个>=X+1的数的左边
    // 注意有left一定就有right
    const right = search(nums, target + 1) - 1;
    return [left, right];
};


