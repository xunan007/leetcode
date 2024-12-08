// 这道题实际上就是构建两个堆，大顶堆和小顶堆，刚好组成一个拱桥型的数据，底->顶->底，小->大-小->大
// 在构建堆的时候，对于堆的大小，总是要满足left=right或者left+1=right；元素加入a堆时，需要和b堆的栈顶去做比较
// 所以，初始化时，元素x直接加入left堆
// 当left=right时，x需要添加进left堆，如果x<right堆顶，直接进left堆；如果x>=right堆顶，right的顶进左边，x进right
// 当left>right时，x需要添加进right堆，这个时候比较的基准就是left顶
class MedianFinder {
    private left: Heap; // 大顶堆
    private right: Heap; // 小顶堆
    constructor() {
        this.left = new Heap((a, b) => a - b < 0); // 大顶堆
        this.right = new Heap((a, b) => a - b > 0); // 小顶堆
    }

    addNum(num: number): void {
        // 左顶堆优先
        if (this.left.size() === 0) {
            this.left.push(num);
            return;
        }
        if (this.left.size() === this.right.size()) {
            if (num >= this.right.top()) {
                this.left.push(this.right.top());
                this.right.modify(num);
            } else {
                this.left.push(num);
            }
            return;
        }
        // 右顶堆优先
        if (this.left.size() > this.right.size()) {
            if (num >= this.left.top()) {
                this.right.push(num);
            } else {
                this.right.push(this.left.top());
                this.left.modify(num);
            }
            return;
        }
    }

    findMedian(): number {
        if (this.left.size() === this.right.size()) {
            return (this.left.top() + this.right.top()) / 2;
        } else {
            return this.left.top();
        }
    }
}

class Heap {
    private queue: number[];
    private fn: Function;
    constructor(fn) {
        this.queue = new Array();
        this.fn = fn;
    }
    push(num: number) {
        this.queue.push(num);
        let child = this.size() - 1;
        let parent = Math.floor((child - 1) / 2);
        while (parent >= 0 && this.compare(this.queue, parent, child)) {
            this.swap(this.queue, parent, child);
            child = parent;
            parent = Math.floor((child - 1) / 2);
        }
    }
    modify(num: number) {
        this.queue[0] = num;
        let parent = 0;
        let child = this.getChild(parent);
        while (parent < this.size() && child < this.size() && this.compare(this.queue, parent, child)) {
            this.swap(this.queue, parent, child);
            parent = child;
            child = this.getChild(parent);
        }
    }
    getChild(parent: number): number {
        let left = parent * 2 + 1;
        let right = left + 1;
        if (left < this.size() && right < this.size()) {
            return this.compare(this.queue, left, right) ? right : left;
        }
        if (left < this.size()) {
            return left;
        }
        if (right < this.size()) {
            return right;
        }
        return this.size();
    }
    swap(queue: number[], a: number, b: number) {
        let t = queue[a];
        queue[a] = queue[b];
        queue[b] = t;
    }
    compare(queue: number[], a: number, b: number): boolean {
        return this.fn(queue[a], queue[b]);
    }
    size(): number {
        return this.queue.length;
    }
    top(): number {
        return this.queue[0];
    }
    data(): number[] {
        return this.queue;
    }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */