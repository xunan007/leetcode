/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    let numA = 0;
    let numB = 0;
    let numC = 0;
    const len = nums.length;
    for (let i = 0; i < len; i++) {
        if (nums[i] === 0) {
            numA++;
        }
        if (nums[i] === 1) {
            numB++;
        }
        if (nums[i] === 2) {
            numC++;
        }
    }
    for (let i = 0; i < len; i++) {
        if (numA) {
            nums[i] = 0;
            numA--;
        } else if (numB) {
            nums[i] = 1;
            numB--;
        } else {
            nums[i] = 2;
            numC--;
        }
    }
};