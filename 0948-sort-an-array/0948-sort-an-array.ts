// 参考：https://juejin.cn/post/6844903444365443080
// 桶排序（计数、基数、桶排序看另一道题：https://leetcode.com/problems/kth-largest-element-in-an-array/description/?envType=study-plan-v2&envId=top-100-liked）
function sortArray(nums: number[]): number[] {
    // return bubbleSort(nums);
    // return selectSort(nums);
    // return insertSort(nums);
    // return binaryInsertSort(nums);
    // return shellSort(nums);
    // return mergeSort(nums);
    // return fastSort(nums);
    return heapSort(nums);
};

// 复杂度O(n^2)
// 相邻两两交换把最大的赶到最后
function bubbleSort(nums: number[]): number[] {
    const len = nums.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (nums[j] > nums[j + 1]) {
                let tmp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = tmp;
            }
        }
    }
    return nums;
}

// 复杂度O(n^2)
function selectSort(nums: number[]): number[] {
    const len = nums.length;
    // 从前开始固定小的位置，间隔交换
    for (let i = 0; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            if (nums[i] > nums[j]) {
                let tmp = nums[i];
                nums[i] = nums[j];
                nums[j] = tmp;
            }
        }
    }
    return nums;
}

// 复杂度O(n^2)
// 插扑克牌的操作
// 跟插入排序有关的这几个应该是最难写的
function insertSort(nums: number[]): number[] {
    const len = nums.length;
    // [5,2,3] j=-1
    // [2,5,3] j=0
    for (let i = 1; i < len; i++) {
        let j = i - 1;
        let v = nums[i];
        while (j >= 0 && nums[j] > v) {
            // 比较的时候进行交换就可以了，不需要再在跑一遍循环
            nums[j + 1] = nums[j];
            j--;
        }
        nums[j + 1] = v;
    }
    return nums;
}

// 复杂度O(n^2)
// 用二分查找来优化插入排序，但是这里查找完就会有多一轮的移动插入
// 这里的二分查找只对刚好有序的数组有效，不然还更耗时
function binaryInsertSort(nums: number[]): number[] {
    const len = nums.length;
    for (let i = 1; i < len; i++) {
        let left = 0;
        let right = i - 1;
        // 这里直接去找第一个比它小的数
        while (left <= right) {
            let j = Math.floor((left + right) / 2);
            if (nums[i] > nums[j]) {
                left = j + 1;
            } else {
                right = j - 1;
            }
        }
        // 记得二分查找最后取的位置都是left的位置
        let v = nums[i];
        for (let m = i; m >= left; m--) {
            nums[m] = nums[m - 1];
        }
        nums[left] = v;
    }
    return nums;
}

// 复杂度O(nlogn)
// 插入排序的优化版，核心就是通过大间隔来减少移动和比较的次数
// 先做间隔N的插入排序，然后逐渐减半到间隔变成1
// 间隔因子用h=3h+1来算（Knuth提出的，直接用就行）
function shellSort(nums: number[]): number[] {
    const len = nums.length;
    // 先正推找到最大的间隔
    let maxGap = 1;
    while (maxGap * 3 + 1 < len) {
        maxGap = maxGap * 3 + 1;
    }
    for (let gap = maxGap; gap > 0; gap = (gap - 1) / 3) {
        for (let i = gap; i < len; i = i + gap) {
            let j = i - gap;
            let v = nums[i];
            while (j >= 0 && nums[j] > v) {
                nums[j + gap] = nums[j];
                j = j - gap;
            }
            nums[j + gap] = v;
        }
    }
    return nums;
}

// 复杂度O(nlogn)
// 分治法，递归->合并
function mergeSort(nums: number[]): number[] {
    if (nums.length === 0 || nums.length === 1) {
        return nums;
    }
    // 先分
    let middle = Math.floor(nums.length / 2);
    let left = mergeSort(nums.slice(0, middle));
    let right = mergeSort(nums.slice(middle));
    // 后治
    return merge(left, right);
}
function merge(nums1: number[], nums2: number[]): number[] {
    let result = [];
    let i = 0;
    let j = 0;
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            result.push(nums1[i]);
            i++;
        } else {
            result.push(nums2[j]);
            j++;
        }
    }
    if (i !== nums1.length) {
        result.push(...(nums1.slice(i)));
    } else {
        result.push(...(nums2.slice(j)));
    }
    return result;
}

// 复杂度O(nlogn)
// 分治法，通过一个中枢，用partition把数组分到中枢的左右两侧，然后递归执行快排函数，参考：https://www.cnblogs.com/sunriseblogs/p/10009890.html
// 这里split算法其实跟partition是一样的，只不过partition用的是两个指针，更好写
// let pivotIdx = partition(nums);
// return [...fastSort(nums.slice(0, pivotIdx)), nums[pivotIdx], ...fastSort(nums.slice(pivotIdx + 1))];
// 如果这样写的话可能会内存不够，写的时候先这么写，再改成传参数的形式就好了
// 快排优化：取pivot三数取中，或者切分到一定长度时候直接用插入排序，参考：https://www.cnblogs.com/vipchenwei/p/7460293.html
function fastSort(nums: number[]): number[] {
    sort(nums, 0, nums.length - 1);
    return nums;
}
function sort(nums: number[], start: number, end: number): number[] {
    if (nums.length === 0 || end - start === 0 || end < start) {
        return;
    }
    let pivotIdx = partition(nums, start, end);
    sort(nums, start, pivotIdx - 1);
    sort(nums, pivotIdx + 1, end);
}
function partition(nums: number[], start: number, end: number): number {
    // 中枢优化，取三个数，把中间的数字和中枢位置交换
    let middle = Math.floor((start + end) / 2);
    if (nums[start] > nums[middle]) {
        let tmp = nums[start];
        nums[start] = nums[middle];
        nums[middle] = tmp;
    }
    if (nums[middle] > nums[end]) {
        let tmp = nums[middle];
        nums[middle] = nums[end];
        nums[end] = tmp;
    }
    let tmp = nums[start];
    nums[start] = nums[middle];
    nums[middle] = tmp;
    // 真正开始分区
    let left = start + 1;
    let right = end;
    let pivot = nums[start];
    while (left < right) {
        if (nums[left] > pivot && nums[right] < pivot) {
            let tmp = nums[left];
            nums[left] = nums[right];
            nums[right] = tmp;
            left++;
            right--;
        } else {
            if (nums[left] <= pivot) {
                left++;
            }
            if (nums[right] >= pivot) {
                right--;
            }
        }
    }
    let index = 0;
    if (nums[left] < pivot) {
        nums[start] = nums[left];
        nums[left] = pivot;
        index = left;
    } else {
        nums[start] = nums[left - 1];
        nums[left - 1] = pivot;
        index = left - 1;
    }
    return index;
}

// 复杂度O(nlogn)
// 通过建立大顶堆后，然后不断把末尾元素和头元素交换，然后头元素沉底来达到最终的排序效果
// 注意沉底的时候要剔除掉已经排序好的元素，不然就陷入死循环了
function HeapSort(nums: number[]): number[] {
    // 堆排序：建造一个大顶堆
    // 先上浮再下浮
    // 先找到有多少根节点

    const swap = (nums, i, j) => {
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    const maxHeapify = (nums, i, size) => {
        const l = 2 * i + 1;
        const r = 2 * i + 2;
        let largest = i;
        // 找左和右到底哪个是最大
        if (l < size && nums[l] > nums[largest]) {
            largest = l;
        }
        if (r < size && nums[r] > nums[largest]) {
            largest = r;
        }
        if (largest !== i) {
            swap(nums, i, largest);
            // 注意堆排序只需要递归其中一个分支即可
            maxHeapify(nums, largest, size);
        }
    }

    // 先上浮
    for (let j = Math.floor(nums.length / 2) - 1; j >= 0; j--) {
        maxHeapify(nums, j, nums.length);
    }

    // 上浮完了，开始出货
    // 其实这也是一个下沉的过程
    let size = nums.length;
    while (size > 0) {
        size--;
        swap(nums, 0, size);
        maxHeapify(nums, 0, size);
    }

    return nums;
};
