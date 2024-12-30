function generateParenthesis(n: number): string[] {
    let result: string[] = [];
    let path: string[] = [];
    let l = n;
    let r = n;
    const backtracking = () => {
        if (l === 0 && r === 0) {
            result.push(path.join(''));
            return;
        }
        for (let i = 0; i < 2; i++) {
            if (i === 0 && l === 0) {
                continue;
            }
            if (i === 1 && r === 0) {
                continue;
            }
            if (i === 1 && r - 1 < l) {
                continue;
            }
            path.push(i === 0 ? '(' : ')');
            i === 0 ? l-- : r--;
            backtracking();
            path.pop();
            i === 0 ? l++ : r++;
        }
    };
    backtracking();
    return result;
}