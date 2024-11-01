function generateMatrix(n: number): number[][] {
    let result = [];
    // 先把空矩阵构建出来
    for (let i = 0; i < n; i++) {
        result.push([]);
    }
    // 判断能循环多少圈
    let loop = Math.floor(n / 2);

    // 最后一格是否需要单独处理
    if (n % 2 === 1) {
        result[loop][loop] = n * n;
    }

    // 初始循环的 len
    let len = n - 1;
    let num = 1;
    // 起始点位(y,x)
    let location = [0, 0]; //[0,0] [1,1]
    while (loop > 0) {
        // 1
        for (let i = 0; i < len; i++) {
            result[location[0]][location[1] + i] = num;
            num++;
        }

        // 2
        location[1] += len; //[0,3]
        for (let i = 0; i < len; i++) {
            result[location[0] + i][location[1]] = num;
            num++;
        }

        // 3
        location[0] += len; //[3,3]
        for (let i = 0; i < len; i++) {
            result[location[0]][location[1] - i] = num;
            num++;
        }

        // 4
        location[1] -= len; //[3,0]
        for (let i = 0; i < len; i++) {
            result[location[0]-i][location[1]] = num;
            num++;
        }

        // 重新定位 location
        location[0] -= len;
        location[0]++;
        location[1]++;
        console.log(location);

        loop--;
        len -= 2;
    }

    return result;
};