class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
           const numMapWithIndex: { [num: number]: number[] } = {};
    for (let i = 0; i < nums.length; i++) {
        if (!numMapWithIndex[nums[i]]) numMapWithIndex[nums[i]] = [i];
        else numMapWithIndex[nums[i]].push(i);
    }

    for (let i = 0; i < nums.length; i++) {
        const numNeeded = target - nums[i];

        if (!!numMapWithIndex[numNeeded]
            && !!numMapWithIndex[numNeeded].find(j => j != i)
        ) {
            const index2 = numMapWithIndex[numNeeded].find(j => j != i)!;
            return [i, index2];
        }

    }

    return [];
    }
}
