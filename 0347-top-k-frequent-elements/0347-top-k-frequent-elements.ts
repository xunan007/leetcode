class Heap {
    private queue: any[];
    private compareFn: Function;
    constructor(fn: Function) {
        this.queue = new Array();
        this.compareFn = fn;
    }
    size() {
        return this.queue.length;
    }
    push(item: any) {
        // 先把节点推入数组最后的位置
        this.queue.push(item);
        // 开始做上浮的操作
        // 找到这个元素的父节点
        let index = this.size() - 1;
        let parent = Math.floor((index - 1) / 2);
        // 这里的比较倒是不会越界
        while (parent >= 0 && this.compare(parent, index) > 0) {
            let tmp = this.queue[parent];
            this.queue[parent] = this.queue[index];
            this.queue[index] = tmp;
            index = parent;
            parent = Math.floor((index - 1) / 2);
        }
    }
    pop(): any {
        if (this.size() === 0) {
            return;
        }
        // 把最后一个节点补到第一位
        let removeItem = this.queue[0];
        this.queue[0] = this.queue.pop();
        // 开始做沉底的操作
        // 这里可能就会出现越界了
        let index = 0;
        // 跟最小的交换
        let child = this.getChild(index);
        while (index < this.size() && child < this.size() && this.compare(index, child) > 0) {
            let tmp = this.queue[index];
            this.queue[index] = this.queue[child];
            this.queue[child] = tmp;

            index = child;
            child = this.getChild(index);
        }

        return removeItem;
    }
    getChild(index: number): number {
        let left = index * 2 + 1;
        let right = index * 2 + 2;
        // left/right都有
        if (left < this.size() && right < this.size()) {
            return this.compare(left, right) > 0 ? right : left;
        }
        // 只有 left
        if (left === this.size() - 1) {
            return left;
        }
        // 溢位就给溢位的值就好了
        return this.size();
    }
    compare(i1: number, i2: number) {
        return this.compareFn(this.queue[i1][1], this.queue[i2][1]);
    }
}

function topKFrequent(nums: number[], k: number): number[] {
    // 1. 先记录好频次
    let mp: Map<number, number> = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (mp.has(nums[i])) {
            mp.set(nums[i], mp.get(nums[i]) as number + 1);
        } else {
            mp.set(nums[i], 1);
        }
    }
    // 2. 创建一个堆
    const heap = new Heap((a, b) => a - b);
    // compare有个标准，原数列其实是[b, a]
    // 如果是a-b>0说明是要升序，如果是a-b<0说明是要降序
    for (let item of mp) {
        // 注意item是个[key, value]结构
        heap.push(item);
        if (heap.size() > k) {
            heap.pop();
        }
    }
    // 3. 按步骤推出
    let result: number[] = [];
    for (let i = 0; i < k; i++) {
        result.push(heap.pop()[0]);
    }
    return result;

};