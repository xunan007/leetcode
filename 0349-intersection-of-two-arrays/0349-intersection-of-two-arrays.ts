function intersection(nums1: number[], nums2: number[]): number[] {
    let nums1Set = new Set(nums1);
    let resSet: Set<number> = new Set();
    for (let i = 0; i < nums2.length; i++) {
        if (nums1Set.has(nums2[i])) {
            resSet.add(nums2[i]);
        }
    }
    return Array.from(resSet);
};