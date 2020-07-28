var twoSum = (nums, target) => {

    for (let i = nums.length; i > 0; i--) {


        let difference = target - nums[i];
        // console.log("difference is:", difference)


        let tempArr = [...nums.slice(0, i), ...nums.slice(i + 1)]
        // console.log(tempArr);

        // console.log("indexof difference?:  ", tempArr.indexOf(difference))
        let index = tempArr.indexOf(difference);
        if (index !== -1) {
            let finalIndex = nums.indexOf(tempArr[index])
            return [finalIndex, i];
        }
    }


};






let test1 = twoSum([3, 2, 6, 2, 5,], 7);
let test2 = twoSum([3, 3], 6);
let test3 = twoSum([2, 5, 5, 11], 10)

let test4 = twoSum([1, 2, 3, 3], 6)

console.log(arrayEquals(test1, [1, 4]));
console.log(arrayEquals(test2, [0, 1]));
console.log(arrayEquals(test3, [1, 2]));
console.log(arrayEquals(test4, [2, 3]));


// console.log(test1)

function arrayEquals(a, b) {
    return Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every((val, index) => val === b[index]);
}