const user = 
{
    name: "Pratik",
    age: 21,
    welcomeMessage: function()
    {
        // console.log(`${this.name} , Welocme`);
        // console.log(this);
    }
}

user.welcomeMessage();
user.name = "Sarthak"
user.welcomeMessage()

// console.log(this);


// function test()
// {
//     let username = "Pratik"
//     console.log(this.username);// we cant use this keyword in function
// }

//chai()


// const chai = function ()
// {
//      let username = "Pratik"
//     console.log(this.username);
// }

// chai()


//arrow function
const chai = (num1, num2) => {
    return num1 + num2
}

// console.log(chai(3,5));

//another way

const chaii = (num1, num2) => (num1 + num2)

console.log(chaii(4,5));


const obj = () => ({username: "Pratik"})

console.log(obj());





