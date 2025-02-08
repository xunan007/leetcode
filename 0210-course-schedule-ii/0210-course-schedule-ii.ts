function findOrder(numCourses: number, prerequisites: number[][]): number[] {
    // 参考：https://leetcode.cn/problems/course-schedule/solutions/250377/bao-mu-shi-ti-jie-shou-ba-shou-da-tong-tuo-bu-pai-/?envType=study-plan-v2&envId=top-100-liked
    // 建临接表和入度数组
    let g: number[][] = Array.from({ length: numCourses }, () => [])
    let inDegree: number[] = new Array(numCourses).fill(0);
    for (let i = 0; i < prerequisites.length; i++) {
        let [to, from] = prerequisites[i];
        inDegree[to]++;
        g[from].push(to);
    }
    let queue: number[] = [];
    let result: number[] = []
    for (let i = 0; i < inDegree.length; i++) {
        if (inDegree[i] === 0) {
            queue.push(i);
        }
    }
    // BFS
    while (queue.length > 0) {
        let len = queue.length;
        for (let i = 0; i < len; i++) {
            let from = queue.shift();
            result.push(from);
            let tos = g[from];
            for (let j = 0; j < tos.length; j++) {
                let from = tos[j];
                inDegree[from]--;
                if (inDegree[from] === 0) {
                    queue.push(from);
                }
            }
        }
    }
    return result.length === numCourses ? result : [];
};