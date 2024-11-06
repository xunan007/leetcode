function canConstruct(ransomNote: string, magazine: string): boolean {
    let record = new Array(26).fill(0);
    let pos = 'a'.charCodeAt(0);
    for (let i = 0; i < magazine.length; i++) {
        record[magazine[i].charCodeAt(0) - pos]++;
    }
    for (let i = 0; i < ransomNote.length; i++) {
        if (--record[ransomNote[i].charCodeAt(0) - pos] < 0) {
            return false;
        }
    }
    return true;
};