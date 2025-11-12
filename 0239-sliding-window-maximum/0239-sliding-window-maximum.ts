function maxSlidingWindow(nums: number[], k: number): number[] {
    // 难点在于滑动的时候最大值会丢失，这是一个动态的过程
    // 方法：单调队列
    // 注意：如果出现滑动窗口满的情况下，下一个要出队的那个刚好就是对头那最大的那个，比如[5,4,3,2]
    // 题解：https://leetcode.cn/problems/sliding-window-maximum/solutions/667836/dong-hua-yan-shi-dan-diao-dui-lie-239hua-hc5u
    let left = 0;
    let right = 0;
    let queue: number[] = [];
    const result: number[] = [];
    for (let right = 0; right < nums.length; right++) {
        if (right < k) {
            let i = queue.length - 1;
            if (i === -1) {
                queue.push(nums[right]);
            }
            while (i >= 0) {
                if (queue[i] >= nums[right]) { // 注意这里，两个都相同的情况，也要放进去，不然会丢
                    queue.push(nums[right]);
                    break;
                } else {
                    queue.pop();
                    if (queue.length === 0) {
                        queue.push(nums[right]);
                    }
                    i--;
                }
            }
            continue;
        }
        result.push(queue[0]);
        if (queue.length === k || queue[0] === nums[left]) { // 注意这里的条件，left超出了但是还是在要去掉
            queue.shift();
        }
        left++;
        let i = queue.length - 1;
        if (i === -1) {
            queue.push(nums[right]);
        }
        while (i >= 0) {
            if (queue[i] >= nums[right]) { // 同上
                queue.push(nums[right]);
                break;
            } else {
                queue.pop();
                if (queue.length === 0) {
                    queue.push(nums[right]);
                }
                i--;
            }
        }
    }
    // 最后还有一个，补上
    result.push(queue[0]);
    return result;
};
