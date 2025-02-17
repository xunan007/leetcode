class Node {
    child: Node[];
    end: boolean;
    constructor() {
        this.child = new Array(26).fill(null);
        this.end = false;
    }
}

class Trie {
    root: Node;
    readonly INDEX = 'a'.charCodeAt(0);
    constructor() {
        this.root = new Node();
    }

    insert(word: string): void {
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            let n = word[i].charCodeAt(0) - this.INDEX;
            // 注意要做保护，不然就覆盖掉了
            if (node.child[n] === null) {
                node.child[n] = new Node();
            }
            node = node.child[n];
        }
        node.end = true;
    }

    search(word: string): boolean {
        const INDEX = 'a'.charCodeAt(0);
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            let n = word[i].charCodeAt(0) - this.INDEX;
            if (node.child[n] === null) {
                return false;
            }
            node = node.child[n];
        }
        if (node.end) {
            return true;
        }
        return false;
    }

    startsWith(prefix: string): boolean {
        const INDEX = 'a'.charCodeAt(0);
        let node = this.root;
        for (let i = 0; i < prefix.length; i++) {
            let n = prefix[i].charCodeAt(0) - this.INDEX;
            if (node.child[n] === null) {
                return false;
            }
            node = node.child[n];
        }
        return true;
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */