/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    const currColor = image[sr][sc];
    if (currColor === color) return image;
    
    function fillDfs(image, row, col){
        if(row < 0 || col < 0 || row >= image.length || col >= image[0].length || currColor !== image[row][col]) return;
        image[row][col] = color;
        fillDfs(image, row-1, col);
        fillDfs(image, row+1, col);
        fillDfs(image, row, col-1);
        fillDfs(image, row, col+1);
        return image;
    }
    return fillDfs(image, sr, sc)
};