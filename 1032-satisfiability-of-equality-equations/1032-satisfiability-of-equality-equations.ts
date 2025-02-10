function equationsPossible(equations: string[]): boolean {
    // 并查集
    class UnionFind {
        roots: number[];
        ranks: number[];
        constructor(n) {
            // 当前元素所在树的根节点，用i表示自身
            this.roots = new Array(n);
            for (let i = 0; i < n; i++) {
                this.roots[i] = i;
            }
            // 以当前节点为根的树的深度
            this.ranks = new Array(n).fill(1);
        }
        find(i: number): number {
            if (this.roots[i] === i) {
                return i;
            }
            // 压缩路径，标识每个节点的根节点
            this.roots[i] = this.find(this.roots[i]);
            return this.roots[i];
        }
        union(i: number, j: number) {
            // union前执行find很重要，可以把没有状态压缩的节点给压缩了
            let x = this.find(i);
            let y = this.find(j);
            if (x === y) {
                return;
            }
            // 设置完以后不用去及时更新，反正只要不断的调用find就会渐进式的压缩
            if (this.ranks[x] < this.ranks[y]) {
                this.roots[x] = y;
            } else if (this.ranks[x] > this.ranks[y]) {
                this.roots[y] = x;
            } else {
                this.roots[y] = x;
                this.ranks[x]++;
            }
        }
    }

    let uf = new UnionFind(26);
    const INDEX = 'a'.charCodeAt(0);
    const parse = (s: string): { l: string, r: string, isEqual: boolean } => {
        let l: string = s[0];
        let r: string = s[3];
        let isEqual: boolean = s[1] === '=';
        return { l, r, isEqual };
    }
    for (let i = 0; i < equations.length; i++) {
        let s: string = equations[i];
        const { l, r, isEqual } = parse(s);
        if (isEqual) {
            uf.union(l.charCodeAt(0) - INDEX, r.charCodeAt(0) - INDEX);
        }
    }
    for (let i = 0; i < equations.length; i++) {
        let s: string = equations[i];
        const { l, r, isEqual } = parse(s);
        if (!isEqual) {
            // 如果不相等，但是实际上是相等的，那么矛盾，返回 false
            if (uf.find(l.charCodeAt(0) - INDEX) === uf.find(r.charCodeAt(0) - INDEX)) {
                return false;
            }
        }
    }
    return true;
};