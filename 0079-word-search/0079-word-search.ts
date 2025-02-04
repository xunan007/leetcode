function exist(board: string[][], word: string): boolean {
    let maxY = board.length;
    let maxX = board[0].length;
    let used: boolean[][] = [];
    for (let i = 0; i < maxY; i++) {
        let arr = new Array(maxX).fill(false);
        used.push(arr);
    }

    if (word.length > maxY * maxX) {
        return false;
    }
    // 找一下哪个字母出现的次数多
    let sCnt = 0;
    let sArr: number[][] = [];
    let eCnt = 0;
    let eArr: number[][] = [];
    for (let i = 0; i < maxY; i++) {
        for (let j = 0; j < maxX; j++) {
            if (board[i][j] === word[0]) {
                sCnt++;
                sArr.push([i, j]);
            }
            if (board[i][j] === word[word.length - 1]) {
                eCnt++;
                eArr.push([i, j]);
            }
        }
    }

    // 只要有一个没出现，那这个board就构成不了
    if (sCnt === 0 || eCnt === 0) {
        return false;
    }
    if (sCnt > eCnt) {
        sArr = eArr;
        word = word.split('').reverse().join('');
    }

    let i = 1;
    let result = false;
    const dfs = (y: number, x: number) => {
        if (i === word.length) {
            result = true;
            return;
        }
        let finds = [[y - 1, x], [y + 1, x], [y, x - 1], [y, x + 1]];
        finds = finds.filter(([y, x]) => {
            return y >= 0 && y < maxY && x >= 0 && x < maxX && !used[y][x];
        });
        for (let j = 0; j < finds.length; j++) {
            let [y, x] = finds[j];
            if (board[y][x] === word[i]) {
                i++;
                used[y][x] = true;
                dfs(y, x);
                i--;
                used[y][x] = false;
            }
        }
    }

    for (let i = 0; i < sArr.length; i++) {
        let [y, x] = sArr[i];
        used[y][x] = true;
        dfs(y, x);
        used[y][x] = false;
        if (result) {
            return true;
        }
    }

    return false;

};