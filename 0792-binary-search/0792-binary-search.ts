function search(nums: number[], target: number): number {
    // 闭区间
    // let left = 0;
    // let right = nums.length - 1;
    // while(left <= right) {
    //     let middle = Math.floor((left + right) / 2);
    //     if (nums[middle] === target) {
    //         return middle;
    //     }
    //     if (nums[middle] < target) {
    //         left = middle + 1;
    //     }
    //     if (nums[middle] > target) {
    //         right = middle - 1;
    //     }
    // }
    // return -1;

    // 开区间
    let left = -1;
    let right = nums.length;
    while (left + 1 < right) {
        let middle = Math.floor((left+right)/2);
        if (nums[middle] === target) {
            return middle;
        }
        if (nums[middle] < target) {
            left = middle;
        }
        if (nums[middle] > target) {
            right = middle;
        }
    }
    return -1;
};
