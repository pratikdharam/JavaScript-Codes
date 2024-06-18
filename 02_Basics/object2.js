const tinderUser = new Object()

tinderUser.id = "01"
tinderUser.name = "Pratik"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regularUser = 
{
    id: "02",
    fullname : 
    {
        userfullname: 
        {
            firstname: "Pratik",
            lastname: "Dharam"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);
// console.log(regularUser.fullname.userfullname.lastname);



const obj1= {1:"one", 2:"two", 3:"three"}
const obj2= {4:"four", 5:"five", 3:"three"}

//merege the objects 

const obj3 = {...obj1 , ...obj2}

// console.log(obj3);




const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email


// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


//de structure of object and json'


const course = 
{
    coursename: "javascript",
    price: "999",
    rating: "4.5"
}

console.log(course);

const {coursename} = course
const {price:p} = course

console.log(coursename);
console.log(p);

//json in object format 


// {
//     name: "pratik",
//     age: "21",
//     address: "shirdi"
// }

//can be in array format also

[
    {},
    {}, 
    {}
]