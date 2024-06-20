//access form add eventlistner and prevent default 

//access height and width and result

//check by if for validation

const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if( height <  0 || height === '' || isNaN(height)){

        results.innerHTML = "Enter Valid Height " , height  
    }

    else if(weight<0 || weight == "" || isNaN(weight)){
        results.innerHTML = "Enter Valid Weight " , weight
    }

    else{
       const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    

    if(bmi < 18.6){
        results.innerHTML = `<span>${bmi} <br> Under Wight</span> ` 
        // results.innerHTML = `<span> Under Weight </span>`
    }
    else if(bmi >= 18.6 && bmi <= 24.9){
        results.innerHTML = `<span>${bmi} <br> Normal Range</span> ` 
        // results.innerHTML = `<span> Normal Range </span>`
    }
    else if(bmi > 24.9){
        results.innerHTML = `<span>${bmi} <br> Over Weight</span> ` 
        // results.innerHTML = `<span> Over Weight </span>`
    }
    }



})