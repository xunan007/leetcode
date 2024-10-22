function isPerfectSquare(num: number): boolean {
    let l = 0;
    let r = num;
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (mid * mid === num) {
            return true;
        }
        if (mid * mid < num) {
            l = mid + 1;
        }
        if (mid * mid > num) {
            r = mid - 1;
        }
    }
    return false;
};