function subarraySum(nums: number[], k: number): number {
    // 讲解：https://leetcode.cn/problems/subarray-sum-equals-k/solutions/247991/dai-ni-da-tong-qian-zhui-he-cong-zui-ben-fang-fa-y
    // 求连续非空序列，其实就是求区间和
    // 于是可以转化成前缀和：prefixSum[j]-prefixSum[i-1]=k的情况有多少个
    // 但这里求 prefixSum 需要一轮循环，然后找个数还需要两层循环
    // 有没有办法一层循环能够解决问题，如果 prefixSum[i-1] 提前知道了呢
    // 实际上算 prefixSum[j] 的时候，prefixSum[i-1] 已经算过了，把它存到 map 里面就可以了
    let sum = 0;
    let count = 0;
    const mp: Map<number, number> = new Map();
    for (let i = 0; i < nums.length; i++) {
        sudm += nums[i];
        // 第一种情况
        if (sum === k) {
            count++;
        }
        // 第二种情况
        if (mp.has(sum - k)) {
            count += mp.get(sum - k);
        }
        // 写值
        if (mp.has(sum)) {
            mp.set(sum, mp.get(sum) + 1);
        } else {
            mp.set(sum, 1);
        }
    }
    return count;
};
