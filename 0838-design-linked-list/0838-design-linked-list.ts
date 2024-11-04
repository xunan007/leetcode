class MyLinkedList {
    private size: number;
    private head: ListNode;
    private tail: ListNode;

    constructor() {
        this.size = 0;
        this.head = null;
        this.tail = null;
    }

    getNode(index: number): ListNode {
        // 注意这个框架
        let node = new ListNode(0);
        node.next = this.head;
        for (let i = 0; i <= index; i++) {
            node = node.next;
        }
        return node;
    }

    get(index: number): number {
        if (index < 0 || index >= this.size) {
            return -1;
        }
        return this.getNode(index).val;
    }

    addAtHead(val: number): void {
        let node = new ListNode(val);
        if (this.size === 0) {
            this.head = node;
            this.tail = node;
            this.size++;
            return;
        }

        node.next = this.head;
        this.head = node;
        this.size++;

    }

    addAtTail(val: number): void {
        let node = new ListNode(val);
        if (this.size === 0) {
            this.head = node;
            this.tail = node;
            this.size++;
            return;
        }

        this.tail.next = node;
        this.tail = node;
        this.size++;
    }

    addAtIndex(index: number, val: number): void {
        if (index < 0 || index > this.size) {
            return;
        }
        if (index === 0) {
            this.addAtHead(val);
            return;
        }
        if (index === this.size) {
            this.addAtTail(val);
            return;
        }

        let curNode = new ListNode(0);
        curNode.next = this.head;
        let prev = null;

        for (let i = 0; i <= index; i++) {
            prev = curNode;
            curNode = curNode.next;
        }

        let node = new ListNode(val);
        prev.next = node;
        node.next = curNode;
        this.size++;
    }

    deleteAtIndex(index: number): void {
        if (index < 0 || index >= this.size) {
            return;
        }

        if (this.size === 1) {
            this.size--;
            this.head = null;
            this.tail = null;
            return;
        }

        let curNode = new ListNode(0);
        curNode.next = this.head;
        let prev = null;

        for (let i = 0; i <= index; i++) {
            prev = curNode;
            curNode = curNode.next;
        }

        if (index === 0) {
            this.head = curNode.next;
            this.size--;
            return;
        }

        if (index === this.size - 1) {
            prev.next = null;
            this.tail = prev;
            this.size--;
            return;
        }

        prev.next = curNode.next;
        this.size--;

    }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */