function findMin(nums: number[]): number {
    // 利用二分法的思想，取值以后通过一定的条件判断去判断往左搜索还是往右搜索
    // [x]>[n-1]时，说明[x]在第一段，[x]的左边都比[n-1]要大，那么最小值在左边
    // [x]<[n-1]时，说明[x]在第二段或者本身数组有序，最小值在[x]的左边或者就是它
    // 比较的基准取[n-1]，二分法的区间从0到n-2比较
    const len = nums.length;
    let pivot = nums[len - 1];
    let left = 0;
    let right = len - 2;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] > pivot) {
            left = mid + 1;
        } else {
            // 有两种情况，已经是最左了，不能再左了
            if (mid === 0) {
                return nums[mid];
            }
            // 还能再左，但是再左是更大的数，说明是它本身
            if (nums[mid] < nums[mid - 1]) {
                return nums[mid];
            }
            right = mid - 1;
        }
    }
    // 如果找到最后都没有满足，那么一定就是
    return pivot;
};

