function findContentChildren(g: number[], s: number[]): number {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    let count = 0;
    let startG = 0;
    // 优先考虑饼干，小饼干分配给小胃口
    for (let i = 0; i < s.length && startG < g.length; i++) {
        if (s[i] >= g[startG]) {
            count++;
            startG++;
        }
    }
    return count;
};