class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const numMap: { [num: number]: number } = {};

        for (let i = 0; i < nums.length; i++) {
            const numNeeded = target - nums[i];

            if (numMap[numNeeded] != undefined) {
                return [numMap[numNeeded], i];
            }

            numMap[nums[i]] = i;
        }

        return [];
    }
}
