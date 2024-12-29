function findItinerary(tickets: string[][]): string[] {
    let result: string[] = [];
    let path: string[] = [];
    // 先构建需要使用的数据结构
    let record: Map<string, string[]> = new Map();
    let isVisited: Map<string, number> = new Map();
    tickets.forEach((item) => {
        let [from, to] = item;
        if (!record.has(from)) {
            record.set(from, [to]);
        } else {
            record.get(from).push(to);
        }
        let count = isVisited.get(from + to) || 0;
        if (count === 0) {
            isVisited.set(from + to, 1);
        } else {
            isVisited.set(from + to, count + 1);
        }
    });
    // 对到达机场进行排序
    record.forEach((val) => {
        val.sort();
    });
    // 开始遍历
    const backtracking = (from: string) => {
        if (result.length !== 0) {
            return;
        }
        if (path.length === tickets.length + 1) {
            result = path.slice();
            return;
        }
        let to = record.get(from) || [];
        for (let i = 0; i < to.length; i++) {
            // 这里是要防止死循环（一个支上走过的路要排除），以及防止to项都是一样的无效遍历（81用例）
            if (isVisited.get(from + to[i]) === 0 || to[i] === to[i - 1]) {
                continue;
            }
            path.push(to[i]);
            isVisited.set(from + to[i], isVisited.get(from + to[i]) - 1);
            backtracking(to[i]);
            isVisited.set(from + to[i], isVisited.get(from + to[i]) + 1);
            path.pop();
        }
    };
    path.push('JFK');
    backtracking('JFK');
    return result;
};