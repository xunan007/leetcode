function reverseWords(s: string): string {
    let arr = s.split('');
    // 先找到头部没有空格的第一个 index 位置
    let start = 0;
    while (arr[start] === ' ') {
        start++;
    }
    let end = arr.length - 1;
    while(arr[end] === ' ') {
        end--;
    }
    // 处理中间部份的空格
    let slow = start;
    let fast = start;
    for (; fast <= end; fast++) {
        if (!(arr[fast] === ' ' && arr[fast - 1] === ' ')) {
            arr[slow++] = arr[fast];
        }
    }
    // 更新 end 的值
    end = slow - 1;
    // 得到纯粹的 [start,end]，开始做反转
    const reverse = (start, end) => {
        while (start < end) {
            let tmp = arr[start];
            arr[start] = arr[end];
            arr[end] = tmp;
            start++;
            end--;
        }
    };
    console.log(arr);
    // 1. 先反转整串字符串
    reverse(start, end);
    // 2. 对每个单词做反转
    let stamp = start;
    let i = start;
    while (i <= end) {
        if (arr[i] === ' ') {
            // 找到单词界限了，那么开始操作
            reverse(stamp, i - 1);
            // 重新设置标识
            stamp = i + 1;
        }
        i++;
    }
    // 最后一个词
    reverse(stamp, i - 1);
    return arr.slice(start, end + 1).join('');
};
