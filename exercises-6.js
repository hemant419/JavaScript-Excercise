// Write a JavaScript program to filter out the specified values from a specified array.Return the original array without the filtered values.
const pull = (arr, ...args) => {
    let argState = Array.isArray(args[0]) ? args[0] : args;
    let pulled = arr.filter((v, i) => !argState.includes(v));
    arr.length = 0;
    pulled.forEach(v => arr.push(v));
    return pulled;
};
let array1 = ['a', 'b', 'c', 'a', 'b', 'c'];
console.log(pull(array1, 'a', 'c'));
let array2 = ['a', 'b', 'c', 'a', 'b', 'c'];
console.log(pull(array2, 'b'));