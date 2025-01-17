function letterCombinations(digits: string): string[] {
    if (digits === '') {
        return [];
    }

    let n2c: string[] = [
        "",
        "",
        "abc",
        "def",
        "ghi",
        "jkl",
        "mno",
        "pqrs",
        "tuv",
        "wxyz",
    ]
    let len = digits.length;
    let digitsArr: string[] = digits.split('');
    let result: string[] = [];
    let path: string[] = [];

    // 从答案的角度来思考
    const dfs = (i: number) => {
        if (i === len) {
            result.push(path.join(''));
            return;
        }
        let index = Number(digitsArr[i]);
        for (let j = 0; j < n2c[index].length; j++) {
            path.push(n2c[index][j]);
            dfs(i + 1);
            path.pop();
        }
    }
    dfs(0);
    return result;

};