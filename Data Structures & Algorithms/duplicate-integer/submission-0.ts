class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const map: { [index: number]: number } = {};
        for (const num of nums) {
            if (!map[num]) {
                map[num] = 1;
            } else map[num] = map[num] + 1;

            if(map[num] > 1) return true;
        }
        return false;
    }
}
