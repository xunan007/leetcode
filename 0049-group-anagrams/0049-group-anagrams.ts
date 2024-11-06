function groupAnagrams(strs: string[]): string[][] {
    let pos = 'a'.charCodeAt(0);
    let store = new Map();
    strs.forEach((item) => {
        let coverArr = new Array(26).fill(0);
        if (item !== '') {
            for (let i = 0; i < item.length; i++) {
                coverArr[item[i].charCodeAt(0) - pos]++;
            }
        }
        let coverStr = coverArr.toString();
        if (!store.has(coverStr)) {
            store.set(coverStr, [item]);
        } else {
            let val = store.get(coverStr);
            val.push(item);
            store.set(coverStr, val);
        }
    });
    let result = [];
    for (let item of store.values()) {
        result.push(item);
    }
    return result;

};