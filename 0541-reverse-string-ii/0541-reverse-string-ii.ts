function reverseStr(s: string, k: number): string {
    let arr = s.split('');
    const handle = (start, end) => {
        while (start < end) {
            let t = arr[start];
            arr[start] = arr[end];
            arr[end] = t;
            start++;
            end--;
        }
    }
    let start = 0;
    while (start < arr.length) {
        // 1. 处理这 2k 的前 k 个
        let end = start + k - 1;
        if (end > arr.length - 1) {
            end = arr.length - 1;
        }
        handle(start, end);
        if (arr.length - (start + 2 * k) >= 2 * k) {
            // 2. 如果剩余的长度大于等于 2k，继续循环
            start = start + 2 * k;
        } else {
            // 3. 如果剩余的长度小于 2k，要结束循环
            if (arr.length - (start + 2 * k) < k) {
                // 3.1 剩余长度小于 k，全部反转
                handle(start + 2 * k, arr.length - 1);
            } else {
                // 3.2 剩余长度大于等于 k，反转前 k 个
                handle(start + 2 * k, start + 3 * k - 1);
            }
            break;
        }

    }
    return arr.join('');
};