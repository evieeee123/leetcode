/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let str = "";
    let char = "abcdefghijklmnopqrstuvwxyz";
    let num = "0123456789"
    
    for(let ch of s){
        if (char.includes(ch.toLowerCase())) {
           str += ch.toLowerCase();
        } else if (num.includes(ch)){
            str += ch;
        }
        // console.log(str)
    }
    
    return str === str.split("").reverse().join("")
};