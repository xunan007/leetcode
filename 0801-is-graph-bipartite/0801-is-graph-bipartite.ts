function isBipartite(graph: number[][]): boolean {
    // 参考：https://leetcode.cn/problems/is-graph-bipartite/solutions/332542/shou-hua-tu-jie-bfs-si-lu-by-hyj8/
    // 构建 isVisited 数组 0-未访问 1-红色 -1-蓝色
    let len = graph.length;
    let isVisited: number[] = new Array(len).fill(0);

    const bfs = (i: number): boolean => {
        let queue = [];
        queue.push(i);
        isVisited[i] = 1;
        while (queue.length > 0) {
            const len = queue.length;
            for (let j = 0; j < len; j++) {
                let item = queue.shift();
                let _queue = graph[item];
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

    for (let i = 0; i < graph.length; i++) {
        if (isVisited[i] === 0) {
            if (bfs(i) === false) {
                return false;
            }
        }
    }

    return true;
};