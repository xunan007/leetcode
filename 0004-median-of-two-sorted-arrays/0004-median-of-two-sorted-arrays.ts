function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    // hot100 里面最难的一道题
    // 参考：https://leetcode.cn/problems/median-of-two-sorted-arrays/solutions/2950686/tu-jie-xun-xu-jian-jin-cong-shuang-zhi-z-p2gd
    // 1. 先利用均匀分组，核心“公理”：第一组的最大值小于等于第二组的最小值，只有这种情况是唯一值
    // max(ai, bj) <= min(ai+1, bj+1) => ai<=ai+1 && bj <= bj+1 => ai<=bj+1 && bj <= ai+1
    // 2. （记住结论）这个唯一值也暗含着，满足ai<=bj+1&&bj<=ai+1刚好就是满足ai<=bj+1的最大值，所以二分找最大的i就可以了
    // i的定义是a里面有多少个在第一组，j的定义是b里面有多少个在第一组
    const m = nums1.length;
    const n = nums2.length;
    // 规定个数：第一组>=第二组，所以一定是nums2个数要更多
    if (m > n) {
        [nums1, nums2] = [nums2, nums1];
    }
    // 这里补充的两个占位很重要，因为i和j的含义不是index，不加那初始就没办法开始了
    nums1 = [-Infinity, ...nums1, Infinity];
    nums2 = [-Infinity, ...nums2, Infinity];
    let i = 0; // a有i个数在第一组
    let j = Math.floor((m + n + 1) / 2); // b有i个数在第一组，规定第一组比第二组要多1

    // 非二分的做法
    // while (true) {
    //     // 核心比较公式
    //     if (nums1[i] <= nums2[j + 1] && nums2[j] <= nums1[i + 1]) {
    //         break;
    //     }
    //     i++;
    //     j--;
    // }

    // 二分做法（统一用闭区间）
    let left = 0;
    let right = m;
    while (left <= right) {
        i = Math.floor(left + right);
        j = Math.floor((m + n + 1) / 2) - i;
        if (nums1[i] <= nums2[j + 1]) {
            left = i + 1; // 闭区间
        } else {
            right = i - 1; // 闭区间
        }
    }

    if ((m + n) % 2 !== 0) {
        return Math.max(nums1[i], nums2[j]);
    } else {
        return (Math.max(nums1[i], nums2[j]) + Math.min(nums1[i + 1], nums2[j + 1])) / 2;
    }
};
