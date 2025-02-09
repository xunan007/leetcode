function possibleBipartition(n: number, dislikes: number[][]): boolean {
    // 构造零接表
    let g: number[][] = Array.from({ length: n }, () => []);
    for (let i = 0; i < dislikes.length; i++) {
        let [from, to] = dislikes[i];
        g[from - 1].push(to - 1);
        g[to - 1].push(from - 1);
    }
    // 构建isVisited数组
    let isVisited: number[] = new Array(n).fill(0);
    const bfs = (i: number): boolean => {
        let queue: number[] = [];
        queue.push(i);
        isVisited[i] = 1;
        while (queue.length > 0) {
            const len = queue.length;
            for (let j = 0; j < len; j++) {
                let item = queue.shift();
                let _queue = g[item];
                for (let k = 0; k < _queue.length; k++) {
                    if (isVisited[_queue[k]] === isVisited[item]) {
                        return false;
                    }
                    if (isVisited[_queue[k]] === 0) {
                        isVisited[_queue[k]] = -isVisited[item];
                        queue.push(_queue[k]);
                    }
                }
            }
        }
        return true;
    };

    for (let i = 0; i < n; i++) {
        if (g[i].length > 0 && isVisited[i] === 0) {
            if (!bfs(i)) {
                return false;
            }
        }
    }
    return true;

};