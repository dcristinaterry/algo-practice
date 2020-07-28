
// var twoSum = (nums, target) => {

//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (target === nums[i] + nums[j]) {
//                 return [i, j]
//             }
//         }
//     }


// };

// // ?????
// var twoSum = function (nums, target) {
//     const obj = {};
//     for (let i = 0; i < nums.length; i++) {

//         if (obj[target - nums[i]]) {
//             return [obj[target - nums[i]] - 1, i];
//         } else {
//             obj[nums[i]] = i + 1;
//         }
//     }
//     return -1;
// };

// var twoSum = function (nums, target) {
//     let obj = {};
//     for (let i = 0; i < nums.length; i++) {
//         if (obj[target - nums[i]] >= 0) {
//             return Array.of(obj[target - nums[i]], i);
//         }

//         obj[nums[i]] = i;
//     }
// };


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function (nums, target) {
//     const indexByValue = {};
//     const result = [];

//     for (let i = 0; i < nums.length; i += 1) {
//         const value = nums[i];
//         const remaining = target - value;

//         const indexOfRemaining = indexByValue[remaining]

//         if (indexOfRemaining != undefined) {
//             result.push(indexOfRemaining);
//             result.push(i);
//             return result;
//         }

//         indexByValue[value] = i;
//     }

//     throw new Error(`Failed to find 2 digits that sum to ${target}`)
// };


var twoSum = function (arrayTest, target) {
    let obj1;
    let obj2 = {};
//   [0,1,2,4] 6
    for (let i = 0; i < arrayTest.length; i++) {
        //  null != obj2[obj1=2];
        if (null != obj2[obj1 = arrayTest[i]]) 
            return [obj2[obj1], i]; 
            
            obj2[target - obj1] = i;
    }
};

let test1 = twoSum([3, 2, 6, 5,], 7);
// let test2 = twoSum([3, 3], 6);
// let test3 = twoSum([2, 5, 5, 11], 10)

// let test4 = twoSum([1, 2, 3, 3], 6)

console.log(arrayEquals(test1, [1, 3]));
// console.log(arrayEquals(test2, [0, 1]));
// console.log(arrayEquals(test3, [1, 2]));
// console.log(arrayEquals(test4, [2, 3]));


// console.log(test1)

function arrayEquals(a, b) {
    return Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every((val, index) => val === b[index]);
}



// var twoSum = function (nums, target) {
//     const indexByValue = {};
//     const result = [];

//     for (let i = 0; i < nums.length; i += 1) {
//         const value = nums[i];
//         const remaining = target - value;

//         const indexOfRemaining = indexByValue[remaining]

//         if (indexOfRemaining != undefined) {
//             result.push(indexOfRemaining);
//             result.push(i);
//             return result;
//         }

//         indexByValue[value] = i;
//     }

//     throw new Error(`Failed to find 2 digits that sum to ${target}`)
// };

// var twoSum = function (nums, target) {
//     let pairs = {};
//     for (let i = 0; i < nums.length; i++) {
//         if (pairs[nums[i]] != undefined) {
//             return [pairs[nums[i]], i];
//         } else {
//             pairs[target - nums[i]] = i;
//         }
//     }
// };
