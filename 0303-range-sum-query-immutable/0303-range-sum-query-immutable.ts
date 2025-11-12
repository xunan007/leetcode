// 前缀和：https://leetcode.cn/problems/range-sum-query-immutable/solutions/627185/jian-dan-wen-ti-xi-zhi-fen-xi-qian-tan-q-t2nz
class NumArray {
    currSum: number[];
    constructor(nums: number[]) {
        this.currSum = [];
        // 先转换成前缀和数组
        let sum = 0;
        for (let i = 0; i < nums.length; i++) {
            sum += nums[i];
            this.currSum.push(sum);
        }
    }

    sumRange(left: number, right: number): number {
        return this.currSum[right] - (left !== 0 ? this.currSum[left - 1] : 0);
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
