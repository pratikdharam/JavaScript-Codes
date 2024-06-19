//IIFE Immediatly invoke function expression


//normal function calling
function one()
{
    console.log("NORMALLY DB CONNECTED");
}

one();


//we ise iife to dont get disturb by global pollutions / variables

//named iife

(function two()
{
    console.log("NAMED DB CONNECTED ");
})();// use semicolon to terminate first function


//unnamed
( (name) => {
    console.log("ARROW UNAMED DB CONNECTED");
    console.log(`Got it? ${name}`);
})('Pratik')

