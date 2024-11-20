/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
    if (s.length === 0) {
        return;
    }
    let left = 0;
    let right = s.length - 1;
    while(left < right) {
        let tmp = s[left];
        s[left] = s[right];
        s[right] = tmp;
        left++;
        right--;
    }
};