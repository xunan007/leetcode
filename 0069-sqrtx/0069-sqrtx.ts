function mySqrt(x: number): number {
    let l = 0;
    let r = x;
    let ans = -1;
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (mid * mid === x) {
            ans = mid;
            return ans;
        }
        if (mid * mid < x) {
            ans = mid;
            l = mid + 1;
        }
        if (mid * mid > x) {
            r = mid - 1;
        }
    }
    return ans;
};