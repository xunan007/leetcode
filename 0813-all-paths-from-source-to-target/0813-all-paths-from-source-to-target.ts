function allPathsSourceTarget(graph: number[][]): number[][] {
    let path: number[] = [];
    let result: number[][] = [];

    // 本质就是回溯
    const dfs = (i: number): void => {
        if (i === graph.length - 1) {
            result.push(path.slice());
            return;
        }
        let to = graph[i];
        for (let j = 0; j < to.length; j++) {
            path.push(to[j]);
            dfs(to[j]);
            path.pop();
        }
    };
    // 唯一区别，根节点要先处理
    path.push(0);
    dfs(0);
    return result;
}

