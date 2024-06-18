const myArr = [1,2,3,4,5]

// console.log(myArr);

const myArr2 = new Array(1,2,3,4,5)

// console.log(myArr2);

//array mehthods

myArr2.push(6)
myArr2.pop()

myArr2.unshift(0)
// myArr2.shift()
console.log(myArr2);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);
