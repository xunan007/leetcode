class NumArray {
    private pre: number[] = [];
    constructor(nums: number[]) {
        let sum = 0;
        for (let i = 0; i < nums.length; i++) {
            sum += nums[i];
            this.pre.push(sum);
        }
    }

    sumRange(left: number, right: number): number {
        if (left === 0) {
            return this.pre[right];
        }
        return this.pre[right] - this.pre[left - 1];
        
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */