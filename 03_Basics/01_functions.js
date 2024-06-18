function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))

//function by me

function fun1(val1, val2) 
{
   ans= val1+val2
   return ans
}


const answer = fun1(3,4)

// console.log(answer);

//


function calculateCartItems(...values)
{
    return values
}

// console.log(calculateCartItems(100,200,22,234))


const user = 
{
    name: "pratik",
    age: 25,
    occupation: "software engineer"
}

function handleObject(anyobject)
{
    console.log(`Hey I am ${anyobject.name} and I am a ${anyobject.occupation}  `);

}

// handleObject(user)

handleObject({
    name: "hitesh",
    age: 25,
    occupation: "software engineer"
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));