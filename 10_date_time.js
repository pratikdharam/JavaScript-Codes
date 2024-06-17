//Dates

let newDate = new Date();

// console.log(newDate.toString());
// console.log(newDate.toDateString());
// console.log(newDate.toLocaleDateString());
// console.log(typeof newDate);



let createDate = new Date(2024, 3, 3)
console.log(createDate.toDateString());


let timestamp = Date.now()

// console.log(timestamp);
// console.log(createDate.getTime());

console.log(Math.floor(Date.now()) / 1000);

let newDate1 = new Date()

let Month = newDate1.getMonth() +1
let Day = newDate1.getDay()
console.log(Month);
console.log(`Hey today is ${Day} and the ${Month} is going on`)


newDate.toLocaleString('default', {
    weekday: "long",
    
})