function wordBreak(s: string, wordDict: string[]): boolean {
    // 从递归转换到递推
    // let record: Set<string> = new Set();
    // for (let i = 0; i < wordDict.length; i++) {
    //     record.add(wordDict[i]);
    // }
    // let handleStr = s;
    // const dfs = (str: string): boolean => {
    //     if (str === '') {
    //         return true;
    //     }
    //     for (let j = str.length - 1; j >= 0; j--) {
    //         if (record.has(str.slice(j))) {
    //             return dfs(str.slice(0, j));
    //         }
    //     }
    //     return false;
    // }
    // return dfs(s);
    let dp: boolean[] = new Array(s.length).fill(false);
    let record: Set<string> = new Set();
    for (let i = 0; i < wordDict.length; i++) {
        record.add(wordDict[i]);
    }
    if (record.has(s[0])) {
        dp[0] = true;
    }
    for (let i = 1; i < s.length; i++) {
        for (let j = i; j >= 0; j--) {
            if (record.has(s.slice(j, i + 1))) {
                if (j - 1 < 0) {
                    dp[i] = true;
                } else {
                    dp[i] = dp[j - 1];
                }
                // 注意这段逻辑，很重要
                if (dp[i] === true) {
                    break;
                }
            }
        }
    }
    return dp[s.length - 1];
};