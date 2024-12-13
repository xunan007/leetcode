function search(nums: number[], target: number): number {
    // 首先先拿到最小值的 index
    let min = -1;
    let index = -1;
    const len = nums.length;
    const pivot = nums[len - 1];
    let left = 0;
    let right = len - 2;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] > pivot) {
            left = mid + 1;
        } else {
            if (mid === 0 || (mid !== 0 && nums[mid] < nums[mid - 1])) {
                min = nums[mid];
                index = mid;
                break;
            }
            right = mid - 1;
        }
    }
    if (index === -1) {
        index = len - 1;
        min = pivot;
    }
    // 继续二分
    // 先排除特殊情况
    if (target === min) {
        return index;
    }
    if (target < min) {
        return -1;
    }
    // 开始分左右
    if (index === 0) {
        left = 1;
        right = len - 1;
    } else if (index === len - 1) {
        left = 0;
        right = len - 2;
    } else {
        if (target < nums[0]) {
            left = index + 1;
            right = len - 1;
        } else {
            left = 0;
            right = index - 1;
        }
    }
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (target === nums[mid]) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
};