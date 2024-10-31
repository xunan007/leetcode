function totalFruit(fruits: number[]): number {
    const MAX = 2;

    let fruitMp = new Map();
    let result = -Infinity;
    let subLength = 0;

    const mapSet = (k) => {
        let res = fruitMp.get(k);
        if (res) {
            fruitMp.set(k, ++res);
        } else {
            fruitMp.set(k, 1);
        }
    };
    const mapDel = (k) => {
        let res = fruitMp.get(k);
        if (res === 1) {
            fruitMp.delete(k);
        } else {
            fruitMp.set(k, --res);
        }
    };

    for (let start = 0, end = 0; end < fruits.length; end++) {
        mapSet(fruits[end]);

        if (fruitMp.size <= MAX) {
            subLength = end - start + 1;
            if (subLength > result) {
                result = subLength;
            }
        }
        
        while(fruitMp.size > MAX) {
            mapDel(fruits[start]);
            start++;
        }
    }

    return result > 0 ? result : 0;
};