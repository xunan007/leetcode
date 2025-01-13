function minDistance(word1: string, word2: string): number {
    // 先计算公共最长子串，然后每个串的长度减去这个值，再加起来就是结果
    let dp: number[][] = [];
    for (let i = 0; i < word1.length; i++) {
        let arr = new Array(word2.length).fill(0);
        dp.push(arr);
    }
    for (let i = 0; i < word1.length; i++) {
        for (let j = 0; j < word2.length; j++) {
            if (word1[i] === word2[j]) {
                if (i === 0 || j === 0) {
                    dp[i][j] = 1;
                } else {
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                }
            } else {
                dp[i][j] = Math.max(i === 0 ? 0 : dp[i - 1][j], j === 0 ? 0 : dp[i][j - 1]);
            }
        }
    }
    const common = dp[word1.length - 1][word2.length - 1];
    return word1.length + word2.length - 2 * common;
};