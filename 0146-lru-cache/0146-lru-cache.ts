class DoubleListNode {
    public key: number;
    public value: number;
    public prev: DoubleListNode|null;
    public next: DoubleListNode|null;
    constructor(key?: number, value?: number) {
        this.key = key;
        this.value = value;
    }
}

class LRUCache {
    private head: DoubleListNode;
    private tail: DoubleListNode;
    private capacity: number;
    private size: number;
    private cache: Map<number, DoubleListNode>
    constructor(capacity: number) {
        // 初始化
        this.capacity = capacity;
        this.size = 0;
        this.head = new DoubleListNode();
        this.tail = new DoubleListNode();
        this.cache = new Map();
        // 连接
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    get(key: number): number {
        let node = this.cache.get(key);
        if (node) {
            // 要把它挪到开头
            this.move2Head(node);
            return node.value;
        }
        return -1;
    }

    put(key: number, value: number): void {
        let node = this.cache.get(key);
        // 不存在
        if (!node) {
            if (this.size === this.capacity) {
                // 溢出了，要先删除再加
                let node = this.tail.prev;
                this.removeTail(node);
                this.cache.delete(node.key);
                // 释放内存，不然可能会内存泄漏
                node.prev = null;
                node.next = null;
            }
            // 直接在头的位置添加
            let node = new DoubleListNode(key, value);
            this.cache.set(key, node);
            this.add2Head(node);
            if (this.size !== this.capacity) {
                this.size++;
            }
            return;
        }
        // 存在，挪到开头，重写
        this.move2Head(node);
        node.value = value;
    }

    // 注意下面的方法只是修改链表，并不直接操作 cache

    // 添加到开头
    add2Head(node: DoubleListNode) {
        this.head.next.prev = node;
        node.next = this.head.next;
        node.prev = this.head;
        this.head.next = node;
    }

    // 移动到开头
    move2Head(node: DoubleListNode) {
        this.removeNode(node);
        this.add2Head(node);
    }

    // 删除最后一个元素
    removeTail(node: DoubleListNode) {
        this.tail.prev = node.prev;
        node.prev.next = this.tail;
    }

    // 删除元素
    removeNode(node: DoubleListNode) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */