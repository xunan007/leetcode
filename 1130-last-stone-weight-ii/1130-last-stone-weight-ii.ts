function lastStoneWeightII(stones: number[]): number {
    let sum = 0;
    for (let i = 0; i < stones.length; i++) {
        sum += stones[i];
    }
    // 整数不可分，所以不能这么判断，有可能确实被2除整，但是数字本身没办法切分了
    // if (sum % 2 === 0) {
    //     return 0;
    // }
    let fSum = Math.floor(sum / 2);
    let dp: number[] = new Array(fSum + 1).fill(0);

    for (let i = 1; i <= stones.length; i++) {
        for (let j = fSum; j >= 1; j--) {
            if (j - stones[i - 1] >= 0) {
                dp[j] = Math.max(dp[j], dp[j - stones[i - 1]] + stones[i - 1]);
            }
        }
    }

    return Math.abs(2 * dp[fSum] - sum);
};