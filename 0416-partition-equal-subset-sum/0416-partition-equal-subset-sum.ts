function canPartition(nums: number[]): boolean {
    // 转换成背包问题，能不能凑出一个数组是 sum/2
    // sum是自己累加的，如果能凑出 sum/2，那么另外一个数组自然也是 sum/2
    // 所以转换成 dp 的定义是
    // dp[i][j] 在容量为j时（最大为sum/2），前i个数是否能填满这个背包（不一定要全选）
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    if (sum % 2 !== 0) {
        return false;
    }

    sum = sum / 2;

    // i=0表示的是前0个，所以需要多补一行
    // let dp: boolean[][] = [];
    // for (let i = 0; i <= nums.length; i++) {
    //     dp.push(new Array(sum + 1));
    //     // 容量为0当然都能装满，处理第一列
    //     dp[i][0] = true;
    // }
    // for (let j = 1; j <= sum; j++) {
    //     dp[0][j] = false;
    // }

    // // 有两个状态：1-物品 2-背包
    // for (let i = 1; i <= nums.length; i++) {
    //     for (let j = 1; j <= sum; j++) {
    //         // 选 - 减掉这个容量后，这个东西之前的物品能够装满
    //         // 不选 - 前面的本来就能满足了
    //         dp[i][j] = (dp[i - 1][j - nums[i - 1]] || false) || (dp[i - 1][j] || false);
    //     }
    // }

    // 二维数组降一维度
    let dp: boolean[] = new Array(sum + 1).fill(false);
    dp[0] = true;
    for (let i = 1; i <= nums.length; i++) {
        for (let j = sum; j >= 1; j--) {
            // 选 - 减掉这个容量后，这个东西之前的物品能够装满
            // 不选 - 前面的本来就能满足了
            dp[j] = (dp[j - nums[i - 1]] || false) || (dp[j] || false);
        }
    }
    return dp[dp.length - 1];


    // return dp[nums.length][sum];
};
