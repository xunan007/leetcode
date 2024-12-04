function decodeString(s: string): string {
    // 先进栈，遇到]后开始出栈，直到遇到[
    // 拼凑好字符串后再次入栈，直到遇到第二个[停下
    // 另外这里还得处理数字大于10的情况
    let stack = new Array();
    let num = '0';
    for (let i = 0; i < s.length; i++) {
        if (!isNaN(Number(s[i]))) {
            num += s[i];
        } else {
            // 数字入栈
            if (num !== '0') {
                stack.push(Number(num));
                num = '0';
            }
            // 非 ] 入栈
            if (s[i] !== ']') {
                stack.push(s[i]);
            } else {
                // ] 出栈
                // 连续出栈到遇到 [
                let str = '';
                let v = stack.pop();
                while (v !== '[') {
                    str = v + str;
                    v = stack.pop();
                }
                // 如果前面是数字
                if (!isNaN(stack[stack.length - 1])) {
                    let result = '';
                    let nums = stack.pop();
                    for (let i = 0; i < nums; i++) {
                        result += str;
                    }
                    str = result;
                }
                // 把字符串再推回去
                stack.push(str);
            }
        }
    }
    return stack.join('');
};