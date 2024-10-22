function mySqrt(x: number): number {
    let l = 0;
    let r = x;
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (mid * mid === x) {
            return mid;
        }
        if (mid * mid < x) {
            l = mid + 1;
        }
        if (mid * mid > x) {
            r = mid - 1;
        }
    }
    // 还是一样的，左大右小
    return r;
};