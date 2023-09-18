let person = {
    name: "Nilesh",
    role: "Frontend Developer"
}

let arr = ["arr1", "arr2", person];

arr.unshift("arr0"); // add first value at array

arr.shift(); // remove first value from array

// console.log(arr)

// looping methods
// #1 map
// #2 filter
// #3 reduce
// #4 some
// #5 every
// #6 for loop
// #7 while loop

// Reduce

const numbers = [1, 2, 3, 4, 5, 6];

// const newNum = numbers.reduce((prev, item) => {
//     return prev + item;
// }, 0);

// console.log(newNum) // output 21

// const newNum = numbers.some((item, index) => {
//     return item > 3
// });

// console.log(newNum) // output true

const newNum = numbers.every((item, index) => {
    return item > 3 // check every element is more than 3;
});

// console.log(newNum) // output false

// Spreed and Rest Operators

const nums = [1, 2, 3];
const nums2 = [4, 5, 6, 7, 8];

const finalNums = [...nums, ...nums2]; // add in one array with spread operator

// console.log(finalNums)

// Rest Operators
function sum(...numbers) {
    return numbers;
}

// console.log(sum(nums,nums2));

// Concat
const contactArr = nums.concat(nums2, arr);
// console.log(contactArr) // return a new

// Slice
const lastArray = nums.slice(-1);

// console.log(lastArray)

// splice
const newArr = nums2.splice(1, 2, "orrange")

// console.log(newArr)

// #Second Largest Number

function secondLargestNum(arr) {
    const uniqueArr = Array.from(new Set(arr));

    uniqueArr.sort((a, b) => {
        return b - a;
    })

    if (uniqueArr.length >= 2) {
        return uniqueArr[1];
    } else {
        return -1;
    }
}

// console.log(secondLargestNum([1, 7, 3, 4, 4, 5, 9, 6]))

// # Rotate array by K

// Input: numbs = [1,2,3,4,5,6,7], k = 3 ----->>>> Output: [5,6,7,1,2,3,4]

// function rotateArray(num, k) {
//     let size = num.length;

//     if (size > k) {
//         k = k % size;
//     }

//     const rotated = num.splice(size - k, size); // [5,6,7]

//     num.unshift(...rotated);

//     return num;
// }

// console.log(rotateArray([1,2,3,4,5,6,7],3))

//  Row code rotateArray

function rotateArray(num, k) {
    let size = num.length;
    if (size > k) {
        k = k % size;
    }
    reverse(num, 0, num.length - 1);
    reverse(num, 0, k - 1);
    reverse(num, k, num.length - 1);

    return num;
}

function reverse(num, left, right) {
    while (left < right) {
        const temp = num[left];
        num[left++] = num[right];
        num[right--] = temp;
    }
}

// console.log(rotateArray([1,2,3,4,5,6,7],3))

// # Remove Duplicate from Sorted Array
// Input: [1,1,2]  ----->>>> Output: 2,[1,2,_]
// Input: [0,0,1,1,1,2,2,3,4] ------>>>>>> Output: 5, [0,1,2,3,4,_,_,_,_]

