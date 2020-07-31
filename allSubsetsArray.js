
function printSubsets2(initialArray, mySet, limit,  myOptionSet, prefix = [] ) {
    if (initialArray.length == 0) {
        return;
    }


    for (let i = 0; i < initialArray.length; i++) {
        
        console.log(initialArray[i])
        let joined = [...prefix, initialArray[i]]
        let sum=0;
        for(let element of joined){
            sum=sum+element;
        }
        if(sum <=limit){
            console.log("trying to add joined")
            myOptionSet.add(joined);
        }
        mySet.add(joined);
        printSubsets2(initialArray.slice(i + 1), mySet, limit, myOptionSet, [...prefix, initialArray[i]] )

    }
    return mySet;
}

let arr1 = [5, 2];
let arr2 = [5,2,3];
let mySet = new Set([[]]);
let myOptionSet = new Set();
let limit =7;
// let arrtotal2 = printSubsets(arr2);
// console.log("final  ", arrtotal2)
console.log(printSubsets2(arr1, mySet, limit, myOptionSet));
console.log(myOptionSet)

// var arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// let testSet = new Set([])
// let trythis = ["a", "b"];
// testSet.add(trythis)
// testSet.add(trythis)
// console.log(testSet.has(trythis), testSet)