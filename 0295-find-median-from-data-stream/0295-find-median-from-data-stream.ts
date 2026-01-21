class MedianFinder {
    // 左边大顶堆，右边小顶堆
    // 约定左边最多比右边大 1
    // 区分奇偶
    // 注意建堆才需要遍历
    // 插入和删除实际上只需要上浮、下沉的操作，不需要再建堆了
    // 插入：插到最后，开始上浮
    // 删除：最后一个去掉，然后补到第一位，开始下沉
    private lheap: number[];
    private rheap: number[];
    constructor() {
        this.lheap = [];
        this.rheap = [];
    }

    addNum(num: number): void {
        const ln = this.lheap.length;
        const rn = this.rheap.length;
        // 左右大小相同
        if (ln === rn) {
            if (ln === 0) {
                this.lheap.push(num);
            } else {
                if (num > this.rheap[0]) {
                    // 左边插入右边的头
                    this.lheap.push(this.rheap[0]);
                    this.maxShiftUp(this.lheap, this.lheap.length - 1);
                    // 右边去头后插入新值（相当于直接替换头）
                    this.rheap[0] = num;
                    this.minShiftDown(this.rheap, 0);
                } else {
                    // 左边插入新值
                    this.lheap.push(num);
                    this.maxShiftUp(this.lheap, this.lheap.length - 1);
                }
            }
        } else {
            if (num >= this.lheap[0]) {
                // 右边插入新值
                this.rheap.push(num);
                this.minShiftUp(this.rheap, this.rheap.length - 1);
            } else {
                // 右边插入左边的头
                this.rheap.push(this.lheap[0]);
                this.minShiftUp(this.rheap, this.rheap.length - 1);
                // 左边去头后插入新值
                this.lheap[0] = num;
                this.maxShiftDown(this.lheap, 0);
            }
        }
    }

    findMedian(): number {
        if ((this.lheap.length + this.rheap.length) % 2 === 0) {
            return (this.lheap[0] + this.rheap[0]) / 2;
        }
        return this.lheap[0];
    }

    private maxShiftUp(nums: number[], i: number) {
        const parent = Math.floor((i - 1) / 2);
        if (parent >= 0 && nums[i] > nums[parent]) {
            [nums[i], nums[parent]] = [nums[parent], nums[i]];
            this.maxShiftUp(nums, parent);
        }
    }

    private maxShiftDown(nums: number[], i: number) {
        let largest = i;
        const size = nums.length;
        if (2 * i + 1 < size && nums[2 * i + 1] > nums[largest]) {
            largest = 2 * i + 1;
        }
        if (2 * i + 2 < size && nums[2 * i + 2] > nums[largest]) {
            largest = 2 * i + 2;
        }
        if (i !== largest) {
            [nums[i], nums[largest]] = [nums[largest], nums[i]];
            this.maxShiftDown(nums, largest);
        }
    }

    private minShiftUp(nums: number[], i: number) {
        const parent = Math.floor((i - 1) / 2);
        if (parent >= 0 && nums[i] < nums[parent]) {
            [nums[i], nums[parent]] = [nums[parent], nums[i]];
            this.minShiftUp(nums, parent);
        }
    }

    private minShiftDown(nums: number[], i: number) {
        let smallest = i;
        const size = nums.length;
        if (2 * i + 1 < size && nums[2 * i + 1] < nums[smallest]) {
            smallest = 2 * i + 1;
        }
        if (2 * i + 2 < size && nums[2 * i + 2] < nums[smallest]) {
            smallest = 2 * i + 2;
        }
        if (i !== smallest) {
            [nums[i], nums[smallest]] = [nums[smallest], nums[i]];
            this.minShiftDown(nums, smallest);
        }
    }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
