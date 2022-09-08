/**
 * @param {string} s
 * @return {boolean}
 */
// var isPalindrome = function(s) {
//     let str = "";
//     let char = "abcdefghijklmnopqrstuvwxyz";
//     let num = "0123456789"
    
//     for(let ch of s){
//         if (char.includes(ch.toLowerCase())) {
//            str += ch.toLowerCase();
//         } else if (num.includes(ch)){
//             str += ch;
//         }
//         // console.log(str)
//     }
    
//     return str === str.split("").reverse().join("")
// };

var isPalindrome = function(s) {
    let newStr = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
    let i = 0;
    let j = newStr.length - 1;
    
    while (i < j){
        if(newStr[i] === newStr[j]){
            i++;
            j--;
        }else{
            return false
        }
    }
    return true
};