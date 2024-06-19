const myArray = [1,2,3]

// const totalOfArray = myArray.reduce( function (acc, currVal) {
//     console.log(`Accumulator value ${acc} , current value ${currVal}`);
//     return acc + currVal;
// },0 )
// console.log(totalOfArray);

//by arrow function

const totalArray = myArray.reduce( (acc,currVal) => acc +currVal ,0 )

console.log(totalArray);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

//add all the courses price and calculate total

const billToPay = shoppingCart.reduce( (acc, itemPrice) => acc + itemPrice.price ,0 )

console.log(billToPay);
