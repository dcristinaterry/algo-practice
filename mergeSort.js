

let exampleArr = [9, 5, 7, 8, 6, 3, 2, 1, 4]

function splitArray(tempArr) {

    let half = Math.ceil(tempArr.length / 2)
console.log(half)
    let arrRight = [...tempArr.slice(0, half)]
    let arrLeft = [...tempArr.slice(half)]


    if (tempArr.length < 2) {
        return tempArr;
    }
    if (tempArr.length === 2) {
        // console.log(tempArr)
        if (tempArr[0] > tempArr[1]) {
            // console.log(tempArr)
            return [tempArr[1], tempArr[0]]
        } else {
            // console.log(tempArr)
            return tempArr;
        }

    }
    // console.log(splitArray(arrRight))
    // console.log(splitArray(arrLeft));
    // console.log(tempArr)
    return merge(splitArray(arrRight), splitArray(arrLeft))

    

}

function merge(arr1, arr2){
    let mergedArr=[]
  
    let i=0;
    let j=0;
    let indextotal=  arr2.length + arr1.length;

    for(let index=0 ; index<indextotal;index++){
        if(i<arr1.length && j<arr2.length){
            if(arr1[i]<=arr2[j]){
                mergedArr.push(arr1[i]);
              i++;
            }else{
                mergedArr.push(arr2[j]);
              j++;
            }
        }
    }
    let restArr=[]

    i < arr1.length ? restArr=arr1.slice(i) : restArr = arr2.slice(j)
    console.log("rest",restArr);
    mergedArr = [...mergedArr, ...restArr]
    console.log("merged",mergedArr)
    return mergedArr;
}
console.log(splitArray(exampleArr));



