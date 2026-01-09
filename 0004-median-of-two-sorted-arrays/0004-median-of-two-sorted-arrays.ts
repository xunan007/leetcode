function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    // hot100 里面最难的一道题
    // 参考：https://leetcode.cn/problems/median-of-two-sorted-arrays/solutions/2950686/tu-jie-xun-xu-jian-jin-cong-shuang-zhi-z-p2gd
    // 枚举分组法
    // 这里调整数组顺序、加入正负无穷的做法非常巧妙
    // 1. 保证前面数组大小要小于后面
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }
    const m = nums1.length;
    const n = nums2.length;
    // 2. 数组插入负无穷和正无穷，让i和j真正表示他们的含义
    nums1 = [-Infinity, ...nums1, Infinity];
    nums2 = [-Infinity, ...nums2, Infinity];
    // // 3. 初始化i和j，注意这里是拿原始的长度去计算j
    // let i = 0; // i表示a有多少个数在第一组
    // let j = Math.floor((m + n + 1) / 2); // j表示b有多少个数在第一组，这么算的含义就是极端情况下第一组的个数总是会比第二组多1个
    // // 开始比较
    // while (true) {
    //     if (nums1[i] <= nums2[j + 1] && nums1[i + 1] >= nums2[j]) {
    //         if ((nums1.length + nums2.length) % 2 === 0) {
    //             return (Math.max(nums1[i], nums2[j]) + Math.min(nums1[i + 1], nums2[j + 1])) / 2;
    //         }
    //         return Math.max(nums1[i], nums2[j]);
    //     }
    //     i++;
    //     j--;
    // }
    // 4. 二分法优化，这里要用开区间的写法来写
    // i这个值的唯一性，所以二分其实是在找极限的成立值，这里对比的target其实就不是固定的一个值了，而是动态的条件
    let left = 0;
    let right = m + 1;
    while (left + 1 < right) {
        // 这个i其实就相当于middle了
        let i = Math.floor((left + right) / 2);
        let j = Math.floor((m + n + 1) / 2) - i;
        if (nums1[i] <= nums2[j + 1]) { // 这是在找极限，是一个动态的条件
            left = i;
        } else {
            right = i;
        }
    }
    // 推导一下就知道最终的i值是left
    let i = left;
    let j = Math.floor((m + n + 1) / 2) - i;
    return (m + n) % 2 === 0 ? (Math.max(nums1[i], nums2[j]) + Math.min(nums1[i + 1], nums2[j + 1])) / 2 : Math.max(nums1[i], nums2[j]);
};
