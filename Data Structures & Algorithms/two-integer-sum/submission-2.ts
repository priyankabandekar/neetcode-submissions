class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        if (!nums.length) return [];

        for (let i = 0; i < nums.length; i++) {
            const targetNeeded = target - nums[i];

            const index = nums.findIndex((num, j) => num == targetNeeded && i != j);

            if (index != -1) {
                return [i, index].sort((a, b) => a - b);
            }
        }
    }
}
