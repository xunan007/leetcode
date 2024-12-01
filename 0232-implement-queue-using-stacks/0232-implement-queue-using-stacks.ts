class MyQueue {
    private inStack: number[];
    private outStack: number[];
    constructor() {
        this.inStack = new Array();
        this.outStack = new Array();
    }

    push(x: number): void {
        this.inStack.push(x);
    }

    pop(): number {
        if (this.outStack.length > 0) {
            return this.outStack.pop();
        }
        console.log(this.inStack);
        const len = this.inStack.length;
        for (let i = 0; i < len; i++) {
            this.outStack.push(this.inStack.pop());
        }
        return this.outStack.pop();
    }

    peek(): number {
        if (this.outStack.length) {
            return this.outStack[this.outStack.length - 1];
        }
        return this.inStack[0];
    }

    empty(): boolean {
        if (!this.inStack.length && !this.outStack.length) {
            return true;
        }
        return false;
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */