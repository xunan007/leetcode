function exist(board: string[][], word: string): boolean {
    let maxY = board.length;
    let maxX = board[0].length;
    let used: number[][] = [];
    for (let i = 0; i < maxY; i++) {
        used.push(new Array(maxX).fill(0));
    }
    // 两个优化
    // 1. 如果 word 当中字母出现的次数比 board 要多，那么直接返回 false
    const cnt = {};
    for (let i = 0; i < maxY; i++) {
        for (let j = 0; j < maxX; j++) {
            if (cnt[board[i][j]]) {
                cnt[board[i][j]]++;
            } else {
                cnt[board[i][j]] = 1;
            }
        }
    }

    const wordCnt = {};
    for (let i = 0; i < word.length; i++) {
        if (wordCnt[word[i]]) {
            wordCnt[word[i]]++;
        } else {
            wordCnt[word[i]] = 1;
        }
        let boardCnt = cnt[word[i]] ?? 0;
        if (wordCnt[word[i]] > boardCnt) {
            return false;
        }
    }

    // 2. 减少递归的次数
    // 如果word第一个字母在board中出现的次数比最后一个字母在board中出现的次数多，那么反过来查询，可以减少进入递归的次数
    if (cnt[word[0]] > cnt[word[word.length - 1]]) {
        word = word.split('').reverse().join('');
    }


    const canFind = (startX: number, startY: number, word: string): boolean => {
        used[startY][startX] = 1;
        // 没有需要找的字符了，说明结束了
        if (word.length === 0) {
            return true;
        }
        const find: number[][] = [
            [startX, startY - 1],
            [startX, startY + 1],
            [startX - 1, startY],
            [startX + 1, startY],
        ].filter((item) => {
            // 去掉不合法的，要符合没有被用过且不要溢出
            const x = item[0];
            const y = item[1];
            return x >= 0 && x < maxX && y >= 0 && y < maxY && used[y][x] === 0;
        });
        // 没有可用的位置了，找失败了
        if (find.length === 0) {
            used[startY][startX] = 0;
            return false;
        }
        for (let i = 0; i < find.length; i++) {
            const [x, y] = find[i];
            if (board[y][x] === word[0] && canFind(x, y, word.slice(1))) {
                return true;
            }
        }
        used[startY][startX] = 0;
        return false;

    };

    for (let i = 0; i < maxX; i++) {
        for (let j = 0; j < maxY; j++) {
            if (board[j][i] === word[0] && canFind(i, j, word.slice(1))) {
                return true;
            }
        }
    }

    return false;
};