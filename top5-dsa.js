// # 1 - Palindrome Number is reverse get the same value
// Input: x = 121 --->>> Output: true
// Input: x = 10 --->>> Output: false

const isPalindrome = function (x) {
    // +x is convert to the number
    return x < 0 ? false : x === +x.toString().split("").reverse().join("");
}

const res = isPalindrome(121);
console.log(res) // Output: true

// ## 2 - Fibonacci Number is sum of previous number

// with recursions function in functions

// const fib = function (n) {
//     if (n <= 1) return n;

//     return fib(n - 1) + fib(n - 2);
// }

// console.log(fib(4));

// one line code
const fib = (n) => (n <= 1 ? n : fib(n - 1) + fib(n - 2));

console.log(fib(2))

// ### 3 - valid Anagram
// An Anagram is a word or phrase formed by rearranging the letters of
// a different word or phrase, using all the original letters exactly once.

// Input: (s = "anagram"), (t = "nagaram"): --->>> Output: true
// Input: (s = "rat"), (t = "car"): --->>> Output: false

const isAnagram = function (s, t) {
    if (s.length !== t.length) return false;
    let obj1 = {};
    let obj2 = {};

    for (let i = 0; i < s.length; i++) {
        obj1[s[i]] = (obj1[s[i]] || 0) + 1;
        obj2[t[i]] = (obj2[t[i]] || 0) + 1;
    }

    for (const key in obj1) {
        if (obj1[key] !== obj2[key]) return false;
    }

    return true;
}

console.log(isAnagram("anagram", "nagaram")) // Output: true

// #### 4 - Two Sum
// Brut Force Solutions is not a Obtimised Solutions

// Using Objects to speed up
const twoSum = function (nums, target) {
    var obj = {};
    for (let i = 0; i < nums.length; i++) {
        const n = nums[i];
        if (obj[target - n] >= 0) {
            return [obj[target - n], i]
        } else {
            obj[n] = i;
        }
    }
}

console.log(twoSum([2, 7, 11, 15], 9));

//  ##### 5 - Best Time to Buy and Sell Stocks
// Input: prices - [7,1,5,3,6,4] --->>> Output:5;
// Input: prices - [7,6,4,3,1] --->>> Output:0;

const maxProfit = function (prices) {
    let minStockPurchasePrice = prices[0] || 0;
    let profit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < minStockPurchasePrice) {
            minStockPurchasePrice = prices[i];
        }

        profit = Math.max(profit, prices[i] - minStockPurchasePrice);
    }

    return profit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));