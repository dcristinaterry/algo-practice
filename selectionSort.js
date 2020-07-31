function selectionSort(collection) {
    const array = Array.from(collection);
    for (let i = 0; i < array.length; i++) {
        let minimum = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[minimum] > array[j]) {
                
                selection = j; 
            }
        }
        if (minimum !== i) {
            swap(array, minimum, i); 
        }
    }
    return array;
}

function swap(array, from, to) {
    // ES6 array destructing
    [array[from], array[to]] = [array[to], array[from]];
}

let test1 = [1,9,7,8,10,2,3]

console.log(selectionSort(test1));