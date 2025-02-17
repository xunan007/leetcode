function majorityElement(nums: number[]): number {
    let votes = 0;
    let num = null;
    for (const x of nums) {
        if (num === null) {
            num = x;
            votes++;
        } else {
            if (x === num) {
                votes++;
            } else {
                votes--;
                if (votes === 0) {
                    num = null;
                }
            }
        }
    }
    return num;
};