function isAnagram(s: string, t: string): boolean {
    let arr = new Array(26).fill(0);
    let pos = 'a'.charCodeAt(0);
    for (let i = 0; i < s.length; i++) {
        arr[s[i].charCodeAt(0)-pos]++;
    }
    for (let i = 0; i < t.length; i++) {
        arr[t[i].charCodeAt(0)-pos]--;
    }
    for (let i=0;i<arr.length;i++) {
        if (arr[i] !== 0) {
            return false;
        }
    }
    return true;

};