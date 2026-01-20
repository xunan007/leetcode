function majorityElement(nums: number[]): number {
    // 严格众数，众数的次数-其余数的总次数>0
    // 投票，同一个人投赞成票，不是同一个人则投反对票，最后票数一定是大于 0 的
    let result = 0;
    let votes = 0;
    for (let i = 0; i < nums.length; i++) {
        if (votes === 0) {
            votes++;
            result = nums[i];
        } else {
            if (result === nums[i]) {
                votes++;
            } else {
                votes--;
            }
        }
    }
    return result;
};
