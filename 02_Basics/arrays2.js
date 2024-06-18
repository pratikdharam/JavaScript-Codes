const dost = ["Pratik", "Ajinkya", "Sarthak"]

const aur_dost = ["Kishya", "Ritya", "Rohan"]


// dost.push(aur_dost)

// console.log(dost);

const sab_dost = dost.concat(aur_dost)

// console.log(sab_dost);

const sab_dost2 = [...dost, ...aur_dost]

// console.log(sab_dost2);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);


console.log(Array.isArray("Pratik"));
const array_hai = Array.from("Pratik");
console.log(Array.isArray(array_hai));

console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));