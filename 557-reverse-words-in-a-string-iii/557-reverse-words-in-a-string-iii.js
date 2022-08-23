/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let arr = s.split(" ");
    for(let i = 0; i < arr.length; i++){
        arr[i] = reversed(arr[i])
    }
    return arr.join(" ")
};

const reversed = function(word){
    let wordarr = word.split("")
    let start = 0;
    let end = word.length - 1;
    
    while(start <= end) {
        [wordarr[start], wordarr[end]] = [wordarr[end], wordarr[start]];
        start++;
        end--;
    }
    return wordarr.join("")
}