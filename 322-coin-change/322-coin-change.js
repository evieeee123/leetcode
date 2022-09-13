/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let res = _coinChange(coins, amount);
    return res === Infinity ? -1 : res;
    
};

const _coinChange = (coins, amount, memo ={}) => {
        
        if (amount === 0) return 0;
        if (amount < 0) return Infinity;
        let min = Infinity;
        if (amount in memo) return memo[amount];
    
        for (let coin of coins){
            let sum = 1 + _coinChange(coins, amount - coin, memo);
            min = Math.min(min, sum);
        }
        memo[amount] = min;
        return min;
}



