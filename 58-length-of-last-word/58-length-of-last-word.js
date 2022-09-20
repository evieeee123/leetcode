/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let len = 0;
    let i = s.length - 1;
    while (i >= 0){
        if (s[i] === " " && len === 0){
            i--;
        }else if (s[i] !== " "){
            len++;
            i--;
        }else if (s[i] === " " && len !== 0){
            return len;
        }
    }
    return len
};