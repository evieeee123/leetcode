/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let hash1 = {}
    if (s.length !== t.length) return false;
    for(let i = 0; i < s.length; i++) {
        if(!hash1[s[i]]) {
            hash1[s[i]] = 1;
        } else {
            hash1[s[i]]++;
        }
    }
    
    for(let i = 0; i < t.length; i++) {
        if(!hash1[t[i]]) {
            return false;
        } else {
            hash1[t[i]]--;
        }
    }
    
    for(let key in hash1){
        if(hash1[key] !== 0){
            return false;
        }
    }
    return true;
}

//hash1 => s
//hash2 => t
//hash1 === hash2 return true
//false