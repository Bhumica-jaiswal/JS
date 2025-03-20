const arr=[7,6,5,1,4,3]
const heroes=["shakti" , "bom" , "apples"]

const arr2 = new Array(7,8,9,2)
// console.log(arr[2]);
//array methods
// arr.push(10)
// arr.pop()
// arr.unshift(9)
const myarr = arr2.join()
// console.log(typeof myarr);

//slice and spice
//  slice doesn't change the actual array whereas splice does!
console.log("A ", arr);

const myn1 = arr.slice(1, 3)

console.log(myn1);
console.log("B ", arr);


const myn2 = arr.splice(1, 3)
console.log("C ", arr);
console.log(myn2);