/**
 * @param {string} s
 * @return {number}
 */
// var firstUniqChar = function(s) {
//     for (let i = 0; i < s.length; i++) {
//         if (s.indexOf(s[i]) === s.lastIndexOf(s[i])){
//             return i;
//         }
//     }
//     return -1;
// };

var firstUniqChar = function(s) {
    let hash = {};
    for (let i = 0; i < s.length; i++){
        if (!hash[s[i]]){
            hash[s[i]] = 1;
        }else{
            hash[s[i]]++;
        }
    }
    for(let i = 0; i < s.length; i++){
        if (hash[s[i]] === 1){
            return i
        }
    }
    return -1;
};