function maxSlidingWindow(nums: number[], k: number): number[] {
    let queue = new Array();
    let left = 0;
    let right = 0;
    let result = [];
    const push = (item) => {
        if (queue.length === 0) {
            queue.push(item);
        } else {
            // 注意这里的比较不能用 <=，不然就丢数据了
            while (queue.length > 0 && queue[queue.length - 1] < item) {
                queue.pop();
            }
            queue.push(item);
        }
    };
    const pop = (item) => {
        if (item === queue[0]) {
            queue.shift();
        }
    };
    for (; right < nums.length; right++) {
        push(nums[right]);
        if (right - left + 1 === k) {
            result.push(queue[0]);
            pop(nums[left]);
            left++;
        }
    }
    return result;
};