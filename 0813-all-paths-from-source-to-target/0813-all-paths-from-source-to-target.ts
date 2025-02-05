function allPathsSourceTarget(graph: number[][]): number[][] {
    let path: number[] = [];
    let result: number[][] = [];
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
    path.push(0);
    dfs(0);
    return result;
};