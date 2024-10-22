function searchRange(nums: number[], target: number): number[] {
    // 找右边第一个比它大的，找左边第一个比它小的；当然如果这都找不到，这也是空
    // 然后两者的区间如果还有值，那铁定就是对的，否则就是空的
    // 两次二分查找复杂度也是logN
    const lb = getLeftBorder(nums, target);
    if (lb === -2) return [-1, -1];
    const rb = getRightBorder(nums, target);
    if (rb === -2) return [-1, -1];
    if (rb - lb > 1) {
        return [lb + 1, rb - 1];
    }
    return [-1, -1];

};

// 下面那些 if else 到底取左还是取右，列个简单的例子辅助解决就可以了

// 找第一个比 target 小的
// target 左边的最大，right要远离这个target
function getLeftBorder(nums, target): number {
    let left = 0;
    let right = nums.length - 1;
    if (nums[left] > target) {
        return -2;
    }
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        // 这里的比较逻辑有难度
        if (target === nums[mid]) {
            right = mid - 1; // 关键代码
        }
        if (target < nums[mid]) {
            right = mid - 1;
        }
        if (target > nums[mid]) {
            left = mid + 1;
        }
    }
    return right;
}

// 找第一个比target 大的
// target 右边的最小，left 要远离这个target
function getRightBorder(nums, target): number {
    let left = 0;
    let right = nums.length - 1;
    if (nums[right] < target) {
        return -2;
    }
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        // 这里的比较逻辑有难度
        if (target === nums[mid]) {
            left = mid + 1; // 关键代码
        }
        if (target < nums[mid]) {
            right = mid - 1;
        }
        if (target > nums[mid]) {
            left = mid + 1;
        }
    }
    return left;
}