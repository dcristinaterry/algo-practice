function* dummyIdMaker() {
    yield 0;
    yield 1;
    yield 2;
}
const generator = dummyIdMaker()
// getting values
console.log(generator.next()); // ↪️ {value: 0, done: false} 
console.log(generator.next()); // ↪️ {value: 1, done: false} 
console.log(generator.next()); // ↪️ {value: 2, done: false} 
console.log(generator.next()); // ↪️ {value: undefined, done: true}
// iterating generator values with for..of loops
for (const n of dummyIdMaker()) {
    console.log(n);
}
    // converting a generator to an array console.log(Array.from(dummyIdMaker()));