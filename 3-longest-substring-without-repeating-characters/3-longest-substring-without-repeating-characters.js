/**
 * @param {string} s
 * @return {number}
*/
var lengthOfLongestSubstring = function(s) {
    let max = 0;
    let start = 0;
    let hash = {};
    
    for (let end = 0; end < s.length; end++) {
        let rChar = s[end];
        if (hash[rChar]) {
            hash[rChar]++;
        }else {
            hash[rChar] = 1
        }
        
        while (hash[rChar] > 1) {
            let lChar = s[start]
            
            if(hash[lChar] > 1) {
                hash[lChar]--;
            } else {
                delete hash[lChar]
            }
            start++;
        }
        
        max = Math.max(max, (end-start) + 1)
    }
    return max
};
