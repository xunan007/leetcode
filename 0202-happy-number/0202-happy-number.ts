function isHappy(n: number): boolean {
    
    const getSum = (n: number): number => {
        let s = String(n);
        let sum = 0;
        for (let i=0; i<s.length;i++) {
            const x = Number(s[i]);
            sum += x * x;
        }
        return sum;
    }

    let record: Set<number> = new Set();
    
    const handle = (n: number): boolean => {
        let sum = getSum(n);
        if (sum === 1) {
            return true;
        }
        if (record.has(sum)) {
            return false;
        }
        record.add(sum);
        return handle(sum);
    }

    return handle(n);


};