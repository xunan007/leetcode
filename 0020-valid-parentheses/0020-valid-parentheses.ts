function isValid(s: string): boolean {
    // 奇数列那么肯定不匹配
    if (s.length % 2 !== 0) {
        return false;
    }
    let stack = new Array();
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(')');
        } else if (s[i] === '{') {
            stack.push('}');
        } else if (s[i] === '[') {
            stack.push(']');
        } else if (s[i] === stack[stack.length - 1]) {
            stack.pop();
        } else {
            // 3. 为空了，但是遍历还没结束，说明右括号多余
            if (stack.length === 0) {
                return false;
            } else {
                // 4. 左右括号不匹配
                if (stack[stack.length-1] !== s[i]) {
                    return false;
                }
            }
        }
    }
    // 1. 刚好为空，说明匹配
    // 2. 如果不为空，说明左括号多余
    return stack.length === 0;
};

