function evalRPN(tokens: string[]): number {
    if (tokens.length === 1) {
        return Number(tokens.pop());
    }
    let stack = new Array();
    for (let i = 0; i < tokens.length; i++) {
        if (!isNaN(Number(tokens[i]))) {
            stack.push(tokens[i]);
        } else {
            let result: number;
            let v1 = Number(stack.pop());
            let v2 = Number(stack.pop());
            if (tokens[i] === '+') {
                result = v2 + v1;
            }
            if (tokens[i] === '-') {
                result = v2 - v1;
            }
            if (tokens[i] === '*') {
                result = v2 * v1;
            }
            if (tokens[i] === '/') {
                result = parseInt((v2 / v1).toString());
            }
            stack.push(result);
        }
    }

    return stack[0];
};