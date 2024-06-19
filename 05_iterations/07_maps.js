const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// const newNums = myNumers.map( (num) => { return num + 10  } )

// console.log(newNums);

//multiple operations we can perform on it 

const newNums2 = myNumers   
                    .map( (val) => val*10  )
                    .map( (val) => val + 1 )
                    .filter( (val) => val>90 )


                    console.log(newNums2);