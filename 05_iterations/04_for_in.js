//for in


//iterating object by the for in loop
// const myObj = {
//     js: "Javascript",
//     py: "Python",
//     java: "Java",
//     php: "PHP"
// }

// for (const key in myObj) {

//     console.log(`${key} has full form ${myObj[key]}`); //here we iterate the object key is key and myObj[key] is value
    
// }

//array by for in
// const myArray = ["apple", "banana", "cherry", "date", "elder"]

// for (const key in myArray) {
// //    console.log(key); // loop printed the index of array
//    console.log(myArray[key]); // loop printed the value of array
// }

const map = new Map()
{
    map.set('IN', 'India')
    map.set('PAK', 'Pakistan')
    map.set('FR', 'France')
}

for (const key in map) {
   console.log(map[key]); // map is not iteratbale by for in
}