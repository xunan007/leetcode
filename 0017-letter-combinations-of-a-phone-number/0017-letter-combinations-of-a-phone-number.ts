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

    const backtracking = (depth: number, startIdx: number) => {
        if (depth === len) {
            result.push(path.join(''));
            return;
        }
        let str = n2c[Number(digitsArr[startIdx])];
        for (let i = 0; i < str.length; i++) {
            path.push(str[i]);
            backtracking(depth + 1, startIdx + 1);
            path.pop();
        }
    };

    backtracking(0, 0);
    return result;

};