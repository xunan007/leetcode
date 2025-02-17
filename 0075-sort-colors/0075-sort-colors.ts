/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    // 桶排序
    // let numA = 0;
    // let numB = 0;
    // let numC = 0;
    // const len = nums.length;
    // for (let i = 0; i < len; i++) {
    //     if (nums[i] === 0) {
    //         numA++;
    //     }
    //     if (nums[i] === 1) {
    //         numB++;
    //     }
    //     if (nums[i] === 2) {
    //         numC++;
    //     }
    // }
    // for (let i = 0; i < len; i++) {
    //     if (numA) {
    //         nums[i] = 0;
    //         numA--;
    //     } else if (numB) {
    //         nums[i] = 1;
    //         numB--;
    //     } else {
    //         nums[i] = 2;
    //         numC--;
    //     }
    // }

    // 双指针法
    let p0 = 0;
    let p2 = nums.length - 1;
    let i = 0;
    let j = 0;
    while (i <= p2) { // 注意这里的越界条件
        if (nums[i] === 0) {
            [nums[i], nums[p0]] = [nums[p0], nums[i]];
            p0++;
            if (p0 > i) { // i要在p0和p2之间
                i++;
            }
        } else if (nums[i] === 2) {
            [nums[i], nums[p2]] = [nums[p2], nums[i]];
            p2--;
        } else {
            i++;
        }
    }
};
