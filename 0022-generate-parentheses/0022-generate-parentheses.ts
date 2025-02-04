function generateParenthesis(n: number): string[] {
    let result: string[] = [];
    let path: string[] = [];

    // 需要的括号数
    let nl = n;
    let nr = 0;

    const dfs = (): void => {
        if (path.length === n * 2) {
            result.push(path.slice().join(''));
            return;
        }

        if (nl > 0) {
            path.push('(');
            nl--;
            nr++;
            dfs();
            path.pop();
            nl++;
            nr--;
        }

        if (nr > 0) {
            path.push(')');
            nr--;
            dfs();
            path.pop();
            nr++;
        }

    }

    dfs();
    return result;
}