function findItinerary(tickets: string[][]): string[] {
    let result: string[] = [];
    let path: string[] = [];
    // 先构建需要使用的数据结构
    let record: Map<string, string[]> = new Map();
    let canVisitCnt: Map<string, number> = new Map();
    tickets.forEach((item) => {
        let [from, to] = item;
        if (!record.has(from)) {
            record.set(from, [to]);
        } else {
            record.get(from).push(to);
        }
        let count = canVisitCnt.get(from + to) || 0;
        if (count === 0) {
            canVisitCnt.set(from + to, 1);
        } else {
            canVisitCnt.set(from + to, count + 1);
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
            // 这里是要防止死循环（一个支上走过的路要排除），还有防止to项都是一样的无效遍历（81用例）
            if (canVisitCnt.get(from + to[i]) === 0 || to[i] === to[i - 1]) {
                continue;
            }
            path.push(to[i]);
            canVisitCnt.set(from + to[i], canVisitCnt.get(from + to[i]) - 1);
            backtracking(to[i]);
            canVisitCnt.set(from + to[i], canVisitCnt.get(from + to[i]) + 1);
            path.pop();
        }
    };
    path.push('JFK');
    backtracking('JFK');
    return result;
};