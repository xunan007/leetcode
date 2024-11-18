function fourSumCount(nums1: number[], nums2: number[], nums3: number[], nums4: number[]): number {
    let result = 0;
    const mp: Map<number, number> = new Map();
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            let sum = nums1[i] + nums2[j];
            let count = mp.get(sum) || 0;
            count++;
            mp.set(sum, count);
        }
    }
    for (let i = 0; i < nums3.length; i++) {
        for (let j = 0; j < nums4.length; j++) {
            let sum = nums3[i] + nums4[j];
            if (mp.get(0 - sum)) {
                result += mp.get(0 - sum);
            }
        }
    }
    return result;
};