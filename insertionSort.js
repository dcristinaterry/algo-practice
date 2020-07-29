function insertionSort(collection) {
    const array = Array.from(collection); 
    for (let right = 1; right < array.length; right++) {
        
        for (let left = right; array[left - 1] > array[left]; left--) {
            
            swap(array, left - 1, left); 
        }
    }
    return array;
}
function swap(array, from, to) {
    // ES6 array destructing
    [array[from], array[to]] = [array[to], array[from]];
    }


let test1 = [1,9,7,8,10,2,3]

console.log(insertionSort(test1));