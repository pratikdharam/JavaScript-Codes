//object literals

//declaring symbol
const sym1 = Symbol("key1")


const JsUser = 
{
    name : "Pratik" ,
    "full name" : "Pratik Dharam" ,
    [sym1] : "Value1",
    age : 20 ,
    location : "Shirdi" ,
    email : "pratik@google.com",
    isLoggedIn : false

}

console.log(JsUser.name);
console.log(JsUser["name", ["age"]]);
console.log(JsUser[sym1]);


JsUser.email = "pratik@yahoo.com"
console.log(JsUser.email);

// Object.freeze(JsUser)
JsUser.email = "pratik@gmail.com"
console.log(JsUser.email); //it will not change because of Object.freeze() method


JsUser.greetings = function()
{
    console.log("Hello World");
}

console.log(JsUser.greetings());