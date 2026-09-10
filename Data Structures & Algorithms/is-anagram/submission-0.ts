class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length != t.length) return false;

        const sHash = this.setStrMap(s);
        const tHash = this.setStrMap(t);

        for (let i = 0; i < t.length; i++) {
            const tChar = t[i];
            if (tHash[tChar] != sHash[tChar]) return false;
        }

        return true;
    }

    setStrMap(str: string) {
        const map: { [s: string]: number } = {};
        for (let i = 0; i < str.length; i++) {
            if (!map[str[i]]) map[str[i]] = 1;
            else map[str[i]] = map[str[i]] + 1;
        }

        return map;
    }
}
