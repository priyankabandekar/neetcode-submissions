class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        if (!nums.length) return [];
        const map = {};
        for (let i = 0; i < nums.length; i++) {
            map[nums[i]] = i;
        }

        for (let i = 0; i < nums.length; i++) {
            const targetNeeded = target - nums[i];

            if (!!map[targetNeeded] && map[targetNeeded] != i) {
                return [i, map[targetNeeded]].sort((a, b) => a - b);
            }
        }
    }
}
