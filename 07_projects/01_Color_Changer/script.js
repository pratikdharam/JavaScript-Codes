//select all buttons
//select body

//perform forEach on button
//add event listener to each button
//when button is clicked, change body background color to button color


// const buttons = document.querySelectorAll('.button')
// const body = document.querySelector('body')

// buttons.forEach( function (button) {
//     button.addEventListener('click' , function (e) {
//         console.log("e.target");

//         if(e.target.id === 'grey' ){
//             body.style.backgroundColor = grey;
//         }
//         if(e.target.id === 'white' ){
//             body.style.backgroundColor = e.target.id;
//         }
//         if(e.target.id === 'blue' ){
//             body.style.backgroundColor = e.target.id;
//         }
//         if(e.target.id === 'yellow' ){
//             body.style.backgroundColor = e.target.id;
//         }

//     } )
// } )


//again writing code for practice

//select all buttons
//select body
//perform forEach and add event listener to click event
//give condition


const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach( function(button) {
    button.addEventListener('click', function(e) {
        // console.log(e.target);

        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id
        }
    })

})
