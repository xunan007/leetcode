class MinStack {
    private stack: number[];
    private subStack: number[];
    constructor() {
        this.stack = new Array();
        this.subStack = new Array();
    }

    size(): number {
        return this.stack.length;
    }

    push(val: number): void {
        if (this.stack.length === 0) {
            this.stack.push(val);
            this.subStack.push(val);
            return;
        }
        let min = this.subStack[this.size() - 1];
        this.stack.push(val);
        min = Math.min(val, min);
        this.subStack.push(min);
    }

    pop(): void {
        this.stack.pop();
        this.subStack.pop();
    }

    top(): number {
        return this.stack[this.size() - 1];
    }

    getMin(): number {
        return this.subStack[this.size() - 1];
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */