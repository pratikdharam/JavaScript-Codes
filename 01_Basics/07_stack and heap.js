//primitive values

//when you try to change it you got a copy for example


let name = "Pratik"

let anotherName = name

anotherName = "Ajinkya"

// console.log(name);
// console.log(anotherName);


//non-primitive we got reference and that values get stored in the heap



let userOne =
{
    userId : "01" ,
    userMail : "user1@gmail.com"
}

let userTwo = userOne

userTwo.userId = "02"

console.log(userOne);
console.log(userTwo);

// by changing the value of user2 it get changed in one also beacsue both refrenced towards the same vlaue that stored in heap


//primitive values are stored in stack and non-primitive values are stored in heap.
