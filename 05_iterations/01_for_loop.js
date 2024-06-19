//for

// for (let i = 0; i <=10; i++) {
//     console.log(i);
    
// }


// for (let i = 0; i <=10; i++) {
 
//     if(i == 5)
//         {
//             console.log("We got number 5");
//         }
//     console.log(i);
    
// }

// for (let i = 0; i <=10; i++) {

//     console.log(`Outer loop i is ${i}`);

//     for (let j = 0; j <=10; j++) {
        
//         console.log(`Inner loop j is ${j} and outer value i is ${i}`);
        
//     }
    
// }

//lets print the table from 1 to 10


// for (let i = 1; i <=10; i++) {

//     for (let j = 0; j <=10; j++) {
        
//         console.log(i + ' * ' + j + ' =' + i*j);
        
//     }
    
// }


const myArray = [1,2,3]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}

// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);
    
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
    
}

