function findDuplicate(nums: number[]): number {
    // // 二分法，基于值的二分，利用次数进行二分的判定
    // let min = 1;
    // let max = nums.length - 1;
    // while (min <= max) {
    //     let mid = Math.floor((min + max) / 2);
    //     let cnt = 0;
    //     for (const x of nums) {
    //         // 找出小于等于它的数
    //         if (x <= mid) {
    //             cnt++;
    //         }
    //     }
    //     // 这里很特殊
    //     // 如果发现计数比本身mid能容纳的个数多即1～mid，那么说明重复数在这里
    //     if (cnt > mid) {
    //         max = mid - 1;
    //     } else {
    //         // 否则在另外的一般
    //         min = mid + 1;
    //     }
    // }
    // // 最终逼近对应的值
    // return min;
    
    // 环形链表做法
    // 把数组每一个空位当作是节点，它的值就是指向下一个位置的指针
    const p = 0;
    let slow = p;
    let fast = p;
    while(true) {
        // 1x
        slow = nums[slow];
        // 2x
        fast = nums[nums[fast]];
        if (slow === fast) {
            slow = p;
            break;
        }
    }
    while(true) {
        slow = nums[slow];
        fast = nums[fast];
        if (slow === fast) {
            return slow;
        }
    }
};