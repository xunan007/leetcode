function decodeString(s: string): string {
    // 先进栈，然后遇到]开始出栈拼小段的字符
    // 遇到[后找到前面的数字重组小段字符再进栈
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        stack.push(s[i]);
        if (stack[stack.length - 1] === ']') {
            stack.pop();
            let str = '';
            while (stack[stack.length - 1] !== '[') {
                str = stack[stack.length - 1] + str;
                stack.pop();
            }
            stack.pop();
            let num = '';
            while (!isNaN(stack[stack.length - 1])) {
                num = stack[stack.length - 1] + num;
                stack.pop();
            }
            if (num !== '') {
                for (let i = 0; i < Number(num); i++) {
                    stack.push(...(str.split('')));
                }
            }
        }
    }
    return stack.join('');
};
