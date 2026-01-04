function generateParenthesis(n: number): string[] {
    // 站在答案的角度 => 枚举下一个左括号的位置 => 左括号的位置受右括号的影响
    const result = [];
    const path = [];
    // balance=left-right
    const dfs = (i: number, balance: number) => {
        if (path.length === n) {
            const s = new Array(n * 2).fill(')');
            for (let i = 0; i < path.length; i++) {
                s[path[i]] = '(';
            }
            result.push(s.join(''));
            return;
        }
        for (let right = 0; right <= balance; right++) {
            // 在当前位置开始补多少个右括号以后可以加左括号
            path.push(i + right);
            dfs(i + right + 1, balance - right + 1);
            path.pop();
        }
    }

    dfs(0, 0);
    return result;
};
